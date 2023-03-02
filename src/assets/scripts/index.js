const mobile_menu = document.querySelector('#modile_menu')
const burger_menu = document.querySelector('#burger_menu')

burger_menu.addEventListener('click', () => {
	mobile_menu.classList.toggle('hidden')
})
