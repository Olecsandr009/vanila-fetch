import { price } from "../functions/price.js"
import { percent } from "../functions/percent.js"

export function getResults(products, list) {
    list.innerHTML = ""
    
    for(let i = 0; i < products.length; i++) {
        list.insertAdjacentHTML('beforeend', result(products[i]))
    }
}

export function result(product) {
    return `
        <li class="header__result-item">
            <div class="header__product">
                <img src=${product.thumbnail} alt="Product" />
            </div>
            <div class="header__result-content">
                <div class="header__product-left">
                    <a href="" data-product-link class="header__product-name">${product.title}</a>
                    <p class="header__product-text">${product.description}</p>

                    <div class="header__product-price">
                        <!-- Price -->
                        ${price(product.price, product.discountPercentage)}
                    </div>
                </div>
                <dvi class="header__product-right">
                    <div class="header__product-rating">
                        <!-- Rating	 -->
                        <div class="header__product-rating-body">
                            <div class="header__product-rating-active" style="width: ${percent(product.rating)}%;"></div>
                        </div>
                        <p class="header__product-stock">${product.stock}</p>				
                    </div>
                    
                    <p class="header__product-brand">${product.brand}</p>
                </dvi>
            </div>
        </li>
    `
}

