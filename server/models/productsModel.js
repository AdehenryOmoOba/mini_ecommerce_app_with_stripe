const {model, models, Schema} = require('mongoose')

const productsSchema = new Schema({
    category: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    vendorId: {type: Schema.ObjectId, required: true}
})

const  ProductsModel = models.products || model('products', productsSchema)

module.exports = ProductsModel