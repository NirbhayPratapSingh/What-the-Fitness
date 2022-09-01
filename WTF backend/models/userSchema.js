const { Schema, model } = require('mongoose')
const blogModel = require('./blogModel')
const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    uid: Number,
    mobile: Number,
    role:{
        type:String,
        enum: [ 'admin', 'member', 'trainer' ],
        required: true
    },
    status:{
        type:String,
        enum: [ 'active', 'inactive' ],
        required: true
    },
    password: { type: String, required: true },
    token: { type: String },
}, { timestamps: true });

const userDetails = model('userDetail', userSchema);
module.exports = userDetails;

