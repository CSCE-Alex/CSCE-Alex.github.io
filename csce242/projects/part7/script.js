//parsing 
const JSON_URL = "https://csce-alex.github.io/csce242/projects/part7/data/services.json";

const loadJSONServices = async () => {
  const container = document.getElementById("services-container");
  if (!container) return; // not on the services page

  try {
    const response = await fetch(JSON_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const services = await response.json();
    container.innerHTML = "";

    services.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.innerHTML = `
        <img src="${service.img_name}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p><strong>Category:</strong> ${service.category}</p>
        <p><strong>Price:</strong> $${service.price}</p>
        <p><strong>Est. Time:</strong> ${service.duration}</p>
        <p><small>Service ID: #${service._id}</small></p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading JSON:", error);
    container.innerHTML = `<p style="color: #ff4d4d;">Failed to load services from JSON.</p>`;
  }
};

// contact form
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showFeedback = (feedback, type, message) => {
  feedback.classList.remove("hidden", "success", "error", "sending");
  feedback.classList.add(type);
  feedback.textContent = message;
};

const initContactForm = () => {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return; // not on the contact page

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    showFeedback(feedback, "sending", "Sending your request...");

    const formData = new FormData(form);
    const jsonBody = JSON.stringify(Object.fromEntries(formData));

    try {
      
      const [response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: jsonBody
        }),
        wait(1000)
      ]);

      const result = await response.json();

      if (response.ok && result.success !== false) {
        showFeedback(feedback, "success", "Thank you! Your quote request has been sent successfully.");
        form.reset();
      } else {
        showFeedback(feedback, "error", result.message || "An error occurred while submitting.");
      }
    } catch (err) {
      await wait(1000);
      showFeedback(feedback, "error", "Network error. Please try again later.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadJSONServices();
  initContactForm();
});