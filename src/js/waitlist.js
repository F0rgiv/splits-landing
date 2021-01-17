//populate email if already exists
if (sessionStorage.email) {
    document.getElementsByName('email')[0].value = sessionStorage.email
} else if (localStorage.email) {
    document.getElementsByName('email')[0].value = localStorage.email
}

// ensure unwanted elements are hidden
var toHide = document.getElementsByClassName("hiden")
for (let obj of toHide) {
    obj.style.display = "none";
}

//replace form with thank you message if subbmitted.
document.getElementById("waitlist-form").addEventListener("submit", updateList);

function updateList() {
    // prevent page raload
    event.preventDefault(); //TODO depricated?

    //get form data
    var name = document.getElementsByName('name')[0].value
    var email = document.getElementsByName('email')[0].value
    var tel = document.getElementsByName('tel')[0].value

    //save email to session and local storage.
    localStorage.email = email
    sessionStorage.email = email

    //ensure that name is capitalized.
    name = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    //hide form.
    document.getElementById('form-wrapper').style.display = "none";

    //prep to show data.
    document.getElementById('thank-you').innerHTML = "Thank you " + name + "!"
    document.getElementById('thank-you-msg').innerHTML = "We will be providing updates to you at " +
        email + " and may reach out at " + tel +
        " to get your recommendations and feedback on the product."

    //show thank you msg.
    for (let obj of toHide) {
        obj.style.display = "block";
    }
}