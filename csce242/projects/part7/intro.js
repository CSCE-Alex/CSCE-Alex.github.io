// Toggle Nav menu
const toggleNav = document.getElementById("toggle-nav");
const mainNav = document.getElementById("main-nav");

if (toggleNav) {
    toggleNav.addEventListener("click", (e) => {
        e.preventDefault();
        mainNav.classList.toggle("show-small");
    });
}

// Parse JSON
const getServices = async () => {
    const url = "https://csce-alex.github.io/csce242/projects/part7/data/services.json";
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const services = await response.json();
        const container = document.getElementById("services-container");
        
        if (!container) return;

        container.innerHTML = ""; 

        services.forEach(service => {
            let card = document.createElement("div");
            card.classList.add("pricing-card");

            // dynamic card
            card.innerHTML = `
                <img src="${service.img_name}" alt="${service.name}" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:15px;">
                <h3>${service.name}</h3>
                <div class="price">$${service.price} <span>/ ${service.duration}</span></div>
                <ul class="package-features">
                    <li><i class="fa-solid fa-check"></i> Category: ${service.category}</li>
                    <li><i class="fa-solid fa-check"></i> Professional Grade Tools</li>
                    <li><i class="fa-solid fa-check"></i> Quality Inspection Included</li>
                </ul>
                <a href="contact.html" class="btn btn-outline">Select Tier Option</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to fetch services JSON:", error);
    }
};

window.addEventListener("DOMContentLoaded", () => {
    getServices();
});

// Async Contact / Booking Form Submission
const bookingForm = document.getElementById("booking-form");
const resultText = document.getElementById("result");

if (bookingForm) {
    bookingForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        // Show sending status
        resultText.style.display = "block";
        resultText.style.color = "#007bff";
        resultText.textContent = "Submitting reservation request...";

        const formData = new FormData(bookingForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (response.status === 200) {
                resultText.style.color = "#28a745"; 
                resultText.textContent = "Success! Your reservation request has been submitted.";
                bookingForm.reset();
            } else {
                resultText.style.color = "#dc3545"; 
                resultText.textContent = result.message || "Failed to submit request.";
            }
        } catch (error) {
            console.error("Form submission error:", error);
            resultText.style.color = "#dc3545";
            resultText.textContent = "An error occurred. Please try again later.";
        }

        // Delay hiding feedback 
        setTimeout(() => {
            resultText.textContent = "";
            resultText.style.display = "none";
        }, 4000);
    });
}