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

// Delete localStorage product
export function deleteItemStorage(item, storage) {
    try {
        const json = localStorage[storage]
        const storageData = JSON.parse(json)

        let storageIndex

        for(let i = 0; i < storageData.length; i++) {
            if(storageData[i].id == item.id) {
                storageIndex = i
                break
            }
        }

        storageData.splice(storageIndex, 1)

        localStorage[storage] = JSON.stringify(storageData)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}

// Is have item storage
export function isHaveItemStorage(item, storage) {
    try {
        const json = getLocalStorage(storage)
        const storageData = JSON.parse(json)
        let resultEl

        if(storageData.length) {
            storageData.forEach((element) => {
                if(parseInt(item.id) === parseInt(element.id)) {
                    resultEl = element
                }
            })
        }

        if(resultEl) return resultEl
        else return false
    } catch(e) {
        console.log(e)
        return false
    }
}