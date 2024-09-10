document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else {
        // Add your login logic here (e.g., AJAX request, local validation, etc.)
        errorMessage.textContent = '';
        alert('Login successful!');
    }
});
