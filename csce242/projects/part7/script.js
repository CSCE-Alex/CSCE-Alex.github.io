// GitHub Page 
const JSON_URL = "https://CSCE-Alex.github.io/csce242/projects/part7/data/services.json";

// parse json
const loadJSONServices = async () => {
  const container = document.getElementById("services-container");
  if (!container) return;

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
const initContactForm = () => {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const jsonBody = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: jsonBody
      });

      const result = await response.json();

      setTimeout(() => {
        feedback.classList.remove("hidden", "success", "error");

        if (response.status === 200) {
          feedback.classList.add("success");
          feedback.textContent = "Thank you! Your quote request has been sent successfully.";
          form.reset();
        } else {
          feedback.classList.add("error");
          feedback.textContent = result.message || "An error occurred while submitting.";
        }
      }, 1000);

    } catch (err) {
      setTimeout(() => {
        feedback.classList.remove("hidden", "success", "error");
        feedback.classList.add("error");
        feedback.textContent = "Network error. Please try again later.";
      }, 1000);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadJSONServices();
  initContactForm();
});