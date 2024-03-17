import { deleteItemStorage, getItemStorage, setLocalStorage } from "../../functions/localStorage.js";
import { maxQuantity, minQuantity } from "../../functions/quantity.js";
import { products } from "../product/product.js"

// Set cart list
export function setCartList(items, list) {
    list.innerHTML = ""

    for(let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML('beforeend', products(items[i]))
    }
}

// Max quantity Store
export function maxQuantityStore(parentElement) {
    const productEl = parentElement.closest("[data-cart]");
    const productId = productEl.dataset.cart;

    const product = getItemStorage("products", productId)

    if(product) {
        product.quantity += 1
        maxQuantity(parentElement)
        
        deleteItemStorage(product, "products")
        setLocalStorage("products", product)

        return true
    } else {
        return false
    }
}

// Min quantity Store
export function minQuantityStore(parentElement) {
    const productEl = parentElement.closest("[data-cart]")
    const productId = productEl.dataset.cart;

    const product = getItemStorage("products", productId)

    if(product) {
        product.quantity -= 1
        minQuantity(parentElement)

        deleteItemStorage(product, "products")
        setLocalStorage("products", product)

        return true
    } else {
        return false
    }
}