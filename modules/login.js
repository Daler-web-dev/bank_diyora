import axios from "axios";
import { getData } from "/modules/http.request";
let form = document.forms.login;

form.onsubmit = (e) => {
    e.preventDefault();

    let obj = {};

    let fm = new FormData(form);
    fm.forEach((v, k) => {
        obj[k] = v
    });

    const { email, password } = obj

    if (email && password) {
        getData("/users?email=" + email)
            .then(res => {
                if (res.data.length !== 0) {
                    let user = res.data[0]
                    if (res.status === 200 || res.status === 201) {
                        if (user.password === password) {
                            localStorage.setItem('user', JSON.stringify(user))
                            location.assign('/')
                            form.reset()
                        } else {
                            alert('Wrong password')
                        }
                    }
                } else {
                    alert('Нет такого пользователя')
                }
            })  
    } else {
        alert("Заполните все поля!")
    }
};