import { urls } from "../../../settings/urls.js";

// Get product
export async function getProduct(id) {
    const response = await fetch(urls.product.get + id)
    const product = await response.json()
    return product
}