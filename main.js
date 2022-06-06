// typed js
const typed = new Typed(".typing1", {
    strings: [,"I'm 14 years old", "I like to code", "Python?, yes", "JavaScript!", "HTML and CSS"],
    loop: true,
    typeSpeed: 160,
    backSpeed: 80,
  });



  // Theme changer
const themes = [
    "#18f0e5", "#18f051", "#daf018", "#f09a18", "#f018c1", "#e34457", "#6673ed", "#ed669a", "#90e7e8", "#8fe685", "#e6e685", "#edcc72", "#ed8f72", "#d0ed72", "#cb77f2", "#779af2", "#7cf7d4", "#f02b8d"
];
const root = document.querySelector(":root");
const themeToggle = document.querySelector("#main-name");
let currentTheme = 0;

const changeTheme = () => {
  currentTheme++;
  if (currentTheme == themes.length) {
    currentTheme = 0;
  }
  root.style.setProperty("--color-theme", themes[currentTheme]);
};


function yourFunction(){
  // do whatever you like here

  changeTheme()
  setTimeout(yourFunction, 5000);
}

yourFunction();



  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const logo_box = document.querySelector('.logo_box');
const logo_box_2 =document.querySelector('.logo_box_2');
const logo = document.getElementById('logo')
const message = document.querySelector('#message');

document.addEventListener('scroll', function () {


    if (isInViewport(logo_box)) {
      logo.classList.remove('LOGO_NOT_THERE');
      logo.classList.add('is-visible');


    } 

    if (isInViewport(logo_box_2)) {
      logo.classList.remove('LOGO_NOT_THERE');
      logo.classList.add('is-visible');


    } 

}, {
  passive: true
});


const hamburger = document.querySelector("#mobile-menu");
const tabs = document.querySelector(".navbar__menu");
//display hamburger menue
const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  tabs.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);



//highlight active menu
const home_box = document.querySelector('.heading');
const navLogo = document.querySelector("#navbar__logo");
const highlightMenu = () => {
  const activeElement = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#intro-page");
  const resumeMenu = document.querySelector("#resume-page");
  const stackMenu = document.querySelector("#stack-page");

  let scrollPos = window.scrollY;
  if (isInViewport(home_box)) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (isInViewport(logo_box)) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    resumeMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1500) {
    resumeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    stackMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    stackMenu.classList.add("highlight");
    resumeMenu.classList.remove("highlight");

    return;
  }

  if (
    (activeElement && window.innerWidth < 960 && scrollPos < 600) ||
    activeElement
  ) {
    activeElement.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//close mobile menu on item click
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    hamburger.classList.toggle("is-active");
    tabs.classList.remove("active");
  }
};

tabs.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);