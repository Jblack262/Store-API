const mongoose = require('mongoose')
// const populateProducts = require('../populate')

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then( () => {console.log('CONNECTED TO MONGODB SUCCESSFUL')} )
    // .then ( ()=> {populateProducts()} )
    .catch( (err) => { console.error(`you suck: ${err}`) })
}

module.exports = connectDB