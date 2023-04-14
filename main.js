import { getData } from "/modules/http.request"
import headerCreater from "/modules/header.js"
import { reloadWallets, reloadTransactions, reloadTableHead } from "/modules/ui"

headerCreater()

let wList = document.querySelector('.walletsList')
let table = document.querySelector('.transactions table')
let userNameView = document.querySelector('.welcome .userName')
let userEmail = document.querySelector('.greeding .email')

let user = JSON.parse(localStorage.getItem('user'))

userNameView.innerHTML = `${user.name} ${user.surname}`
userEmail.innerHTML = `${user.email}`

getData("/cards?user_id=" + user.id)
    .then(res => reloadWallets(res.data, wList))

getData("/transactions?user_id=" + user.id)
    .then(res => reloadTransactions(res.data, table))