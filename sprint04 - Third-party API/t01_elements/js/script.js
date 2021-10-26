const charactersListItems = document.querySelectorAll('#characters li');
const charactersList = document.querySelector('#characters');
charactersList.style.display = 'flex';
charactersList.style.flexWrap = 'wrap';

charactersListItems.forEach((element) => {
	let circles = document.createElement('div');
	element.append(circles);
	element.style.display = 'flex';
	element.style.flexDirection = 'column';
	if (!element.classList.contains('good') && !element.classList.contains('evil')) {
		element.classList.add('unknown');
	}
	const dataAtributes = element.dataset.element;
	if (dataAtributes) {
		let elementsClasses = dataAtributes.split(' ');
		elementsClasses.forEach((elementClass) => {
			let circle = document.createElement('div');
			circle.classList.add('elem');
			circle.classList.add(elementClass);
			circles.append(circle);
		});
	} else {
		element.setAttribute('data-element', 'none');
		let circle = document.createElement('div');
		let line = document.createElement('div');
		line.classList.add('line');
		circle.classList.add('elem');
		circle.append(line);
		circles.append(circle);
	}
});