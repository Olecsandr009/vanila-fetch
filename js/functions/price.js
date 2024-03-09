export function price(price, discount = 0) {
    if(discount > 0) {
        const discountPrice = (+price - ((+price / 100) * +discount))

        return `<p class="header__product-discount">${price}</p><p class="header__product-price_value">${discountPrice}</p>`
    } else {
        return `<p class="header__product-price_value">${price}</p>`
    }
}