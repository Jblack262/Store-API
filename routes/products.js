//Express Router setup
const express = require('express');
const router = express.Router();

//Import Controllers
const {getAllProducts, getProduct, createProduct, updateProduct, deleteAll, deleteProduct} = require('../controllers/products');

// router.get('/', getThing)
// router.post('/', createThing)
// router.post('/postman', createThing)
// router.post('/', updateThing)
// router.delete('/:id', removeThing)

// OR

// router.route('/').get((req, res) => {
//     res.send('All items')
// }).post(updateTask)

// router.route('/').get(getAllTasks);
// router.route('/postman').post(createPostmanThing)
// router.route('/:id').get(updateThing).delete(deleteThing)

router.route('').get(getAllProducts).post(createProduct).delete(deleteAll)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;