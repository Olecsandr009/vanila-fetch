import { deleteItemStorage, getLocalStorage } from "../functions/localStorage.js"
import { maxQuantity, minQuantity } from "../functions/quantity.js"
import { setCartList } from "./functions/functions.js"
import { getProduct } from "../product/functions/functions.js"

const list = document.querySelector("[data-cart-list]")

list.addEventListener("click", async e => {
    e.preventDefault()

    if(e.target.closest("[data-cart-delete]")) {
        const parentElement = e.target.closest("[data-cart-delete]")

        const productId = parentElement.parentElement.dataset.cart
        const product = await getProduct(productId)

        deleteItemStorage(product, "products")

        const event = new Event("localStorage")
        document.dispatchEvent(event)
    }

    if(e.target.closest("[data-quantity-min]")) {
        const minElement = e.target.closest("[data-quantity-min]")
        const parentElement = minElement.parentElement

        minQuantity(parentElement)
    }

    if(e.target.closest("[data-quantity-max")) {
        const maxElement = e.target.closest("[data-quantity-max]")
        const parentElement = maxElement.parentElement

        maxQuantity(parentElement)
    }
})


document.addEventListener("DOMContentLoaded", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    setCartList(products, list)
})

document.addEventListener("localStorage", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    setCartList(products, list)
})