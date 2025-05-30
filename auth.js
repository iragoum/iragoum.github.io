// auth.js - Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const authError = document.getElementById('auth-error');
    
    // Simple demo credentials
    const validCredentials = [
        { username: 'admin', password: 'admin123' },
        { username: 'demo', password: 'demo123' },
        { username: 'user', password: 'user123' }
    ];
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            // Simple validation
            if (!username || !password) {
                authError.textContent = 'Please enter both username and password.';
                authError.style.display = 'block';
                return;
            }
            
            // Check credentials
            const isValid = validCredentials.some(cred => 
                cred.username === username && cred.password === password
            );
            
            if (isValid) {
                // Store login state
                localStorage.setItem('ecochef_logged_in', 'true');
                localStorage.setItem('ecochef_username', username);
                
                // Redirect to project files page
                window.location.href = 'project-files.html';
            } else {
                authError.textContent = 'Invalid username or password.';
                authError.style.display = 'block';
                
                // Clear password field
                passwordInput.value = '';
            }
        });
        
        // Enable login with Enter key
        passwordInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });
    }
    
    // Auto-focus username field
    if (usernameInput) {
        usernameInput.focus();
    }
    
    // Check if already logged in
    const isLoggedIn = localStorage.getItem('ecochef_logged_in');
    if (isLoggedIn === 'true') {
        window.location.href = 'project-files.html';
    }
});