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
	let captchaInput = document.myForm.captchaInput;	
	if (captchaInput.value === "") {
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