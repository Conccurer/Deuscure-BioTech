// ===================================
// CONTACT PAGE JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  setupContactForm();
});

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    const isValid = validateForm(name, email, phone, subject, message);
    
    if (isValid) {
      // Show success message
      showSuccessMessage();
      
      // Clear form
      form.reset();
      
      // Reset after 5 seconds
      setTimeout(() => {
        hideSuccessMessage();
      }, 5000);
    }
  });
}

function validateForm(name, email, phone, subject, message) {
  let isValid = true;
  
  // Clear previous errors
  clearErrors();
  
  // Validate name
  if (name.length < 2) {
    showError('nameError', 'Please enter a valid name');
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('emailError', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Validate phone
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phone)) {
    showError('phoneError', 'Please enter a valid phone number');
    isValid = false;
  }
  
  // Validate subject
  if (subject === '') {
    showError('subjectError', 'Please select a subject');
    isValid = false;
  }
  
  // Validate message
  if (message.length < 10) {
    showError('messageError', 'Message must be at least 10 characters long');
    isValid = false;
  }
  
  return isValid;
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.form-error');
  errorElements.forEach(element => {
    element.textContent = '';
    element.style.display = 'none';
  });
}

function showSuccessMessage() {
  const successElement = document.getElementById('successMessage');
  if (successElement) {
    successElement.style.display = 'block';
  }
}

function hideSuccessMessage() {
  const successElement = document.getElementById('successMessage');
  if (successElement) {
    successElement.style.display = 'none';
  }
}
