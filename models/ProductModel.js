const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    images:[{
        type : String,
    }],
    description:{
        type : String,
        required: true
    },
    category:[{
        type : String,
        required: true
    }],
    sizes:[{
        type : String,
        required: true
    }],
    rating:{
        type : Number,
        required: true,
        default: 0
    },
    price:{
        type : Number,
        required: true,
        default: 0
    },
    countInStock:{
        type : Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true,
},)

module.exports = mongoose.model("product", productSchema);
