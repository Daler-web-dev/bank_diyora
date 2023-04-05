let btnAdd = document.querySelector('.pay_add')
let table = document.querySelector('table')
let tBody = document.querySelector('tbody') 

let tId = document.createElement('td')
let wallet = document.createElement('td')
let cat = document.createElement('td')
let amount = document.createElement('td')
let date = document.createElement('td')

tId.innerHTML = "1232321"
wallet.innerHTML = "VISA"
cat.innerHTML = "Автомобиль"
amount.innerHTML = "414,000,000"
date.innerHTML = "4 дня назад"

tBody.append(tId, wallet, cat, amount, date)