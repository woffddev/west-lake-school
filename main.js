const nav_links = document.getElementById('nav-links') ;
const hide_menu = document.getElementById('hideMenu');
const show_menu = document.getElementById('showMenu');

show_menu.addEventListener('click', show_nav);
hide_menu.addEventListener('click', hide_nav)

function show_nav(){
    nav_links.style.right = '0';
}

function hide_nav(){
    nav_links.style.right = '-200px';
}