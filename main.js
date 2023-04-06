let wList = document.querySelector('.walletsList')
let table = document.querySelector('.transactions table')

let data = [1, 2, 3, 4]

reloadWallets(data, wList)
reloadTransactions(data, table)

function reloadWallets(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let wallet = document.createElement('div')
        let type = document.createElement('type')
        let currency = document.createElement('currency')

        wallet.classList.add('wallet')
        type.classList.add('type')
        currency.classList.add('currency')
        wallet.style.background = `linear-gradient(90deg, ${rndColorGenerator()}, ${rndColorGenerator()})`

        type.innerHTML = 'Visa'
        currency.innerHTML = 'RUB'

        wallet.append(type, currency)
        place.append(wallet)
    }
}

function reloadTransactions(arr, place) {
    place.innerHTML = ''
    reloadTableHead(place)
    for (let item of arr) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        td1.innerHTML = '1232312'
        td2.innerHTML = 'VISA'
        td3.innerHTML = 'Автомобиль'
        td4.innerHTML = '414,000,000'
        td5.innerHTML = '4 дня назад'

        tr.append(td1, td2, td3, td4, td5)
        place.append(tr)
    }
}

function rndColorGenerator() {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

function reloadTableHead(place) {
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let th5 = document.createElement('th')
    th1.align = 'start'
    th2.align = 'start'
    th3.align = 'start'
    th4.align = 'start'
    th5.align = 'start'
    th1.innerHTML = 'ID'
    th2.innerHTML = 'Отправлено с кошелька'
    th3.innerHTML = 'Категория'
    th4.innerHTML = 'Сумма транзации'
    th5.innerHTML = 'Когда'

    tr.append(th1, th2, th3, th4, th5)
    place.append(tr)
}
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