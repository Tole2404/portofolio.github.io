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

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_ie9gnh1", "template_6mdzuvs", "#contact-form", "P6ZhITkvarZHvOU16").then(
    () => {
      contactMessage.textContent = "Message sent successfully ✅";
    },
    () => {
      contactMessage.textContent = "Message not sent ❌ ";
    }
  );
};
contactForm.addEventListener("submit", sendEmail);
