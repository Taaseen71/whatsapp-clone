// const mongoose = require('mongoose');
// const Schema = mongoose.Schema
// const Message = new Schema(
//     {
//         message: { type: String, required: true },
//         // imgUrl: { type: String, required: false },
//         name: { type: String, required: true },
//         timestamps: { type: String, required: true },
//         received: { type: Boolean, required: true }
//     }
// )

// module.exports = mongoose.model('messages', Message);


const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})


//collection
module.exports = mongoose.model('messagecontents', Schema)