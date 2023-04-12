import { getData, postData, patchData } from "/modules/http.request";
let form = document.forms.trans;
let select = document.querySelector('datalist')
let user = JSON.parse(localStorage.getItem('user'))

getData('/cards?user_id=' + user.id)
    .then(res => {
        for (let item of res.data) {
            let opt = new Option(item.name, item.name)
            select.append(opt)
        }
    })

let endtime = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`
function remainingDate(date) {
    let t = Date.parse(date) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24)
    days = days.toString().replace("-", "")
    return days
}

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = { user_id: user.id, date: remainingDate(endtime) };
    let fm = new FormData(form);
    fm.forEach((v, k) => obj[k] = v)
    const { category, currency, total } = obj
    if (currency && category && total) {
        // postData('/transactions', obj)
        //     .then(res => {
        //         if (res.status === 200 || res.status === 201) {
        //             location.assign("/pages/transactions.html")
        //             form.reset()
        //         }
        //     })

    } else {
        alert("Заполните все поля!")
    }
};

getData("/cards?user_id=" + user.id,)
    .then(res => {
        patchData(res.data).then(res => console.log(res))
    })