const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected Successfully to DB");
    } catch(err) {
        console.log("Failed to connect to DB", err);
        process.exit(1);
    }
}

module.exports = connectDB;