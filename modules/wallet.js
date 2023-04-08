import { getSymbols, postData } from "/modules/http.request";
let form = document.forms.addCard;
let select = document.querySelector('datalist')
let user = JSON.parse(localStorage.getItem('user'))


getSymbols()
    .then(res => {
        for(let key in res) {
            let opt = new Option(key, key)
            select.append(opt)
        }
    })


form.onsubmit = (e) => {
    e.preventDefault();

    let obj = { id: Math.random(), user_id: user.id};
    let fm = new FormData(form);
    fm.forEach((v, k) => {
        obj[k] = v
    });
    const { name, currency, total } = obj
    if (name && currency && total) {
        postData('/cards', obj)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    location.assign("/pages/wallets")
                    form.reset()
                }
            })
    } else {
        alert("Заполните все поля!")
    }
};