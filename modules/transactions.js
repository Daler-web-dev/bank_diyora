import { reloadTransactions } from "/modules/ui"
import { getData } from "/modules/http.request"

let btnAdd = document.querySelector('.pay_add')
let tBody = document.querySelector('tbody') 

getData("/transactions").then(res => reloadTransactions(res.data, tBody))

btnAdd.onclick = () => location.assign("/pages/transaction.html")