import { getData } from './http.request'
import { reloadTransactions } from './ui'
import headerCreater from './header'
let tbody = document.querySelector('tbody')

getData('/transactions?user_id=' + user.id)
    .then(res => reloadTransactions(res.data, tbody))

headerCreater()