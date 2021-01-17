//populate email if already exists
if (sessionStorage.email) {
    document.getElementById('email-id').value = sessionStorage.email
} else if (localStorage.email) {
     document.getElementById('email-id').value = localStorage.email }
