const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mogoURI');

mongoose.set('strictQuery', true);

const  connection = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log('MogoDB connected....');
    }
    catch (err) {
        console.log(`Message:"""" ${err.message} string:"${db}"`);
        process.exit(1);
    }
}

module.exports = connection;