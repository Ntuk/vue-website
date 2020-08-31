const mongoose = require('mongoose');
const keys = require('../keys');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

require("dotenv").config();
require("../models/user");
require("../models/product");
require("../models/category");
require("../models/product-hero");
require("../models/blog");
require("../models/contact");

exports.initSessionStore = function() {
  const store = new MongoDBStore({
    uri: keys.MONGODB_URI,
    collection: 'eincodeSessions'
  })

  store.on('error', (error) => console.log(error))

  return store;
}

exports.connect = function() {
  console.log(('keys: ', keys.MONGODB_URI);
  console.log('process.env: ', process.env.MONGODB_URI);
  return mongoose.connect(process.env.MONGODB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
     })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));
}