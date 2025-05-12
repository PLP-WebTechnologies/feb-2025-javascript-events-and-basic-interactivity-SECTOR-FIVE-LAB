// Event Handling Section
document.addEventListener('DOMContentLoaded', () => {
    // Button Click Demo
    const colorChangeBtn = document.getElementById('colorChangeBtn');
    let isOriginalColor = true;

    colorChangeBtn.addEventListener('click', () => {
        if (isOriginalColor) {
            colorChangeBtn.style.backgroundColor = '#e74c3c';
            colorChangeBtn.textContent = 'Clicked!';
        } else {
            colorChangeBtn.style.backgroundColor = '#3498db';
            colorChangeBtn.textContent = 'Click Me!';
        }
        isOriginalColor = !isOriginalColor;
    });

    // Keypress Detection
    const keypressDisplay = document.getElementById('keypressDisplay');
    document.addEventListener('keydown', (e) => {
        keypressDisplay.textContent = `You pressed: ${e.key}`;
        keypressDisplay.classList.add('fade-in');
        setTimeout(() => keypressDisplay.classList.remove('fade-in'), 300);
    });

    // Secret Action (Double Click)
    const secretBox = document.getElementById('secretBox');
    secretBox.addEventListener('dblclick', () => {
        secretBox.style.backgroundColor = '#2ecc71';
        secretBox.style.color = 'white';
        secretBox.textContent = '🎉 Surprise! You found the secret!';
        setTimeout(() => {
            secretBox.style.backgroundColor = '';
            secretBox.style.color = '';
            secretBox.textContent = 'Double click me for a surprise!';
        }, 2000);
    });

    // Image Gallery
    const galleryContainer = document.querySelector('.gallery-container');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');
    let currentImageIndex = 1;

    function updateGalleryImage() {
        const img = galleryContainer.querySelector('img');
        img.src = `https://picsum.photos/400/300?random=${currentImageIndex}`;
        img.classList.add('fade-in');
        setTimeout(() => img.classList.remove('fade-in'), 300);
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex > 1 ? currentImageIndex - 1 : 10;
        updateGalleryImage();
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex < 10 ? currentImageIndex + 1 : 1;
        updateGalleryImage();
    });

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Real-time validation
    function validateUsername() {
        const errorElement = username.nextElementSibling;
        if (username.value.length < 3) {
            errorElement.textContent = 'Username must be at least 3 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validateEmail() {
        const errorElement = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorElement.textContent = 'Please enter a valid email address';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validatePassword() {
        const errorElement = password.nextElementSibling;
        if (password.value.length < 8) {
            errorElement.textContent = 'Password must be at least 8 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    // Add real-time validation listeners
    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
}); 