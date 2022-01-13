# Store API

### JD Blackman

this is a store api used to create and store products in a database

##How to use
this api is not published so it can only be downloaded and used locally

open the root of the project and run the command "npm start" in it's terminal

##get list of items

GET /api/v1/products

returns array called "products"

##create a new product

POST /api/v1/products

returns the object that gets added to db

##update a product

PATCH /api/v1/products/:id
include the product id as a parameter
include the updated product in the request body

returns an object called "newProduct" with all new attributes that have been changed

##get individual product

GET /api/v1/products/:id
include the product id as a parameter

returns the product with the id you requested

##delete product

DELETE /api/v1/products/:id
include the product id as a parameter

returns object "success": true or false

##delete all products

DELETE /api/v1/products

returns object "success": true or false

#example product includes

- image url (string)
- name (string)
- price (number)
- featured (boolean)
- rating (num 0 - 5)
- version (number)
- location (string)
