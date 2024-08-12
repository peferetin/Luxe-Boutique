import express from 'express';
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    image: {
        type: String,
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;