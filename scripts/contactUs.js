// Remove the spaces from the entered and generated code
function removeSpaces(string) {
	return string.split(' ').join('');
}
function ValidCaptcha(str2) {
	let str1 = removeSpaces(document.getElementById('CaptchaDiv').value);
	if (str1 == str2) {
		return true;
	} else {
		return false;
	}
}
function validateForm() {
	let name = document.myForm.name,
		emailId = document.myForm.email,
		subject = document.myForm.subject,
		message = document.myForm.message,
		atpos = emailId.value.indexOf("@"),
		dotpos = emailId.value.lastIndexOf("."),
		captchaInput = document.myForm.captchaInput,
		numbers = /^[0-9]+$/;

	if (name.value.match(numbers) || name.value === "") {
		alert(name.value === "" ? "Please enter name" : "Please enter correct name")
		name.focus();
		return false;
	}
	else if (atpos < 1 || (dotpos - atpos < 2)) {
		alert("Please enter correct email ID")
		emailId.focus();
		return false;
	}

	else if (subject.value.length < 10) {
		alert("Minimum Length of subject must be 10");
		subject.focus();
		return false;
	}
	else if (message.value.length < 10) {
		alert("Minimum Length of message must be 10");
		message.focus();
		return false;
	}
	else if (captchaInput.value === "") {
		alert("Please Enter CAPTCHA Code.");
		captchaInput.focus();
		return false;
	}
	else if (!(ValidCaptcha(captchaInput.value))) {
		alert("The CAPTCHA Code Does Not Match.");
		captchaInput.focus();
		return false;
	}

	return true;
}

$(function () {
	let code = "";
	for (let i = 0; i < 5; i++)
		code += Math.ceil(Math.random() * 9);
	document.getElementById("CaptchaDiv").value = code;

	// Init AOS
	AOS.init({
		duration: 2000,
	});

})