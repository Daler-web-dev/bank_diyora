import axios from 'axios'
import headerCreater from "/modules/header.js"
headerCreater()
let wList = document.querySelector('.walletsList')
let b_url = "http://localhost:7777"
let userId = JSON.parse(localStorage.getItem('user')).id
axios.get(`${b_url}/cards`)
    .then(res => {
        let arr = res.data.filter(el => {
            if (el.id === userId) {
                return el
            }
        });
        reloadWallets(arr, wList)
    })
function reloadWallets(arr, place) {
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
        currency.innerHTML = item.select

        wallet.append(type, currency)
        place.append(wallet)
    }
}
function rndColorGenerator() {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}