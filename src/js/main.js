
//define needed vars
var after_email_objs = document.getElementsByClassName("after-email-signup")
var before_email_objs = document.getElementsByClassName("before-email-signup")

//hide not yet used elements
for (let obj of after_email_objs) {
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
var email_form = document.getElementById('email-form'),
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
if (email_form) {
    if (email_form.addEventListener) {
        email_form.addEventListener('submit', handler, false)
    }
    else if (email_form.attachEvent) {
        email_form.attachEvent('onsubmit', handler);
    }
}

// proccess email capture
function hideSignup() {
    for (let obj of after_email_objs) {
        obj.style.display = "block";
    }
    for (let obj of before_email_objs) {
        obj.style.display = "none";
    }
    document.getElementsByClassName('thank-you')[0].textContent += " " + sessionStorage.email

    //todo ajax call to save records
}