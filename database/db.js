const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://REMILI:VwHhuNJPpxi4Ld8x@nodejs-mongodb.cavezw9.mongodb.net/');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}