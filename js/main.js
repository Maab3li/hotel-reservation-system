//Registration request
    const rForm = document.getElementById('registrationForm');
    rForm.addEventListener('submit', (event) => {
        event.preventDefault()
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
    })
        


//Login request
    const lForm = document.getElementById('loginForm');
    lForm.addEventListener('submit', (event) => {
        event.preventDefault()
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
    })

//fetch available rooms
fetch('')
.then(response => response.json())
.then(data => {

    data.forEach(room => {
        const imageUrl = room[image]
        const feats = []
        features.forEach(feature => {
            feats.push(feature['room_location'])
        })
        const facils =[]
        facilities.forEach(facility => {
            if(facility === 'available') {
                facils.push(facility)
            }
        })
        const guest_num = room.guest_number
        document.getElementById('room-card-img').src = imageUrl
        document.getElementById('features').innerHTML = feats
        document.getElementById('facilities').innerHTML = facils
        document.getElementById('guests').innerHTML = guest_num
    })

})
.catch(error => {
        console.error('Error fetching hotel rooms', error)
    });
    

//rating  
const ratingForm = document.getElementById('rating-form')
ratingForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const ratingFormData = new ratingFormData(ratingForm)
    fetch('', {
        method:'POST',
        body:'ratingFormData'
    }).then(response => {
        if(!response.ok) {
            throw new Error(('Network response was not ok'));
        }
        return response.json()
    }).then(data => {
        console.log(data)
    }).catch(error => {
        console.error('Error:', error)
    })
})

//booking request
const bookingForm = document.getElementById('booking-form')
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const bookingformData = new bookingformData(bookingForm)
    fetch('', {
        method:'POST',
        body:'bookingformData'
    }).then(response => {
        if(!response.ok) {
            throw new Error(('Network response was not ok'));
        }
        return response.json()
    }).then(data => {
        console.log(data)
    }).catch(error => {
        console.error('Error:', error)
    })
})

//handling registration error messages
function validatePasswords() {
    const password = document.getElementById('password')
    const repPassword = document.getElementById('repeat-password')
    const errorMessage = document.getElementById('passwordMismatchError')

    if(password.innerHTML !== '' && repPassword.innerHTML !== '') {
        if (password !== repPassword) {
                errorMessage.textContent = 'The two passwords did not match.'
                errorMessage.style.display = 'block';
                return false;
        }
        else {
            errorMessage.style.display = 'none';
            return true;
        }
    }   
}





