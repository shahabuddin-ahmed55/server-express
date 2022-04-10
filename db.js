const { MongoClient } = require("mongodb")
const url = "mongodb://localhost: 27017/test"

const Client = new MongoClient(url);

const run = async () => {
    try{
    // connect server to our node.js
    await Client.connect()
    // to our connection verifier
    await Client.db().command({ping: 1});
    console.log("connect server successfuly");
} finally {
    await Client.close();
}

}

module.exports = run;