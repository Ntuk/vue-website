const mongoose = require('mongoose');
const keys = require('../keys');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

require("../models/user");
require("../models/product");
require("../models/category");
require("../models/product-hero");
require("../models/blog");
require("../models/contact");

exports.initSessionStore = function() {
  const store = new MongoDBStore({
    uri: 'mongodb+srv://nicotukiainen:J3dinpaluu@cluster0-siwa6.mongodb.net/nico-db?retryWrites=true&w=majority',
    collection: 'eincodeSessions'
  })

  store.on('error', (error) => console.log(error))

  return store;
}

exports.connect = function() {
  return mongoose.connect('mongodb+srv://nicotukiainen:J3dinpaluu@cluster0-siwa6.mongodb.net/nico-db?retryWrites=true&w=majority', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
     })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));
}
