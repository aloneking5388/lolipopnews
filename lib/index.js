const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

export default client;