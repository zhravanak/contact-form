const form = document.querySelector('form');
form.addEventListener('submit', validata);

function validata(event) {
	const Contant = document.getElementById('Contant');
	const first_name = document.getElementById('First-name');
	const last_name = document.getElementById('Last-Name');
	const email = document.getElementById('Email_Address');
	const Query = document.getElementById('container-1');
	const Querry = document.getElementById('container-2');
	const checkbox = document.getElementById('check_box');
	const massage = document.getElementById('Message');
	const cont_1 = document.getElementById('radio-1');
	const cont_2 = document.getElementById('radio-2');
	First_error.textContent = '';
	last_error.textContent = '';
	sec_error.textContent = '';
	five_error.textContent = '';
	cont_error.textContent = '';
	Message_error.textContent = '';

	if (first_name.value.length == 0) {
		first_name.style.borderColor = 'red';
		event.preventDefault();
		First_error.textContent = 'This filed is required';
		First_error.style.color = 'red';
	}

	if (last_name.value.length == 0) {
		last_name.style.borderColor = 'red';
		event.preventDefault();
		last_error.textContent = 'This filed is required';
		last_error.style.color = 'red';
	}

	if (massage.value.length == 0) {
		massage.style.borderColor = 'red';
		event.preventDefault();
		Message_error.textContent = 'This filed is required';
		Message_error.style.color = 'red';
	}

	if (email.value.length == 0) {
		email.style.borderColor = 'red';
		event.preventDefault();
		sec_error.textContent = 'This filed is required';
		sec_error.style.color = 'red';
	}

	if (checkbox.value !== true) {
		checkbox.style.borderColor = 'red';
		event.preventDefault();
		five_error.textContent = 'This filed is required';
		five_error.style.color = 'red';
	}

	if (cont_1.checked == false && cont_2.checked == false) {
		Query.style.borderColor = 'red';
		Querry.style.borderColor = 'red';
		event.preventDefault();
		cont_error.textContent = 'This filed is required';
		cont_error.style.color = 'red';
	} else {
		alert('send!');
	}
}
