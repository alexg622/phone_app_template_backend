const { Client } = require('pg')
const connectionString = 'postgresql://alex@localhost/phone_app_template_backend'

const client = new Client({
  connectionString: connectionString,
})

async function runClient() {
  try {
    await client.connect()
    console.log("connected");
  } catch(error) {
    console.log("in error index");
    console.log(error);
    client.end()
  }
}

runClient()



module.exports = client
