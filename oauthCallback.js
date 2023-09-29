    window.onload = function() {
        // Parse the query string
        var params = new URLSearchParams(window.location.search);
        
        // Get the code from the query string
        var code = params.get('code');
        
        // Get the token from the URL fragment
        var token = new URL(window.location.href).hash.split('token=', 2)[1].split('&', 1)[0];
        
        // Display the code or token
        if (code) {
            document.getElementById('message').textContent = 'Code: ' + code;
        } else if (token) {
            document.getElementById('message').textContent = 'Token: ' + token;
        } else {
            document.getElementById('message').textContent = 'No code or token received.';
        }
    };
