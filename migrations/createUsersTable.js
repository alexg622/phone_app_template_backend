const Client = require("../db")


let text = `CREATE TABLE IF NOT EXISTS Users(
  ID BIGSERIAL PRIMARY KEY,
  userName VARCHAR(200), 
  firstName VARCHAR(200),
  lastName VARCHAR(200),
  dobDay VARCHAR(2),
  dobMonth VARCHAR(2),
  dobYear VARCHAR(4),
  dobStr VARCHAR(200),
  dobDatetime Date,
  email VARCHAR(200) UNIQUE,
  phoneNumber VARCHAR(200) UNIQUE,
  password VARCHAR(200),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  imgOne VARCHAR(10000000),
  imgTwo VARCHAR(10000000),
  imgThree VARCHAR(10000000),
  imgFour VARCHAR(10000000),
  imgFive VARCHAR(10000000),
  imgSix VARCHAR(10000000)
)`

async function makeQueries() {
  try {
    const res = await Client.query(text)
    console.log(res)
    Client.end()
  } catch(err) {
    console.log(err)
    Client.end()
  }
}



makeQueries()
