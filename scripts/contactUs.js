// Remove the spaces from the entered and generated code

// VanillaJS functions written in ES6 using arrow functions

let removeSpaces = string => string.split(' ').join('');

let ValidCaptcha = str2 => {
	let str1 = removeSpaces(document.getElementById('CaptchaDiv').value);
	if (str1 == str2) return true;
	else return false;
}

let validateEmail = emailID => {
	let atpos = emailID.indexOf('@'),
		dotpos = emailID.lastIndexOf('.');

	if (atpos < 1 || dotpos - atpos < 2)
		return true;
	return false;
}

let displayError = (tagName, tag, lessLength = false) => {
	let errorBlock = $(`#error-${tagName}`);
	errorBlock.css("display", "block")
	let errorText = $(errorBlock[0].children[1]);
	errorText.empty();
	errorText.append(tag.value === "" ? `Please enter ${tagName}` :
		lessLength ? "Mininim length should be 10 characters" : `Please enter correct ${tagName}`)
	$(`#${tagName}`).addClass("form-group-error")
	tag.focus();
}

let validateForm = (inputBox = undefined) => {
	let captchaInput = document.myForm.captchaInput,
		name = document.myForm.name,
		emailId = document.myForm.email,
		subject = document.myForm.subject,
		message = document.myForm.message,
		letters = /^[0-9]+$/;
	$('.error-message').css("display", "none");
	$('.no-border').removeClass("form-group-error")
	if ((name.value.match(letters) || name.value === "") && (inputBox === "name" || inputBox === "submit")) {
		displayError("name", name)
		return false;
	}
	else if ((emailId.value === "" || validateEmail(emailId.value)) && (inputBox === "email" || inputBox === "submit")) {
		displayError("email", emailId)
		return false;
	}
	else if ((subject.value === "" || subject.value.length < 10) && (inputBox === "subject" || inputBox === "submit")) {
		displayError("subject", subject, subject.value.length < 10);
		return false;
	}
	else if ((message.value === "" || message.value.length < 10) && (inputBox === "message" || inputBox === "submit")) {
		displayError("message", message, message.value.length < 10)
		return false;
	}
	else if ((captchaInput.value === "" || !(ValidCaptcha(captchaInput.value))) && (inputBox === "captcha" || inputBox === "submit")) {
		displayError("captcha", captchaInput)
		return false;
	}

	return true;
}

$(() => {
	let code = "";
	for (let i = 0; i < 5; i++)
		code += Math.ceil(Math.random() * 9);
	document.getElementById("CaptchaDiv").value = code;

	// Init AOS
	AOS.init({
		duration: 2000,
	});
})