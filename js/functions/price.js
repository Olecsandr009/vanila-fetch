export function price(price, discount = 0) {
    if(discount > 0) {
        const discountPrice = priceValue(price, discount)

        return `<p class="header__product-discount">${price}$</p><p class="header__product-price_value">${Math.round(discountPrice)}$</p>`
    } else {
        return `<p class="header__product-price_value">${price}$</p>`
    }
}

export function priceValue(price, discount = 0) {
    if(discount > 0) {
        const discountPrice = (+price - ((+price / 100) * +discount))
        return discountPrice
    } else {
        return price
    }
}