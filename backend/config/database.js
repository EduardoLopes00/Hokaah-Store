const mongoose = require("mongoose");
const  getIp  = require("../utils/getIp");



const { MONGO_URI } = process.env;



exports.connect = () => {
    console.log('Connecting to database...')

    console.log(getIp())

    mongoose   
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true                        
        })
        .then(() => {
            console.log('Successfully connected to database')
        })
        .catch((error) => {
            console.log('database connection failed. exiting now...');
            console.error(error)
            process.exit(1)
        })
}
