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
const loading = document.querySelector('[data-search-loading]')

let inputValue = ''

searchBtn.addEventListener('click', async e => {
	e.preventDefault()
    let products = ''

	try {
		products = await getSearch(input.value, 0)

		if(products.length) {
			searchCount.innerHTML = products.length
			cards.innerHTML = ''
			
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

const processChange = debounce(async () => {
	if(inputValue.length > 2) {
		try {
			const products = await getSearch(inputValue, 5)

			getResults(products, list)

		} catch(e) {
			console.log(e)
		} finally {
			loading.classList.remove('active')
		}
	}
}, 1500)


input.addEventListener('input', async (e) => {
	inputValue = e.target.value
	list.innerHTML = ""
	searchModal(input, result)
	loading.classList.add('active')
	processChange()
})

closeBtn.addEventListener('click', e => {
	e.preventDefault()
	input.value = ""

	searchModal(input, result)
})
