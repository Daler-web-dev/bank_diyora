let body = document.body

let header = document.createElement('header')
let header_flex = document.createElement('div')
let flex_left = document.createElement('div')
let flex_right = document.createElement('div')
let left_a_1 = document.createElement('a')
let left_a_2 = document.createElement('a')
let left_a_3 = document.createElement('a')
let right_a_1 = document.createElement('a')
let right_img = document.createElement('img')

left_a_1.innerHTML = "Главная"
left_a_2.innerHTML = "Мои кошельки"
left_a_3.innerHTML = "Мои транзакции"
right_a_1.innerHTML = "alexadams@google.com"

right_img.src = `./img/logo_exit.svg`

left_a_1.href //СЮДА ОКНА КУДА ПЕРЕМЕЩАТСЯ
left_a_2.href //СЮДА ОКНА КУДА ПЕРЕМЕЩАТСЯ
left_a_3.href //СЮДА ОКНА КУДА ПЕРЕМЕЩАТСЯ

header_flex.classList.add('header_flex')
flex_left.classList.add('flex_left')
flex_right.classList.add('flex_right')
right_img.classList.add('right_img')


flex_left.append(left_a_1, left_a_2, left_a_3)
flex_right.append(right_a_1, right_img)
header_flex.append(flex_left, flex_right)
header.append(header_flex)
body.append(header)