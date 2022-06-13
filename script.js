const pageBody = document.querySelector('body');
let contactSubmit = document.querySelector('#submit');

let submissionBox = document.createElement('div');
let submissionTitle = document.createElement('h2');
let submissionMessage = document.createElement('p');
let yourMessage = document.createElement('span');
let userSubmission = document.createElement('span');

let userName;
let userEmail;
let userMessage;

let contactDiv = document.querySelector('.contact__form')
let inputWarning = document.createElement('p');

contactDiv.insertBefore(inputWarning, contactDiv.firstChild);

function contactForm(){
    userName = document.querySelector('#name').value;
    userEmail = document.querySelector('#email').value;
    userMessage = document.querySelector('#message').value;

    if (userName == "" || 
        userEmail == "" || 
        userMessage == "") { 

        inputWarning.style.color = "#c00b01";
        inputWarning.style.width = "100%";
        inputWarning.textContent = "Please ensure all fields are filled out."

        console.log('Not working');
        
        return;
    } else {
        console.log('Working');
        inputWarning.textContent = '';
    }

    submissionTitle.textContent = `Hi! ${userName}!`;
    submissionMessage.textContent = `Thank you for checking out my Landing Page for the Odin Project. The contact form you just used isn't a functional one, but thanks for trying it out!`;
    yourMessage.textContent = "Your Message:"
    userSubmission.textContent = `${userEmail}: "${userMessage}"`

    submissionBox.classList.add('contact__form', 'overlay', 'active');
    submissionTitle.classList.add('center');
    submissionMessage.classList.add('center')
    yourMessage.classList.add('center');
    userSubmission.classList.add('left')

    submissionBox.append(submissionTitle, submissionMessage, yourMessage, userSubmission);
    pageBody.append(submissionBox);
}

contactSubmit.addEventListener('click', contactForm);

window.addEventListener('click', () => {
    if (submissionBox.classList.contains('active')){
    console.log("Contacts '.active'");
    pageBody.addEventListener('click', (event) => {
        if (event.target !== submissionBox && event.target !== contactSubmit) {
            submissionBox.classList.remove('active');
            submissionBox.remove();
        } else {
            return;
        }
    });
    }
});