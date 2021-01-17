
//define needed vars
var afterEmailObjs = document.getElementsByClassName("after-email-signup")
var beforeEmailObjs = document.getElementsByClassName("before-email-signup")

//hide not yet used elements
for (let obj of afterEmailObjs) {
    obj.style.display = "none";
}

//populate email if already exists
if (sessionStorage.email) {
    hideSignup();
}

//pop message if they have already signed p with an email.
if (localStorage.email && !sessionStorage.email) {
    document.getElementById("email-input-label").innerHTML = "Entering " + localStorage.email + "? ;)"
}

//override and handel form submit
var emailForm = document.getElementById('email-form'),
    handler = function (ev) {
        ev = ev || window.event;
        if (ev.preventDefault) { //w3c browsers
            ev.preventDefault();
        }
        else { //IE old
            ev.returnValue = false;
        }
        //update local and session storage for email
        sessionStorage.email = document.getElementsByClassName('email-input')[0].value;
        localStorage.email = document.getElementsByClassName('email-input')[0].value;

        //perform ajax call to store in db
        //TODO

        //hide appropriate elements and populate thankyou text
        hideSignup();
    };
if (emailForm) {
    if (emailForm.addEventListener) {
        emailForm.addEventListener('submit', handler, false)
    }
    else if (emailForm.attachEvent) {
        emailForm.attachEvent('onsubmit', handler);
    }
}

// proccess email capture
function hideSignup() {
    for (let obj of afterEmailObjs) {
        obj.style.display = "block";
    }
    for (let obj of beforeEmailObjs) {
        obj.style.display = "none";
    }
    document.getElementsByClassName('thank-you')[0].textContent += " " + sessionStorage.email

    //todo ajax call to save records
}