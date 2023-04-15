import axios from 'axios'
import { patchData, postData } from './http.request'
import {getData} from '/modules/http.request'
let form = document.forms.add_transaction
let select = form.querySelector('select')
let user = JSON.parse(localStorage.getItem('user'))

getData("/cards?user_id=" + user.id)
    .then(res => {
        for(let item of res.data) {
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

    let {card} = transaction

    let id = card.id 
    let card_total = card.total 

    delete card.total 
    delete card.user_id 

    if(transaction.total > card_total || transaction.total <= 0) {
        alert('Недостаточно средств')
    } else {
        postData('/transactions', transaction)
            .then(res => {
                
                if(res.status === 200 || res.status === 201) {
                    patchData('/cards/' + id, {total: card_total - transaction.total})
                        .then(res => {
                            if(res.status === 201 || res.status === 200) {
                                location.assign('/pages/transactions.html')
                            }
                        })
                }
    
            })
    }
}
