const {model, models, Schema} = require('mongoose')

const vendorSchema = new Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    productsId: {type: [Schema.ObjecId], default: []}
})

const  VendorsModel = models.vendors || model('vendors', vendorSchema)

module.exports = VendorsModel