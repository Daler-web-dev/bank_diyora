let h1 = document.querySelector('h2')
let btn = document.querySelector('button')
let input = document.querySelector('input')

let loc = JSON.parse(localStorage.getItem('title'))

h1.innerHTML = loc.title


btn.onclick = () => {
	let obj = {
		title: input.value,
		isLoacal: true
	}

	h1.innerHTML = input.value

	localStorage.setItem('title', JSON.stringify(obj))
}