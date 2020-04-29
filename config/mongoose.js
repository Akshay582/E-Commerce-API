const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecomDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
    console.log(">Error encountered in the config of mongoose");
});

db.once("open", () => {
    console.log(">MongoDB is running successfully.");
});