import { getLocalStorage } from "../functions/localStorage.js"
import { setCartList } from "./functions/functions.js"

const products = document.querySelectorAll("[data-product]")
const list = document.querySelector("[data-cart-list]")
const submit = document.querySelector("[data-cart-submit]")

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