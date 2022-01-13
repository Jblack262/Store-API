const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    console.log('connection attempted');
    try {
        // console.log('connection success')
        const products = await Product.find({})
        res.status(201).json({products})
    } catch (error) {
        // console.log('connection failed')
        res.status(500).json({msg:error})
    }
}

const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id).exec();
        res.status(201).json({product})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createProduct =  async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({product})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const product = await Product.findOneAndUpdate({ _id: id }, newProduct)
        res.status(201).json({newProduct})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteAll = async (req, res) => {
    try {
        await Product.deleteMany({})
        res.status(201).json({success: true})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findOneAndDelete({ _id: id });
        res.status(201).json({products})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteAll,
    deleteProduct
}