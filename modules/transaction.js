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

    userCards.forEach(el => {
        if (el.id === card.id) {
            if (el.total >= transaction.total) {
                el.total = el.total - transaction.total
                postData('/transactions', transaction)
                    .then(() => patchData('/cards/' + card.id, el)
                        .then(() => {
                            location.assign('/pages/transactions.html')
                            form.reset()
                        }))
            }
            else {
                alert("У вас не достаточно средств!")
            }
        }
    })
}
