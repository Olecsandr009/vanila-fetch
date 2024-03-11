export function card(product) {
	return `
			<div class='catalog__card'>
				<div class='catalog__card-image'>
					<img src="${product.thumbnail}" alt='Product' />
				</div>
				<div class='catalog__card-content'>
					<h3 class='catalog__card-name'>${product.title}</h3>
					<p class='catalog__card-text'>${product.description}</p>
					<button class='catalog__card-button button'>Купити</button>
				</div>
			</div>
		`
}
