//Registration request
function Register() {
    const rForm = document.getElementById('registrationForm');
const rFormData = new rFormData(rForm);
fetch('', {
    method: 'POST',
    body: 'rFormData'
}).then(response => {
    if(!response.ok) {
        throw new Error(('Network response was not ok')); 
    }
    return response.json();
}).then(data => {
    console.log(data)
}).catch(error => {
    console.error('Error :', error)
})
}


//Login request
function Login() {
    const lForm = document.getElementById('loginForm');
const lFormData = new lFormData(lForm);
fetch('', {
    method: 'POST',
    body: 'lFormData'
}).then(response => {
    if(!response.ok) {
        throw new Error(('Network response was not ok')); 
    }
    return response.json();
}).then(data => {
    console.log(data)
}).catch(error => {
    console.error('Error :', error)
})
}
