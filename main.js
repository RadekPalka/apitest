function sendData() {
	axios
		.post('https://mentoring-api.vercel.app/api/v1/account', {
			username: 'halko',
			password: 'password',
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
document.querySelector('button').addEventListener('click', sendData);
