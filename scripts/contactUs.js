"use strict";

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
	return string.split(' ').join('');
}
function ValidCaptcha(str2) {
	let str1 = removeSpaces(document.getElementById('CaptchaDiv').value);
	return str1 == str2;
}

function validateEmail(emailID) {
	let atpos = emailID.indexOf('@'),
		dotpos = emailID.lastIndexOf('.');
    return (atpos < 1 || dotpos - atpos < 2);
}

function displayError(tagName, tag, lessLength = false) {
	let errorBlock = $(`#error-${tagName}`);
	errorBlock.css('display', 'block');
	let errorText = $(errorBlock[0].children[1]);
	errorText.empty();
	errorText.append(
		tag.value === ''
			? `Please enter ${tagName}`
			: lessLength
			? 'Mininim length should be 10 characters'
			: `Please enter correct ${tagName}`
	);
	$(`#${tagName}`).addClass('form-group-error');
	tag.focus();
}
function validateForm(inputBox = undefined) {
	let captchaInput = document.myForm.captchaInput,
		name = document.myForm.name,
		emailId = document.myForm.email_id,
		subject = document.myForm.subject,
		message = document.myForm.message,
		letters = /^[0-9]+$/;
		
	$('.error-message').css('display', 'none');
	$('.no-border').removeClass('form-group-error');
	if ((name.value.match(letters) || name.value === '' || name.value === null ) && (inputBox === 'name' || inputBox === 'submit')) {
		displayError('name', name);
		return false;
	} else if (
		(emailId.value === '' || emailId.value === null|| validateEmail(emailId.value)) &&
		(inputBox === 'email' || inputBox === 'submit')
	) {
		displayError('email', emailId);
		return false;
	} else if (
		(subject.value === '' || subject.value === null || subject.value.length < 10) &&
		(inputBox === 'subject' || inputBox === 'submit')
	) {
		displayError('subject', subject, subject.value.length < 10);
		return false;
	} else if (
		(message.value === '' || message.value === null|| message.value.length < 10) &&
		(inputBox === 'message' || inputBox === 'submit')
	) {
		displayError('message', message, message.value.length < 10);
		return false;
	} else if (
		(captchaInput.value === '' || captchaInput.value === null ||!ValidCaptcha(captchaInput.value)) &&
		(inputBox === 'captcha' || inputBox === 'submit')
	) {
		displayError('captcha', captchaInput);
		return false;
	}

	return true;
}

$(function () {
	let code = '';
	for (let i = 0; i < 5; i++) code += Math.floor(Math.random() * 10);
	document.getElementById('CaptchaDiv').value = code;

	// Init AOS
	AOS.init({
		duration: 2000
	});
});
