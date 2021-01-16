
//define needed vars
var after_email_objs = document.getElementsByClassName("after-email-signup")
var before_email_objs = document.getElementsByClassName("before-email-signup")

//hide not yet used elements
for (let obj of after_email_objs) {
    obj.style.display = "none";
}

//populate email if already exists
if (localStorage.email) {
    hideSignup();
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
        //update local storage for email
        localStorage.email = document.getElementsByClassName('email-input')[0].value;
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
    document.getElementsByClassName('thank-you')[0].textContent += " " + localStorage.email

    //todo ajax call to save records
}