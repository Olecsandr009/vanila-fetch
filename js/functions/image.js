export function image(element) {
    const width = element.width;
    const height = element.height

    if(width > height) {
        element.style.maxHeight = "100%"
        element.style.height = "100%"
        element.style.width = "auto"
    } else if(width <= height) {
        element.style.maxWidth = "100%"
        element.style.width = "100%"
        element.style.height = "auto"
    }
}