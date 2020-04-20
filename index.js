let rememberDiv = document.querySelector('.remember');
let forgetDiv = document.querySelector('.forget');
let nameInput = document.querySelector('#entername');
let submitBtn = document.querySelector('#submitname');
let forgetBtn = document.querySelector('#forgetname');
let form = document.querySelector('form');

let h1 = document.querySelector('h1');
let personalGreeting = document.querySelector('.personal-greeting');


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

submitBtn.addEventListener('click', () => {
    if (nameInput.value) {
        localStorage.setItem('name', nameInput.value)
    }
    else { alert('Enter a name') }

    nameDisplayCheck()
})

forgetBtn.addEventListener('click', () => {
    localStorage.removeItem('name')
    nameDisplayCheck()
})

function nameDisplayCheck() {

    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');

        h1.textContent = "Welcome, " + name;
        personalGreeting.textContent = "Welcome to our website " + name + "! we hope you have fun while you have here."

        forgetDiv.style.display = "block",
            rememberDiv.style.display = "none"
    }
    else {
        h1.textContent = 'welcome to our website';
        personalGreeting.textContent = 'welcome to our website! hope you have fun when you are here.'

        forgetDiv.style.display = "none";
        rememberDiv.style.display = 'block';
    }
}

document.body.onload = nameDisplayCheck;
