document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const menu = document.querySelector("#menu-icon");
  const navlist = document.querySelector(".navlist");
  const form = document.querySelector("form");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
  });

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch("send_email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          swal("Message Sent!", "Thank you for contacting me.", "success");
          contactForm.reset();
        } else {
          swal("Error", "Something went wrong. Please try again later.", "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        swal("Error", "Something went wrong. Please try again later.", "error");
      });
  });
});
