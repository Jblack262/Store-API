const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');

//adds everything from products.json to the db
const populateProducts = async () => {
    console.log('populate')
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = populateProducts