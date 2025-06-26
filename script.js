// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const toggleBtn = document.getElementById("theme-toggle");
let darkMode = true;

toggleBtn.addEventListener("click", () => {
  if (darkMode) {
    document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', '#0a192f');
    document.documentElement.style.setProperty('--accent-color', '#0077ff');
    document.documentElement.style.setProperty('--card-color', '#ffffff');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    document.documentElement.style.setProperty('--bg-color', '#0a192f');
    document.documentElement.style.setProperty('--text-color', '#ccd6f6');
    document.documentElement.style.setProperty('--accent-color', '#64ffda');
    document.documentElement.style.setProperty('--card-color', '#112240');
    document.documentElement.style.setProperty('--shadow-color', 'rgba(2,12,27,0.7)');
    toggleBtn.textContent = '🌙 Dark Mode';

  }
  darkMode = !darkMode;
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_ck6y2vt',  // Replace this
      'template_2czzmao', // Replace this
      this
    ).then(() => {
      document.getElementById("form-message").textContent = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("form-message").textContent = "❌ Failed to send. Try again.";
      console.error("EmailJS error:", error);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  
