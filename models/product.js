const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [false, "Must provide A Product Image"]
    },
    name: {
        type: String,
        required: [true, "Must Provide A Product Name"],
        trim: true,
        maxlength: [50, 'Name Cannot Be More Than 50 Characters']
    },
    price: {
        type: Number,
        required: [true, "Must Provide A Product Price"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        required: [true, "Must Provide A Product Rating"]
    },
    versionAdded: {
        type: String,
        required: [true, "Must Provide A Version Added Date"]
    },
    location: {
        type: String,
        required: [true, "Must Provide A Product Location"],
        // enum: {values: ["Gold Chest", "Frozen Chest", "Wooden Crate", "Sandstone Chest", "Tinkerer's Workshop", "Ocean Chest", "Goblin Tinkerer", "Ivy Chest", "Obsidian Crate", "Sky Chest"],message: '{VALUE} is not supported',},
    }
})
//This is basic validation not advanced
module.exports = mongoose.model('Product', productSchema)