import axios from "axios";
let form = document.forms.addCard;
let userId = JSON.parse(localStorage.getItem('user')).id

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = { id: userId };
    let fm = new FormData(form);
    fm.forEach((v, k) => {
        obj[k] = v
    });
    const { name, select } = obj
    if (name && select) {
        axios.post('http://localhost:7777/cards', obj)
        form.reset()
        location.assign("/pages/wallets")
    } else {
        alert("Заполните все поля!")
    }
};