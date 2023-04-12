import { getData } from "/modules/http.request"
import headerCreater from "/modules/header.js"
import { reloadWallets } from "/modules/ui"
let wList = document.querySelector('.walletsList')
let user = JSON.parse(localStorage.getItem('user'))
let greeding = document.querySelector('.greeding')

greeding.querySelector('.userName').innerHTML = user.name + ' ' + user.surname
greeding.querySelector('.email').innerHTML = user.email

headerCreater()

getData("/cards?user_id=" + user.id)
    .then(res => reloadWallets(res.data, wList))