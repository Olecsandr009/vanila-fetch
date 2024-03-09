export function debounce(func, delay) {
    const timeout = setTimeout(() => {
        func()
    }, delay)

    clearTimeout(timeout)
}