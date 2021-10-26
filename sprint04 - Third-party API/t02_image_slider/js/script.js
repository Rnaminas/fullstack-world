const buttonNext = document.querySelector('.slider__arrow--next');
const buttonPrev = document.querySelector('.slider__arrow--prev');

function turnObjToArray(obj) {
	return [].map.call(obj, function (element) {
		return element;
	});
}

buttonNext.addEventListener('click', function () {
	const sliderItems = document.querySelectorAll('.slider__content__item');
	let activeItem = document.querySelector('.slider__content__item.active');
	let listBox = turnObjToArray(sliderItems);
	let index = listBox.indexOf(activeItem);
	let next = index + 1;
	if (activeItem) {
		if (next < sliderItems.length) {
			setTimeout(function () {
				buttonPrev.classList.remove('disable');
				sliderItems[index].classList.remove('active');
				sliderItems[index].style.transform = 'translateX(-' + 100 * index + '%)';
				sliderItems[index].classList.remove('active');
				sliderItems[next].classList.add('active');
				sliderItems[next].style.transform = 'translateX(-' + 100 * next + '%)';
			}, 300);
		}
		if (next === sliderItems.length - 1) {
			this.classList.add('disable')
		}
	}
});

buttonPrev.addEventListener('click', function () {
	const sliderItems = document.querySelectorAll('.slider__content__item');
	let activeItem = document.querySelector('.slider__content__item.active');
	if (activeItem) {
		let listBox = turnObjToArray(sliderItems);
		let index = listBox.indexOf(activeItem);
		let prev = index - 1;
		if (prev >= 0) {
			setTimeout(function () {
				buttonNext.classList.remove('disable');
				sliderItems[index].classList.remove('active');
				sliderItems[index].style.transform = 'translateX(+' + (100 * index) + '%)';
				sliderItems[index].classList.remove('active');
				sliderItems[prev].classList.add('active');
				sliderItems[prev].style.transform = 'translateX(-' + (100 * prev) + '%)';
			}, 300);
		}
		if (prev === 0) {
			this.classList.add('disable')
		}
	}
});