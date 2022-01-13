const formDOM = document.querySelector('.edit-product-form');
const idDOM = document.querySelector('.taskID');
const nameInputDOM = document.querySelector('.name-input');
const priceInputDOM = document.querySelector('.price-input');
const imageInputDOM = document.querySelector('.image-input')
const imageDOM = document.querySelector('.image')
const featuredCheckboxDOM = document.querySelector('.featured-input');
const ratingInputDOM = document.querySelector('.rating-input');
const versionInputDOM = document.querySelector('.version-input');
const locationInputDOM = document.querySelector('.location-input');
const alertMessageDOM = document.querySelector('.alert-message');
const backBtnDOM = document.querySelector('.back-btn');

const params = window.location.search
const id = new URLSearchParams(params).get('id')

const url = '/api/v1/products';

const showProduct = async () => {
    try {
        const { data: {product},} = await axios.get(`${url}/${id}`)
        const {name, price, image, featured, rating, versionAdded, location} = product;

        idDOM.innerHTML = id;
        nameInputDOM.value = name;
        priceInputDOM.value = price;
        imageInputDOM.value = image;
        imageDOM.src = image;
        featuredCheckboxDOM.checked = featured;
        ratingInputDOM.value = rating;
        versionInputDOM.value = versionAdded;
        locationInputDOM.value = location;
    } catch (error) {
        console.error(error)
    }
}

showProduct();

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
    const newProduct = {
        "image": imageInputDOM.value,
        "name": nameInputDOM.value,
        "price": priceInputDOM.value,
        "featured": featuredCheckboxDOM.checked,
        "rating": ratingInputDOM.value,
        "versionAdded": versionInputDOM.value,
        "location": locationInputDOM.value
    }

    await axios.patch(`${url}/${id}`, newProduct)
        
    alertMessageDOM.innerHTML = "Product Edited"
    } catch (error) {
    alertMessageDOM.innerHTML = "Error, try again later"
    console.error(error)
    }
alertMessageDOM.style.visibility = "visible";
alertMessageDOM.style.display = "block";
})

backBtnDOM.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "index.html"
})

//update image preview when input changes
imageInputDOM.addEventListener('change', () => {
    imageDOM.src = imageInputDOM.value;
})