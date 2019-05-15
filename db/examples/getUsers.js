const Client = require("./index.js")

async function getUsers() {
  try {
    const res = await Client.query("SELECT * FROM Users")
    console.log(res)
    Client.end()
  } catch(err) {
    console.log(err)
    Client.end()
  }
}

getUsers()
