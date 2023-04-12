import { getData } from './http.request'
import {reloadTransactions} from '../main'
let tBody = document.querySelector('tbody')
let user = JSON.parse(localStorage.getItem('user'))

getData('/transactions?user_id=' + user.id)
    .then(res => {
        reloadTransactions(res.data, tBody)
    })