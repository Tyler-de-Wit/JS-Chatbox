// @ts-nocheck

// const johnSelectorBtn = document.querySelector('#john-selector')
// const janeSelectorBtn = document.querySelector('#jane-selector')
// const chatHeader = document.querySelector('.chat-header')
// const chatMessages = document.querySelector('.chat-messages')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')
// const clearChatBtn = document.querySelector('.clear-chat-button')

// const messages = JSON.parse(localStorage.getItem('messages')) || []

// const createChatMessageElement = (message) => `
//   <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
//     <div class="message-sender">${message.sender}</div>
//     <div class="message-text">${message.text}</div>
//     <div class="message-timestamp">${message.timestamp}</div>
//   </div>
// `

// window.onload = () => {
//   messages.forEach((message) => {
//     chatMessages.innerHTML += createChatMessageElement(message)
//   })
// }

// let messageSender = 'John'

// const updateMessageSender = (name) => {
//   messageSender = name
//   chatHeader.innerText = `${messageSender} chatting...`
//   chatInput.placeholder = `Type here, ${messageSender}...`

//   if (name === 'John') {
//     johnSelectorBtn.classList.add('active-person')
//     janeSelectorBtn.classList.remove('active-person')
//   }
//   if (name === 'Jane') {
//     janeSelectorBtn.classList.add('active-person')
//     johnSelectorBtn.classList.remove('active-person')
//   }

//   /* auto-focus the input field */
//   chatInput.focus()
// }

// johnSelectorBtn.onclick = () => updateMessageSender('John')
// janeSelectorBtn.onclick = () => updateMessageSender('Jane')

// const sendMessage = (e) => {
//   e.preventDefault()

//   const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   const message = {
//     sender: messageSender,
//     text: chatInput.value,
//     timestamp,
//   }

//   /* Save message to local storage */
//   messages.push(message)
//   localStorage.setItem('messages', JSON.stringify(messages))

//   /* Add message to DOM */
//   chatMessages.innerHTML += createChatMessageElement(message)

//   /* Clear input field */
//   chatInputForm.reset()

//   /*  Scroll to bottom of chat messages */
//   chatMessages.scrollTop = chatMessages.scrollHeight
// }

// chatInputForm.addEventListener('submit', sendMessage)

// clearChatBtn.addEventListener('click', () => {
//   localStorage.clear()
//   chatMessages.innerHTML = ''
// })




// Create array for user inputs
const userInputs = [];


// Handle the message that the user typed in
function receiveMessage() {
    'use strict';
    event.preventDefault();

    // Get user input from the form
    let userInput = document.querySelector('.chatbox-input').value;

    // Push user input to the userInputs array
    userInputs.push(userInput);

    outputMessage(userInput, 'You');
}

// Output the users message to the chatbox
function outputMessage(messageText, messageSender) {
    'use strict';

    // Set the message to be output
    let messageOutput = `
        <div class="message">
            <div class="message-sender">${messageSender}</div>
            <div class="message-text">${messageText}</div>
            <div class="message-timestamp">10:30 AM</div>
        </div>
    `

    // Output the message into the html
    document.querySelector('.chatbox-messages').innerHTML += messageOutput;
}

// Clear the chat inside the box 
function clearChat() {
    'use strict';

    // Remove all entries from userInputs array
    while (userInputs.length > 0) {
        userInputs.pop();
    }

    // Remove all messages from html chatbox
    document.querySelector('.chatbox-messages').innerHTML = '';
}




// Event listeners 
function init() {
    'use strict';
    
    // Runs receiveMessage function when form is submitted
    document.getElementById('chatbox-form').addEventListener('submit', receiveMessage);

    // Runs clearChat function when button is clicked
    document.querySelector('.clear-chat-button').addEventListener('click', clearChat);
}


// Runs init function
window.onload = init;
