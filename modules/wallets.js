import { getData } from "/modules/http.request"
import headerCreater from "/modules/header.js"
import { reloadWallets } from "/modules/ui"
headerCreater()
let wList = document.querySelector('.walletsList')
let user = JSON.parse(localStorage.getItem('user'))

getData("/cards?user_id=" + user.id)
    .then(res => reloadWallets(res.data, wList))