// ✅ Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // ✅ Mobile Menu Toggle
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  });
  
  // ✅ Theme Toggle (Light / Dark / Auto)
  const themeToggleBtn = document.getElementById("theme-toggle");
  let darkMode = true;
  
  themeToggleBtn.addEventListener("click", () => {
    if (darkMode) {
      document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
      document.documentElement.style.setProperty('--text-color', '#0a192f');
      document.documentElement.style.setProperty('--accent-color', '#0077ff');
      document.documentElement.style.setProperty('--card-color', '#ffffff');
      document.documentElement.style.setProperty('--shadow-color', 'rgba(0,0,0,0.1)');
      themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
      document.documentElement.style.setProperty('--bg-color', '#0a192f');
      document.documentElement.style.setProperty('--text-color', '#ccd6f6');
      document.documentElement.style.setProperty('--accent-color', '#64ffda');
      document.documentElement.style.setProperty('--card-color', '#112240');
      document.documentElement.style.setProperty('--shadow-color', 'rgba(2,12,27,0.7)');
      themeToggleBtn.textContent = '🌙 Dark Mode';
    }
    darkMode = !darkMode;
  });
  
  // ✅ Contact Form EmailJS Submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "⏳ Sending...";
  
    emailjs.sendForm(
      'service_ck6y2vt',     // Replace with your service ID
      'template_2czzmao',    // Replace with your template ID
      this
    ).then(() => {
      formMessage.textContent = "✅ Message sent successfully!";
      this.reset();
    }).catch(error => {
      formMessage.textContent = "❌ Failed to send. Try again.";
      console.error("EmailJS error:", error);
    });
  });
  
  // ✅ AOS Animation Initialization
  document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  });
  