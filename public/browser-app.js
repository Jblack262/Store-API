const formDOM = document.querySelector('.add-product-form');
const nameInputDOM = document.querySelector('.name-input');
const priceInputDOM = document.querySelector('.price-input');
const imageInputDOM = document.querySelector('.image-input')
const featuredCheckboxDOM = document.querySelector('.featured-input');
const ratingInputDOM = document.querySelector('.rating-input');
const versionInputDOM = document.querySelector('.version-input');
const locationInputDOM = document.querySelector('.location-input');
const alertMessageDOM = document.querySelector('.alert-message');
const productsContainerDOM = document.querySelector('.products-container');
const deleteBtnDOM = document.querySelector('.delete-btn');

const url = '/api/v1/products';

const showProducts = async () => {
    try {
        const { data: {products},} = await axios.get(url)
        if (products.length < 1) {
            productsContainerDOM.innerHTML = '<h5 class="empty-list">No Tasks Listed...</h5>';
            return;
        }
        const allProducts = products.map((product) => {
            const {_id: productID, name, price, rating, versionAdded, location, image, featured} = product;
            return `<div class="product-card ${featured && "product-featured"}">
                        <div class="img-container">
                            <img src="${image}" alt="${name}">
                        </div>
                        <h3 class="name">${name}</h3>
                        <div class="description">
                            <h4 class="price"><span class="desc-price-label">$</span> ${price}</h4>
                            <h4 class="rating"><i class="fas fa-star rating-star"></i> ${rating}</h4>
                            <h4 class="dateAdded"><span class="desc-label">Added in:</span> ${versionAdded}</h4>
                            <h4 class="location"><span class="desc-label">Obtained from:</span> ${location}</h4>
                            <div class="product-links">
                                <!-- edit link -->
                                <a href="edit.html?id=${productID}" class="edit-link">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <!-- delete button -->
                                <button type="button" class="delete-btn" data-id="${productID}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>`
        }).reverse().join("")
        productsContainerDOM.innerHTML = allProducts;
    } catch(error) {
        productsContainerDOM.innerHTML = `<h5 class="empty-list">There was an error, please try again later... ${error}</h5>`
    }
}

showProducts();

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const product = {
        "name": nameInputDOM.value,
        "price": priceInputDOM.value,
        "image": imageInputDOM.value,
        "featured": featuredCheckboxDOM.checked,
        "rating": ratingInputDOM.value,
        "versionAdded": versionInputDOM.value,
        "location": locationInputDOM.value
    }
    console.log(product)

    try {
        axios.post(url, product)
            .then(() => {
                nameInputDOM.value = "";
                priceInputDOM.value = "";
                imageInputDOM.value = "";
                featuredCheckboxDOM.checked = "";
                ratingInputDOM.value = "";
                versionInputDOM.value = "";
                locationInputDOM.value = "";

                alertMessageDOM.innerHTML = "<p>Product successfully added.</p>";
                alertMessageDOM.style.color = "#27ae60";
            })
            .catch((error) => {
                console.error(error)
                alertMessageDOM.innerHTML = "There has been an error, <br/> try again later.";
                alertMessageDOM.style.color = "#e74c3c";
            })
            alertMessageDOM.style.visibility = "visible";
            alertMessageDOM.style.display = "block";
    } catch (error) {
        console.error(error);
    }
    console.log(product);
    showProducts();
})

//delete task /api/tasks/:id

productsContainerDOM.addEventListener("click", async (e) => {
    const el = e.target;
    console.log('click')
    if (el.parentElement.classList.contains('delete-btn')) {
        const id = el.parentElement.dataset.id;
        console.log(id)
        try {
            await axios.delete(`/api/v1/products/${id}`);
            showProducts();
        } catch (error) {
            console.log(error)
        }
    }
    // loadingDOM.style.visibility = "hidden";
})