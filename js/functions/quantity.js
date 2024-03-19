// Min Quantity
export function minQuantity(quantity) {
    let inputValue = parseInt(quantity.children[1].value)

    if(!inputValue) {
        quantity.children[1].value = 1
        inputValue = 1
    }

    if(inputValue < 2) return inputValue
    quantity.children[1].value = inputValue - 1
    
    return inputValue - 1
}

// Max Quantity
export function maxQuantity(quantity) {
    let inputValue = parseInt(quantity.children[1].value)

    if(!inputValue) {
        quantity.children[1].value = 1
        inputValue = 1
    }

    quantity.children[1].value = inputValue + 1

    return inputValue + 1
}