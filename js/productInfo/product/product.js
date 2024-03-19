import {percent} from "../../functions/percent.js"
import { price } from "../../functions/price.js"

export function content(product) {
    return `
        <div class="popup__left">
            <h3 class="popup__name">${product.title}</h3>
            <p class="popup__description">${product.description}</p>
            <p class="popup__brand">${product.brand}</p>
        </div>
        <div class="popup__right">
            <div class="popup__rating">
                <p class="popup__stock">${product.stock}</p>
                <div class="popup__rating-body">
                    <div class="popup__rating-active" style="width: ${percent(product.rating)}%;"></div>
                </div>
            </div>
            <div class="popup__price">
                ${price(product.price, product.discountPercentage)}
            </div>
            <button data-popup-buy class="popup__buy">Купити</button>
        </div>
    `
}

export function sliderList(product, element, thumbs = false) {
    if(thumbs) {
        if(product && product.images.length) {
            product.images.forEach((image) => {
                element.insertAdjacentHTML("beforeend", slider(image))
            })
        }
    } else {
        if(product && product.images.length) {
            product.images.forEach((image) => {
                element.insertAdjacentHTML("beforeend", sliderThumbs(image))
            })
        }
    }
}

export function slider(image) {
    

     return `
        <div class="popup__slide swiper-slide">
            <div class="popup__slide-media">
                <img data-image src="${image}" alt="product"/>
            </div>
        </div>
     `
}

export function sliderThumbs(image) {
    

    return `
        <div class="popup__thumbs-slide swiper-slide">
            <div class="popup__thumbs-slide-media">
                <img data-image src="${image}" alt="product"/>
            </div>
        </div>
    `
}