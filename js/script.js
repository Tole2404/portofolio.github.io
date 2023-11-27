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

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        if (result === "success") {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will get back to you soon.",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
