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

    outputMessage('You', userInput, getTime());
    createAutomatedResponse();
}

// Create the automated response to the user
function createAutomatedResponse() {
    'use strict';

    // Get user input from last element of chatMessagesObject message array
    let userInput = chatMessagesObject.message.at(-1);

    // Test userInput for keywords so a response can be made
    if (userInput.toLowerCase().includes('microsoft')) {
        let automatedMessage = 'You should visit our <a href="microsoft-setup.html">Microsoft Setup</a> page';
        outputMessage('Library', automatedMessage, getTime());
    } else {
        let automatedMessage = "Sorry, We don't have a page about that"
        outputMessage('Library', automatedMessage, getTime());
    }

    console.log(chatMessagesObject);
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

    // Output the message into the html
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
