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
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Add your Sweet Alert configuration here
    swal("Message Sent!", "Thank you for contacting me.", "success");

    // Optionally, you can reset the form after submission
    form.reset();
  });
});
