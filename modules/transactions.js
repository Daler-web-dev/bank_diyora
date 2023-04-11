import { getData } from './http.request'
import headerCreater from '/modules/header'
let tBody = document.querySelector('tbody') 
let user = JSON.parse(localStorage.getItem('user'))

getData('/transactions?user_id=' + user.id)
    .then(res => {
        relaod_tr(res.data, tBody)
    })

function relaod_tr(arr, place) {
    place.innerHTML = ""

    for(let item of arr) {
        let tr = document.createElement('tr')
        let tId = document.createElement('td')
        let wallet = document.createElement('td')
        let cat = document.createElement('td')
        let amount = document.createElement('td')
        let date = document.createElement('td')

        tId.innerHTML = item.id
        wallet.innerHTML = item.card.name
        cat.innerHTML = item.category
        amount.innerHTML = item.total
        date.innerHTML = item.date

        tr.append(tId, wallet, cat, amount, date)
        tBody.append(tr)
    }
}

headerCreater()