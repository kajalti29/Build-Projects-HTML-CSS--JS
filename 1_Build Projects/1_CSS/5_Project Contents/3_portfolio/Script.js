// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = form.name.value.trim();
    let email = form.email.value.trim();
    let message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill all fields!");
    } else {
        alert("✅ Message sent successfully!");
        form.reset();
    }
});
