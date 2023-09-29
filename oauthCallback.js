    window.onload = () => {
        // Parse the query string
        const params = new URLSearchParams(window.location.search);
        
        // Get the code from the query string
        const code = params.get('code');
        
        // Get the token from the URL fragment
        //const token = new URL(window.location.href).hash.split('token=', 2)[1].split('&', 1)[0];

        // Get the state parameter
        const state = params.get('state');
        
        // Display the code or token
        if (code) {
            if (state) {
            document.getElementById('message').textContent = 'Code: ' + code + '\nState: ' + state;
            } else {
            document.getElementById('message').textContent = 'Invalid state parameter.';
            }
        } else {
            document.getElementById('message').textContent = 'No code or token received.';
        }
    };
