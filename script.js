function scrollToElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

let header = document.getElementById("myHeader");

function handleScroll() {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition > 0) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
}

window.addEventListener("scroll", handleScroll);
const linkTags = document.querySelectorAll("whatsappGo");
const telLink = document.getElementById("telGo");

const NUMBER_1 = "996500441844";
const NUMBER_2 = "996703660044";
const linkTag = document.querySelectorAll("#whatsappGo");

const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

const localStorageNumber = () => {
  const number = randomNumber % 2 === 0 ? NUMBER_1 : NUMBER_2;
  telLink.href = `tel:${number}`;
  linkTag.forEach((el) => {
    el.href = `https://wa.me/${number}`;
  });
};

localStorageNumber();

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.getElementById("burgerButton");
  const mobileNav = document.getElementById("mobileNav");
  const closeButton = document.getElementById("closeButton");

  burgerButton.addEventListener("click", function () {
    mobileNav.style.display =
      mobileNav.style.display === "block" ? "none" : "block";
  });

  // Получаем ссылки на элементы меню
  const navLinks = document.querySelectorAll(".mobile-nav a");

  // Функция для закрытия бургер-меню
  function closeMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.style.display = "none";
  }

  // Добавляем обработчик события для кнопки закрытия
  closeButton.addEventListener("click", closeMobileMenu);

  // Добавляем обработчик события для каждой ссылки в меню
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileNav.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");
  const navLinks = document.querySelectorAll(".mobile-nav a");

  function closeMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.style.display = "none";
  }

  closeButton.addEventListener("click", closeMobileMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });
});
