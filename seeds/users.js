const Client = require("../db")

let text = "INSERT INTO Users(firstName, email, phoneNumber) VALUES($1, $2, $3)"
let values = ["Alex2", "alex.gm62288888@gmail.com", "4135-909-016489"]

async function createUser() {
  try {
    let res = await Client.query(text, values)
    console.log(res);
    Client.end()
  } catch(err) {
    console.log(err.stack)
    Client.end()
  }
}

createUser()
