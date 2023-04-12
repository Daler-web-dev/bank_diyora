import axios from "axios"
import { getData } from "/modules/http.request"
import headerCreater from "/modules/header.js"
import { reloadWallets, reloadTableHead, reloadTransactions } from "/modules/ui"

headerCreater()

let wList = document.querySelector('.walletsList')
let table = document.querySelector('.transactions table')
let user = JSON.parse(localStorage.getItem('user'))
let userNameView = document.querySelector('.welcome .userName')
let userEmail = document.querySelector('.greeding .email')

userNameView.innerHTML = `${user.name} ${user.surname}`
userEmail.innerHTML = `${user.email}`


getData("/cards?user_id=" + user.id)
    .then(res => reloadWallets(res.data, wList))

let data = []
reloadTransactions(data, table)