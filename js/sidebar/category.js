function categoryClickHandler() {
    console.log("click handler")
}

export function category(category, index) {
    return `<li class='catalog__item'>
                <label data-saitbar-checkbox for='checkbox${index}' class='catalog__check-label'>
                    <span class='catalog__checkbox-span'>
                        <svg style="width: 14px; height: 14px;">
                            <use xlink:href="./img/icons/check.svg#check"></use>
                        </svg>
                    </span>
                    <input id='checkbox${index}' class='catalog__checkbox' type='checkbox'>
                    <p class='catalog__category'>${category}</p>
                </label>
            </li>
    `
}