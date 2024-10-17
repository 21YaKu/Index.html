document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Dummy validation logic (replace this with your own validation)
    if (username === "user" && password === "pass") {
        alert('Login successful!');
    } else {
        document.getElementById('errorMsg').textContent = 'Invalid username or password!';
    }
});
