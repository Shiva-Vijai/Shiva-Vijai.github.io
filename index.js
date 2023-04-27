// typed js
const typed = new Typed(".typing1", {
    strings: [,"I love to code", "I code mainly in Python and Java", "I'm a Developer!"],
    loop: false,
    typeSpeed: 150,
    backSpeed: 80,
  });


const moblieMenuOption = document.querySelector("#mobile-menu");
const navbarElement = document.querySelector(".navbar");
const headerElement = document.querySelector(".header");
//display moblie_menu_var menu
const mobileMenu = () => {
  moblieMenuOption.classList.toggle("is-active");
  navbarElement.classList.toggle("is-active");
  headerElement.classList.toggle("is-active");
};
moblieMenuOption.addEventListener("click", mobileMenu);


  //close mobile menu on item click
const hideMobileMenu = () => {
    moblieMenuOption.classList.remove("is-active");
    navbarElement.classList.remove("is-active");
    headerElement.classList.remove("is-active");
  
};
navbarElement.addEventListener("click", hideMobileMenu);




let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");


window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

