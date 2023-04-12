export function reloadWallets(arr, place) {
    place.innerHTML = ''
    if (arr.length === 0) {
        place.innerHTML = "У вас нету карт."
        return
    }
    for (let item of arr) {
        let wallet = document.createElement('div')
        let type = document.createElement('type')
        let currency = document.createElement('currency')

        wallet.classList.add('wallet')
        type.classList.add('type')
        currency.classList.add('currency')
        wallet.style.background = `linear-gradient(90deg, ${rndColorGenerator()}, ${rndColorGenerator()})`

        type.innerHTML = item.name
        currency.innerHTML = item.currency

        wallet.append(type, currency)
        place.append(wallet)
    }
    function rndColorGenerator() {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        return `rgb(${r}, ${g}, ${b})`
    }
}


export function reloadTransactions(arr, place) {
    place.innerHTML = ''
    reloadTableHead(place)
    let h4 = document.createElement('h4')
    h4.style.margin = '20px 0 0 0'
    h4.innerHTML = "У вас не было трансакций."
    if (arr.length === 0) {
        place.append(h4)
        return
    }
    for (let item of arr) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        td1.innerHTML = item.id
        td2.innerHTML = item.currency
        td3.innerHTML = item.category
        td4.innerHTML = item.total
        td5.innerHTML = item.date + ' дня назад'

        tr.append(td1, td2, td3, td4, td5)
        place.append(tr)
    }
}

export function reloadTableHead(place) {
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