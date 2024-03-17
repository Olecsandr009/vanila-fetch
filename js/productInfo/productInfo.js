import { deleteItemStorage, isHaveItemStorage, setLocalStorage } from "../functions/localStorage.js"
import { getProduct } from "../product/functions/functions.js"

const popup = document.querySelector("[data-popup]")

popup.addEventListener("click", async e => {
    e.preventDefault()

    if(e.target.closest("[data-popup-close]") || e.target.closest("[data-shadow]")) {
        popup.classList.remove("active")
    }

    if(e.target.closest("[data-popup-buy]")) {
        try {
            const currentId = popup.dataset.popup
            const product = await getProduct(currentId)

            if(isHaveItemStorage(product, "products")) {
                const haveProduct = isHaveItemStorage(product, "products");
                deleteItemStorage(haveProduct, "products")

                
                haveProduct.quantity += 1
                setLocalStorage('products', haveProduct)
            } else {
                product.quantity = 1

                setLocalStorage("products", product)
            }
        } catch(e) {
            console.log(e)
        } finally {
            popup.classList.remove("active")
        }
    }
})