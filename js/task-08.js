const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    
  
    if (email.value === "" || password.value === "") {
        return  alert("Please fill in all the fields!")
    } 
    const formData = {
        email: email.value,
        password: password.value,
    }
            console.log(formData);
    event.currentTarget.reset();
    }


// const form = document.querySelector('.login-form')

// form.addEventListener('submit', handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault()
//     const {
//         elements: { email, password },
//     } = event.currentTarget

//     if (email.value === '' || password.value === '') {
//         return alert('Please fill in all the fields!')
//     }
//     const userDetails = { email: email.value, Password: password.value }
    
//     console.log(userDetails)
//     event.currentTarget.reset()
// }