//populate email if already exists
if (sessionStorage.email) {
    document.getElementById('email-id').innerHTML = sessionStorage.email
} else if (localStorage.email) {
     document.getElementById('email-id').innerHTML = localStorage.email }
