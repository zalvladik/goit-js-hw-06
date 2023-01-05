const form = document.querySelector('.login-form')

form.addEventListener('submit', nonreset)

const result = {
    Email:'',
    Password:'',
}

function nonreset(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    formData.forEach((value,name) => {
        if(name === 'email'){
            result.Email = `${value}`
        } else if(name === 'password') {
            result.Password = `${value}`
        }
    })

    if(result.Email === '' || result.Password === ''){
        alert('Всі поля повинні бути заповнені');
        return console.log('Error')
    } else {
        console.log(result)
        form.reset()
    }
}

