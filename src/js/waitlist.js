//populate email if already exists
if (sessionStorage.email) {
    document.getElementsByName('email')[0].value = sessionStorage.email
} else if (localStorage.email) {
    document.getElementsByName('email')[0].value = localStorage.email }
