const Client = require("../index.js")

async function dropUsers() {
  try {
    const res = await Client.query("DROP TABLE Zeebras")
    console.log(res)
    Client.end()
  } catch(err) {
    console.log(err)
    Client.end()
  }
}

dropUsers()
