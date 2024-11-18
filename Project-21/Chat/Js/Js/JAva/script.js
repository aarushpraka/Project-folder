// Add functionality for sending messages
document.querySelector('.send-button').addEventListener('click', function() {
    const messageInput = document.querySelector('.message-input input');
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'self');
        messageContainer.innerHTML = `<p>${messageText}</p>`;

        document.querySelector('.messages').appendChild(messageContainer);
        messageInput.value = ""; // Clear the input field
    }
});