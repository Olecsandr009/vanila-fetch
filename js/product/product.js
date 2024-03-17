import { getProduct } from "./functions/functions.js"
import { deleteItemStorage, isHaveItemStorage, setLocalStorage } from "../functions/localStorage.js"

const cards = document.querySelector("[data-cards]")
const popup = document.querySelector("[data-popup]")

cards.addEventListener("click", async e => {
    e.preventDefault()

    if(e.target.closest("[data-card-buy]")) {
        try {
            const parentElement = e.target.closest("[data-card-buy]")
            const currentId = parentElement.closest("[data-product]").dataset.product
            const product = await getProduct(currentId)

            if(isHaveItemStorage(product, "products")) {
                const haveProduct = isHaveItemStorage(product, "products");
                deleteItemStorage(haveProduct, "products")
                
                haveProduct.quantity += 1
                setLocalStorage("products", haveProduct)
            } else {                
                product.quantity = 1
                
                setLocalStorage("products", product)
            }
        } catch(e) {
            console.log(e)
        }
    }

    if(e.target.closest("[data-product-link]")) {
        try {
            const link = e.target.closest("[data-product-link]")
            const currentId = link.closest("[data-product]").dataset.product
            const product = await getProduct(currentId)

            popup.dataset.popup = currentId
            popup.classList.add('active')    
        } catch(e) {
            console.log(e)
        }
    }
})