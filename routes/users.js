const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const Client = require("../db")

// router.get('/login', (req, res) => res.send("Login"))

// router.get('/register', (req, res) => res.send("Register"))

router.post('/register', (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  let errors = []
  //Boundary check errors later because might add oauth and number login

  if(errors.length > 0) {
    res.send("fail").status(500)
  } else {
    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) return res.status(500).json(err)

        //create user
        let queryString = "INSERT INTO Users(email, password) VALUES($1, $2)"
        let values = [email, hash]
        Client.query(queryString, values)
        .then(queryRes => {
          console.log(queryRes);
          console.log("in res");
          Client.end()
        })
        .catch(queryErr => {
          console.log(queryErr);
          console.log("in err");
          res.json(queryErr).status(500)
          return Client.end()
        })

        // bcrypt.compare(password, user.password, (err isMatch) => {
        //   if(err) throw err
        //   if(isMatch) {
        //     do something
        //   } else {
        //     do something
        //   }
        // })
        res.send(hash).status(200)
    }))
  }
})

module.exports = router
