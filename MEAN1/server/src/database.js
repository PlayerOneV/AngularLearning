const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mean-employees').then((db) => {
    console.log("DB connected");
}).catch((err) => {
    console.log(`Ha salido algo mal: ${err}`);
});