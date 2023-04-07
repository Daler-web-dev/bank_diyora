import axios from "axios";
let form = document.forms.login;

form.onsubmit = (e) => {
	e.preventDefault();
	
	let obj = {};

	let fm = new FormData(form);
	fm.forEach((v, k) => {
		obj[k] = v
	});

	const {email,password} = obj

	if(email && password) {
		axios.get('http://localhost:7777/users?email=' + email)
            .then(res => {
                
                if(res.data.length !== 0) {
                    let user = res.data[0]
                    if(res.status === 200 || res.status === 201) {
                        if(user.password === password) {
                            localStorage.setItem('user',JSON.stringify(user))
                            location.assign('/')
                        } else {
                            alert('Wrong password')
                        }
                    }
                } else {
                    alert('Нет такого пользователя')
                }
            })
	} 
};