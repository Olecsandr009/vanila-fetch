import { categoryList, clickCheckbox, getCategories, toggleClass } from "./functions/functions.js"

const list = document.querySelector("[data-category-list]")
let checkboxes = document.querySelectorAll("[data-saitbar-checkbox]")

document.addEventListener("DOMContentLoaded", async (e) => {
    if(list) {
        const categories = await getCategories()
        categoryList(categories, list)

        checkboxes = document.querySelectorAll("[data-saitbar-checkbox]")
        
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", e => {
                e.preventDefault()

                toggleClass(checkbox)
            })
        })
    }  
})