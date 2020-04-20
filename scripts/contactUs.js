// Remove the spaces from the entered and generated code
function removeSpaces(string) {
	return string.split(' ').join('');
}
function ValidCaptcha() {
	var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
	var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
	if (str1 == str2) {
		return true;
	} else {
		return false;
	}
}
function validateForm() {
	var nameVal = document.myForm.name.value;
	var numbers = /^[0-9]+$/;
	if(nameVal.match(numbers)|| nameVal === ""){
	  alert(nameVal==="" ? "Please enter name" : "Please enter correct name")
	  document.myForm.name.focus();
	  return false;
	}

	var emailID = document.myForm.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	var emailID = document.myForm.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
		 
	if (atpos < 1 || ( dotpos - atpos < 2 )) {
	  alert("Please enter correct email ID")
	  document.myForm.email.focus() ;
	  return false;
	  }

	var subject = document.myForm.subject.value;
	var message = document.myForm.message.value;
	if(subject.length < 10) {
			alert( "Minimum Length of subject must be 10" );
			document.myForm.subject.focus() ;
			return false;
		 }
	if(message.length < 10) {
			alert( "Minimum Length of message must be 10" );
			document.myForm.message.focus() ;
			return false;
		 }

	  return true;
  }
  
  function checkform(theform) {
	var why = "";
	if (theform.CaptchaInput.value == "") {
		why += "- Please Enter CAPTCHA Code.\n";
	}
	if (theform.CaptchaInput.value != "") {
		if (ValidCaptcha(theform.CaptchaInput.value) == false) {
			why += "- The CAPTCHA Code Does Not Match.\n";
		}
	}
	if (why != "") {
		alert(why);
		return false;
	}
	else{
		return true;
	}
}
$(function(){
	var a = Math.ceil(Math.random() * 9) + '';
	var b = Math.ceil(Math.random() * 9) + '';
	var c = Math.ceil(Math.random() * 9) + '';
	var d = Math.ceil(Math.random() * 9) + '';
	var e = Math.ceil(Math.random() * 9) + '';

	var code = a + b + c + d + e;
	document.getElementById("txtCaptcha").value = code;
	document.getElementById("CaptchaDiv").innerHTML = code;

	// Init AOS
	AOS.init({
		duration: 2000,
	  });

})