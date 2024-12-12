const form = document.getElementById('myForm');
const formData = new formData(form);
fetch('', {
    method: 'POST',
    body: 'formData'
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
