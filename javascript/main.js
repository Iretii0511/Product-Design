const hamburgerMum = document.querySelector ('.hamburger_mum');
const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.banner-container .container:first-child');
const menu = document.querySelector('.navbar_menu');
let showMenu = false;
const toggle = () => {
    if(!showMenu){
        menu.classList.add('show');
        container.classList.remove('container');
        hamburger.classList.add('close');
        showMenu = true;
        return
    }
    menu.classList.remove('show');
    hamburger.classList.remove('close');
    container.classList.add('container');
    showMenu = false;
}
hamburgerMum.addEventListener('click', toggle);