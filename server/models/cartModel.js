import mongoose, { Schema } from "mongoose";




const CartProductSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1']
    },
    price: {
        type: Number,
        required: true
    }, name: {
        type: String,
        required: true
    }, size: {
        type: [
            {
                type: String,
                enum: ['S', 'M', 'L', 'XL', 'XXL']
            }
        ],

    },
    color: {
        type: [
            {
                type: String,
                enum: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Grey']
            }
        ],

    }

}, { _id: false })


const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [CartProductSchema],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }

})

// CartSchema.pre('save', (next) => {
//     const cart = this;
//     console.log(cart.products)
//     // this.totalPrice = this.products.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
//     // next()
// })


const CartModel = mongoose.model('Cart', CartSchema)

export default CartModel

