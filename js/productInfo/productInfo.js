import { deleteItemStorage, isHaveItemStorage, setLocalStorage } from "../functions/localStorage.js"
import { getProduct } from "../product/functions/functions.js"
import { content, sliderList } from "./product/product.js"

const popup = document.querySelector("[data-popup]")
const data = document.querySelector("[data-content]")
const slider = document.querySelectorAll("[data-slider]")

const body = document.body

popup.addEventListener("productInfo", async e => {
    try {
        const productId = popup.dataset.popup
        const product = await getProduct(productId)

        data.innerHTML = ""
        
        if(slider.length) {
            slider.forEach((element) => {
                element.innerHTML = ""
                sliderList(product, element)
            })

            slider[0].innerHTML = ""
            slider[1].innerHTML = ""

            sliderList(product, slider[1])
            sliderList(product, slider[0], true)
        }
        
        data.insertAdjacentHTML("beforeend", content(product))
    } catch(e) {
        console.log(e)
    }
})

popup.addEventListener("click", async e => {
    e.preventDefault()

    if(e.target.closest("[data-popup-close]") || e.target.closest("[data-shadow]")) {
        popup.classList.remove("active")
        body.style.overflow = "auto"
    }

    if(e.target.closest("[data-popup-buy]")) {
        try {
            const currentId = popup.dataset.popup
            const product = await getProduct(currentId)

            if(isHaveItemStorage(product, "products")) {
                const haveProduct = isHaveItemStorage(product, "products");
                deleteItemStorage(haveProduct, "products")

                
                haveProduct.quantity += 1
                setLocalStorage('products', haveProduct)
            } else {
                product.quantity = 1

                setLocalStorage("products", product)
            }
        } catch(e) {
            console.log(e)
        } finally {
            popup.classList.remove("active")
            body.style.overflow = "auto"
        }
    }
})