const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector(".navbar_menu");

const style = document.createElement("style");
style.innerHTML = `
    nav {
        display: block;
    }
    .menuBar {
           display: block; 
    }
    `;


hamburger.addEventListener("click", () => {
    document.head.appendChild(style);
})