import { urls } from "../../../settings/urls.js";

// Get product
export async function getProduct(id) {
    const response = await fetch(urls.product.get + id)
    const product = await response.json()
    return product
}

// get localStorage product
export function getLocalStorage(storage) {
    return localStorage.getItem(storage)
}

// Set localStorage product
export async function setLocalStorage(storage, id) {
    try {
        const json = getLocalStorage(toString(storage))
        const product = await getProduct(id)
        const products = JSON.parse(json)

        if(products) {
            products.push(product)
            localStorage.setItem(toString(storage), JSON.stringify(products))
        } else {
            localStorage.setItem(toString(storage), JSON.stringify([product]))
        }
        return true
    } catch(e) {
        console.log(e)
        return false
    }

}