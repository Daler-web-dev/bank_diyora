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