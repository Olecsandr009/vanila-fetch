import { deleteItemStorage, getLocalStorage } from "../functions/localStorage.js"
import { maxQuantityStore, minQuantityStore, setCartList } from "./functions/functions.js"
import { getProduct } from "../product/functions/functions.js"
import { priceValue } from "../functions/price.js"

const list = document.querySelector("[data-cart-list]")
const allPrice = document.querySelector("[data-all-price]")

let allPriceResult = 0

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

        minQuantityStore(parentElement)
    }

    if(e.target.closest("[data-quantity-max")) {
        const maxElement = e.target.closest("[data-quantity-max]")
        const parentElement = maxElement.parentElement

        maxQuantityStore(parentElement)
    }
})


document.addEventListener("DOMContentLoaded", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    allPriceResult = 0

    if(products.length) {
        products.forEach((element) => {
            const currentPrice = parseInt(priceValue(element.price, element.discountPercentage))
            let newPrice = parseInt(element.quantity) * currentPrice

            allPriceResult += newPrice
        })
    }

    allPrice.innerHTML = allPriceResult
    setCartList(products, list)
})

document.addEventListener("localStorage", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    allPriceResult = 0

    if(products.length) {
        products.forEach((element) => {
            const currentPrice = parseInt(priceValue(element.price, element.discountPercentage))
            let newPrice = parseInt(element.quantity) * currentPrice

            allPriceResult += newPrice
        })
    }

    allPrice.innerHTML = allPriceResult
    setCartList(products, list)
})