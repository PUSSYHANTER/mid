var name = document.getElementById("form-name"); 

var email = document.getElementById("form-email");

var password = document.getElementById("form-password");

var passwordConfirm = document.getElementById("form-password-confirm");

var buttonSubmit = document.getElementById("form-button-submit");
buttonSubmit.addEventListener('click',  function(event) {
	event.preventDefault();



	
	
	console.log("This is email ", email.value, email);
	if (email.value.length < 1) {
		var errorMessageEmail = document.createElement('p');
		errorMessageEmail.textContent = "Email can not be empty"
		errorMessageEmail.style.color = "red"
		var parent = document.getElementById("form-email-error");
		parent.appendChild(errorMessageEmail);
	}
	console.log("This is password ", password.value, password);
	if (password.value.length<8) {
		var errorMessagePassword = document.createElement('p');
		errorMessagePassword.textContent = "Password should be at least 8 characters"
		errorMessagePassword.style.color = "red"
		var parent = document.getElementById("form-password-error");
		parent.appendChild(errorMessagePassword);
	}
	console.log("This is password match", password.value, passwordConfirm.value);
	if (password.value !== passwordConfirm.value) {
		var errorMessagePasswords = document.createElement('p');
		errorMessagePasswords.textContent = "Passwords should match"
		errorMessagePasswords.style.color = "red"
		var parent = document.getElementById("form-passwords-error");
		parent.appendChild(errorMessagePasswords);
	} else {
		var errorMessageComplete = document.createElement('p');
		errorMessageComplete.textContent = "Sign in completed"
		errorMessageComplete.style.color = "black"
		var parent = document.getElementById("form-complete-error");
		parent.appendChild(errorMessageComplete);
	}
};

    var a = document.getElementById("form-name").value;
    var b = document.getElementById("form-email").value; 
    var c = document.getElementById("form-password").value; 
    var d = document.getElementById("form-password-confirm").value; 
    localStorage.setItem("a",a);
    localStorage.setItem("b",b);
    localStorage.setItem("c",c);
    localStorage.setItem("d",d);
    window.location = "1.html";
