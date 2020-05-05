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
function validateEmail(emailID) {
	let atpos = emailID.indexOf('@'),
		dotpos = emailID.lastIndexOf('.');

	if (atpos < 1 || dotpos - atpos < 2) {
		return true;
	}
	return false;
}
function displayError(tagName, tag, lessLength = false) {
	let errorBlock = $(`#error-${tagName}`);
	errorBlock.css("display", "block")
	let errorText = $(errorBlock[0].children[1]);
	errorText.empty();
	errorText.append(tag.value === "" ? `Please enter ${tagName}` :
		lessLength ? "Mininim length should be 10 characters" : `Please enter correct ${tagName}`)
	tag.focus();
}
function validateForm() {
	let captchaInput = document.myForm.captchaInput,
		name = document.myForm.name,
		emailId = document.myForm.email,
		subject = document.myForm.subject,
		message = document.myForm.message,
		letters = /^[0-9]+$/;
	$('.error-message').css("display", "none");
	if (name.value.match(letters) || name.value === "") {
		displayError("name", name)
		return false;
	}
	else if (emailId.value === "" || validateEmail(emailId.value)) {
		displayError("email", emailId)
		return false;
	}
	else if (subject.value === "" || subject.value.length < 10) {
		displayError("subject", subject, subject.value.length < 10);
		return false;
	}
	else if (message.value === "" || message.value.length < 10) {
		displayError("message", message, message.value.length < 10)
		return false;
	}
	else if (captchaInput.value === "" || !(ValidCaptcha(captchaInput.value))) {
		displayError("captcha", captchaInput)
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