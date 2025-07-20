//	No me anda así que lo hago manual.

/*
function handleSubmit(event) {
	
	event.preventDefault();
	
	var formData = new FormData(event.target);
	
	for (var [key,value] of formData) {
		console.log(key, value);
	}
	
	for (var x of formData) {
		console.log(x);
	}
	
	console.log(Object.fromEntries(formData));
	
	var isFormDataEmpty = true;
	for (var p of formData) {
		isFormDataEmpty = false;
		break;
	}
	console.log(isFormDataEmpty);
	
}
*/


function handleSubmit(event) {
	
	"use strict";
	
	event.preventDefault();
	
	// Aparentemente, se pueden escribir los JSON así directamente.
	var formDictionary = {
		"Name": document.getElementById("Name").value,
		"Organization": document.getElementById("Organization").value,
		"Email": document.getElementById("Email").value,
		"Subject": document.getElementById("Subject").value,
		"Message": document.getElementById("Message").value
	};

	console.log(formDictionary);

	/* --------------------------- */
	/* Hacer algo con los datos... */ 
	/* --------------------------- */
	
	
	var contactForm = document.getElementById("ContactForm");
	contactForm.reset();
	/*
		No sé por qué tengo que hacer esto manualmente
		si le puse 'submit'. Realmente, no sé que hace
		'submit', podría haberlo hecho con 'type="button"'
		y cambiar el addEventListener
	*/
	
	alert("El formulario se ha enviado con éxito.")

	
}

var contactForm = document.getElementById("ContactForm");
contactForm.addEventListener("submit", handleSubmit );
