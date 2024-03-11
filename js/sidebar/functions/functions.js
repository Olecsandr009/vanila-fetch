import { urls } from "../../../settings/urls.js"
import { category } from "../category.js"

// Get categories
export async function getCategories() {
    try {
        const categories = await fetch(urls.product.categories)
        const data = await categories.json()
        return data
    } catch(e) {
        console.log(e)
        return undefined
    }
}

// Category list
export function categoryList(categories, list) {
    if(categories && categories.length > 0) {
        for(let i = 0; i < categories.length; i++) {
            list.insertAdjacentHTML("beforeend", category(categories[i], i))
        }
    }
}

// Checkbox check
export function onCheckbox(checkbox) {
    checkbox
}

// Watch the checkboxes when click
export function clickCheckbox(checkboxes) {
    if(checkboxes.length) {
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("click", e => {
                return checkboxes[i]
            })
        }
    }
}

// Switch the class of the active tag span
export function toggleClass(element) {
    if(element) {
        element.classList.toggle("active")
    }
}