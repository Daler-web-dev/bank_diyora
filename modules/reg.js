import axios from "axios";
let form = document.forms.reg;

form.onsubmit = (e) => {
	e.preventDefault();
	
	let obj = {};

	let fm = new FormData(form);
	fm.forEach((v, k) => {
		obj[k] = v
	});

	const {email,name,surname,password} = obj

	if(email && name && surname && password) {
		axios.post('http://localhost:7777/users', obj)
			.then(res => {
				if(res.status === 200 || res.status === 201) {
					location.assign('/pages/login.html')
				}
			})
	} 
};