import { card } from '../card/card.js'
import { debounce } from '../functions/debounce.js'
import { getResults } from './result.js'

import { getSearch, searchModal } from './functions/functions.js'

const searchBtn = document.querySelector('[data-search]')
const input = document.querySelector('[data-input]')
const closeBtn = document.querySelector('[data-close]')
const result = document.querySelector('[data-result]')
const searchCount = document.querySelector('[data-search-count]')
const cards = document.querySelector('[data-cards]')
const list = document.querySelector('[data-result-list]')

let inputValue = ''

searchBtn.addEventListener('click', async e => {
	e.preventDefault()
    let products = ''

	try {
		products = await getSearch(input.value, 0)

		if(products.length) {
			searchCount.innerHTML = products.length
			
			for (let i = 0; i < products.length; i++) {
				cards.insertAdjacentHTML('beforeend', card(products[i]))
			}
		}

	} catch(e) {
		console.log(e)
	} finally {
		input.value = ""
		searchModal(input, result)
	}
})

input.addEventListener('input', async (e) => {
	inputValue = e.target.value
	searchModal(input, result)
    const products = await getSearch(inputValue, 10)

    if(inputValue.length > 2) {
        debounce(getResults(products, list), 500)
    }
})

closeBtn.addEventListener('click', e => {
	e.preventDefault()
	input.value = ""

	searchModal(input, result)
})
