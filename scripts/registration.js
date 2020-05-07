
function registrationValidateForm() {
    let fname = document.registrationForm.fname,
        lname = document.registrationForm.lname,
		emailId = document.registrationForm.email,
        subject = document.registrationForm.subject,
        phoneNo = document.registrationForm.phone,
		atpos = emailId.value.indexOf("@"),
		dotpos = emailId.value.lastIndexOf("."),
        numbers = /^[0-9]+$/;
        letters = /^[A-Za-z]+$/;

	if (!fname.value.match(letters) || fname.value === "" ) {
        alert(fname.value === "" ? "Please enter First Name" : "Please enter correct First Name")
        fname.focus();
		return false;
    }

    else if ( !lname.value.match(letters) || lname.value === "") {
        alert(lname.value === "" ? "Please enter Last Name" : "Please enter correct Last Name")
		lname.focus();
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
    
    else if (!phoneNo.value.match(numbers) || phoneNo.value.length < 10) {
        alert(phoneNo.value.length < 10 ? "The length of phone number must be 10" : "Please enter correct Phone Number")
		phoneNo.focus();
		return false;
    }
	
	return true;
}
