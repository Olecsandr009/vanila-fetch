import { getProduct } from "./functions/functions.js"
import { setLocalStorage } from "../functions/localStorage.js"

const cards = document.querySelector("[data-cards]")
let cardBuy = document.querySelectorAll("[data-card-buy]")

cards.addEventListener("cards", e => {
    cardBuy = document.querySelectorAll("[data-card-buy]")

    if(cardBuy.length) {
        cardBuy.forEach((button) => {
            button.addEventListener("click", async e => {
                e.preventDefault()

                try {
                    const currentId = button.parentElement.parentElement.dataset.product
                    const product = await getProduct(currentId)
                    
                    setLocalStorage("products", product)
                } catch(e) {
                    console.log(e)
                }
            })
        })
    }
})
