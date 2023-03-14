require('dotenv').config()
const { startServer, app } = require('./mongodb')
const ProductsModel = require('./models/productsModel')
const VendorsModel = require('./models/vendorsModel')
const bcrypt = require('bcrypt')

app.get('/api', (req, res) => {
  res.status(200).json({success: true, message: 'Home Page'})
})

app.get('/api/products', async (req, res) => {
 try {
  const products = await ProductsModel.find({})
  res.status(200).json({success: true, products})
 } catch (error) {
  res.status(401).json({success: false, message: error.message})
 }
})

app.post('/api/create-vendor', async (req, res) => {
  try {
    const hashedPwd = bcrypt.hashSync(req.body.password, 10)
    const vendor = await VendorsModel.create({...req.body, password: hashedPwd})
    res.status(200).json({success: true, vendor})
  } catch (error) {
    res.status(401).json({success: false, message: error.message})
  }
})

app.get('/api/all-vendors', async (req, res) => {
  try {
   const vendors = await VendorsModel.find({})
   res.status(200).json({success: true, vendors})
  } catch (error) {
   res.status(401).json({success: false, message: error.message})
  }
 })



startServer()