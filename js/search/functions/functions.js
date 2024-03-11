import { urls } from '../../../settings/urls.js'

// Open search modal by value
export function searchModal(input, element) {
	if(input.value.split("").length > 2)
		element.classList.add('active')
	else
		element.classList.remove('active')
}

// Get products when you search
export async function getSearch(value, limit) {
	try {
		const url = urls.product.search + value + (limit > 0 ? "&limit=" + limit : "")

		const response = await fetch(url)
		const data = await response.json()
		return data.products
	} catch(e) {
		console.log(e)
		return undefined
	}
}

// Get value
export function getValue(e) {
	return e.target.value
}