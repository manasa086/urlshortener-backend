const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbname = "urlshortening";
const ObjectId = mongodb.ObjectId;
module.exports = { mongoClient, url, dbname, ObjectId };