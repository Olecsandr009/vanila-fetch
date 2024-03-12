import { products } from "../product/product.js"

export function setCartList(items, list) {
    list.innerHTML = ""

    for(let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML('beforeend', products(items[i]))
    }
}