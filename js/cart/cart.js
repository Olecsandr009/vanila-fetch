import { getLocalStorage } from "../functions/localStorage.js"
import { maxQuantity, minQuantity } from "../functions/quantity.js"
import { setCartList } from "./functions/functions.js"

const products = document.querySelectorAll("[data-product]")
let quantity = document.querySelectorAll("[data-quantity]")

const list = document.querySelector("[data-cart-list]")
const submit = document.querySelector("[data-cart-submit]")


document.addEventListener("DOMContentLoaded", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    setCartList(products, list)
    quantity = document.querySelectorAll("[data-quantity]")

    if(quantity.length) {
        quantity.forEach((element) => {
            element.children[0].addEventListener("click", e => {
                minQuantity(element)
            })

            element.children[2].addEventListener("click", e => {
                maxQuantity(element)
            })
        })
    }
})

document.addEventListener("localStorage", e => {
    const json = getLocalStorage("products")
    const products = JSON.parse(json)

    setCartList(products, list)
    quantity = document.querySelectorAll("[data-quantity]")
})