import { getData, postData, patchData } from './http.request'
let form = document.forms.add_transaction
let select = form.querySelector('select')
let user = JSON.parse(localStorage.getItem('user'))
let userCards = []

getData("/cards?user_id=" + user.id)
    .then(res => {
        userCards = res.data
        for (let item of res.data) {
            let opt = new Option(item.name, JSON.stringify(item))
            select.append(opt)
        }
    })

form.onsubmit = (e) => {
    e.preventDefault()
    let date = new Date()

    let transaction = {
        id: Math.random(),
        user_id: user.id,
        date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })

    transaction.card = JSON.parse(transaction.card)

    let { card } = transaction

    delete card.total
    delete card.user_id

    postData('/transactions', transaction)
        .then(res => {
            patchData('/cards/' + card.id, { "total": "total" - card.total })
            location.assign('/pages/transactions.html')
        })
}
