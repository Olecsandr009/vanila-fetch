import { price } from "../../functions/price.js"

export function products(product) {
    return `
        <li class="header__cart-item">
            <div class="header__cart-media">
                <img src="${product.thumbnail}" alt="Product"/>
            </div>
            <div class="header__cart-content">
                <div class="header__cart-left">
                    <p class="header__cart-name">
                        ${product.title}
                    </p>
                    <div class="header__cart-price">
                        ${price(product.price, product.discountPercentage)}
                    </div>
                </div>
                <div class="header__cart-right">
                    <div data-quantity class="header__cart-quantity">
                        <button class="header__cart-min">-</button>
                        <input class="header__cart-input" value="${product.quantity}" placeholder="1"/>
                        <button class="header__cart-max">+</button>
                    </div>
                </div>
            </div>
            <button data-cart-submit class="header__cart-close">
                <svg style="width: 16px; height: 16px;">
                    <use xlink:href="./img/icons/close.svg#close"></use>
                </svg>
            </button>
        </li>
    `
}