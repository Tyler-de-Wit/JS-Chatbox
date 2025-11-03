// Create object for chat messages
const chatMessagesObject = {
    sender: [],
    message: [],
    time: []
}


// Handle the message that the user typed in
function receiveMessage(event) {
    'use strict';
    event.preventDefault();

    // Get user input from the form
    let userInput = document.querySelector('.chatbox-input').value;

    // Run functions to output the user message and then generate a response
    outputMessage('You', userInput, getTime());
    createAutomatedResponse();
}

// Create the automated response to the user
function createAutomatedResponse() {
    'use strict';

    // Get user input from last element of chatMessagesObject message array
    let userInput = chatMessagesObject.message.at(-1);
    userInput = userInput.toLowerCase();

    // Test userInput for keywords so a response can be made and output
    if (userInput.includes('microsoft') || userInput.includes('authenticator')) { // Microsoft Setup
        let automatedMessage = 'You should visit our <a href="microsoft-setup.html">Microsoft Setup</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('blackboard')) { // Access Blackboard
        let automatedMessage = 'You should visit our <a href="access-blackboard.html">Access Blackboard</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('contact') || userInput.includes('help')) { // Contact Us
        let automatedMessage = 'You should visit our <a href="contact.html">Contact</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('email')) { // Email Tips
        let automatedMessage = 'You should visit our <a href="email-tips.html">Email Tips</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('printers')) { // Library Printers
        let automatedMessage = 'You should visit our <a href="library-printers.html">Library Printers</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('study')) { // Library Study Rooms
        let automatedMessage = 'You should visit our <a href="library-study-rooms.html">Library Study Rooms</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('timetable')) { // Locating Timetable
        let automatedMessage = 'You should visit our <a href="locating-timetable.html">Locating Timetable</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('wifi') || userInput.includes('wi-fi')) { // Login To Wifi
        let automatedMessage = 'You should visit our <a href="login-to-wifi.html">Login To WIFI</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('resources')) { // Online Resources
        let automatedMessage = 'You should visit our <a href="online-resources.html">Online Resources</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('password')) { // Password Help
        let automatedMessage = 'You should visit our <a href="password-help.html">Password Help</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('reference') || userInput.includes('referencing')) { // Referencing
        let automatedMessage = 'You should visit our <a href="referencing.html">Referencing</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('sitemap') || userInput.includes('page')) { // Sitemap
        let automatedMessage = 'You should visit our <a href="sitemap.html">Sitemap</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('card')) { // Student Card
        let automatedMessage = 'You should visit our <a href="student-card.html">Student Card</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('discount') || userInput.includes('smartrider') || userInput.includes('smart rider') || userInput.includes('transperth')) { // Student Discount
        let automatedMessage = 'You should visit our <a href="student-discount.html">Student Discount</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('portal')) { // Student Portal
        let automatedMessage = 'You should visit our <a href="student-portal.html">Student Portal</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else if(userInput.includes('contacts') || userInput.includes('tafe')) { // TAFE Contacts
        let automatedMessage = 'You should visit our <a href="tafe-contacts.html">TAFE Contacts</a> page to learn more';
        outputMessage('Library', automatedMessage, getTime());
    }
    else {
        let automatedMessage = "Sorry, We can't find a page that suits your needs"
        outputMessage('Library', automatedMessage, getTime());
    }
}

// Output messages to the chatbox
function outputMessage(messageSender, messageText, messageTime) {
    'use strict';

    // Set the message to be output
    let messageOutput = `
        <div class="message">
            <div class="message-sender">${messageSender}</div>
            <div class="message-text">${messageText}</div>
            <div class="message-timestamp">${messageTime}</div>
        </div>
    `

    // Push message information to object
    chatMessagesObject.sender.push(messageSender);
    chatMessagesObject.message.push(messageText);
    chatMessagesObject.time.push(messageTime);

    // Output the message inside of html tags into the chatbox
    document.querySelector('.chatbox-messages').innerHTML += messageOutput;

    // Scroll to bottom of the chats so user can see the most recent ones
    document.querySelector('.chatbox-messages').scrollTop = document.querySelector('.chatbox-messages').scrollHeight;

    // Empty input field
    document.querySelector('.chatbox-input').value = '';
}

// Clear the chat inside the box 
function clearChat() {
    'use strict';

    // Remove all entries from chatMessagesObject arrays
    while (chatMessagesObject.sender.length > 0) {
        chatMessagesObject.sender.pop();
    }
    while (chatMessagesObject.message.length > 0) {
        chatMessagesObject.message.pop();
    }
    while (chatMessagesObject.time.length > 0) {
        chatMessagesObject.time.pop();
    }

    // Remove all messages from html chatbox
    document.querySelector('.chatbox-messages').innerHTML = '';

    // Empty input field
    document.querySelector('.chatbox-input').value = '';
}

// Get the current time in hours and minutes
function getTime() {
    'use strict';

    // Get date and seperate it into hours and minutes
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // Make time variables with formatting
    let time = hours + ':' + minutes;

    return time;
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
window.onload = init();
