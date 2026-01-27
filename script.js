 document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 stops page reload

    const formData = new FormData(form);

    fetch("https://sheetdb.io/api/v1/klxwoljtxs5p7", {
      method: "POST",
      body: formData
    })
    .then(() => {
      status.textContent = "Form submitted successfully!";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Something went wrong. Try again.";
    });
  });
});

const readMoreCard = document.getElementById("read-more-card");

readMoreCard.addEventListener("click", () => {
  readMoreCard.classList.toggle("fixed");
});

setTimeout(() => {
  document.querySelector(".typewriter").classList.add("done");
}, 2500);