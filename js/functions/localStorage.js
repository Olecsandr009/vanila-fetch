// get localStorage product
export function getLocalStorage(storage) {
    return localStorage.getItem(storage)
}

// Set localStorage product
export async function setLocalStorage(storage, data) {
    try {
        const json = getLocalStorage(storage.toString())
        const products = JSON.parse(json)

        if(products) {
            products.push(data)
            localStorage.setItem(storage.toString(), JSON.stringify(products))
        } else {
            localStorage.setItem(storage.toString(), JSON.stringify([data]))
        }

        const event = new Event("localStorage")
        document.dispatchEvent(event)
        return true
    } catch(e) {
        console.log(e)
        return false
    }

}