import { getProduct } from "./functions/functions.js"
import { deleteItemStorage, isHaveItemStorage, setLocalStorage } from "../functions/localStorage.js"

const cards = document.querySelector("[data-cards]")

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
})