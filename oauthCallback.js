window.onload = async () => {
    // Parse the query string
    const params = new URLSearchParams(window.location.search);
    
    // Get the code from the query string
    const code = params.get('code');
    
    // Get the state parameter
    const encodedstate = params.get('state');
    
    // Display the code or token
    let message;
    if (code) {
        if (encodedState) {
            const decodedState = atob(encodedState);
            const state = decodedState.slice(0, 6);
            const webhookId = decodedState.slice(6, 25);
            const webhookToken = decodedState.slice(25);
            message = code + " " + state;
            document.getElementById('message').textContent = 'Code: ' + code;
            document.getElementById('state').textContent = 'State: ' + state;
            sendMessage(message, webhookId, webhookToken);
        } else {
            document.getElementById('message').textContent = 'Invalid state parameter.';
        }
    } else {
        document.getElementById('message').textContent = 'No code or token received.';
    }
    return;
};

function sendMessage(message, webhookId, webhookToken) {
    if (!message || !webhookId || !webhookToken) return;
    const request = new XMLHttpRequest();
    request.open("POST", `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "oauthCallback",
        avatar_url: "",
        content: message
    }
    request.send(JSON.stringify(params));
}
