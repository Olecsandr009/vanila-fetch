import { setLocalStorage } from "./functions/functions.js"

const cards = document.querySelector("[data-cards]")
let cardBuy = document.querySelectorAll("[data-card-buy]")

cards.addEventListener("cards", e => {
    cardBuy = document.querySelectorAll("[data-card-buy]")

    if(cardBuy.length) {
        cardBuy.forEach((button) => {
            button.addEventListener("click", e => {
                e.preventDefault()
                
                const currentId = button.parentElement.parentElement.dataset.product
                setLocalStorage("products", currentId)
            })
        })
    }
})
