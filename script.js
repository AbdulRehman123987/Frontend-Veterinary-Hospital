let menuicon=document.querySelector(".menu");
let menubar=document.querySelector(".menu_bar");
let menuelement=document.getElementsByTagName("li");
    menuicon.addEventListener('click', function () {
        menubar.classList.toggle('menu');
    });
    for (let i = 0; i < menuelement.length; i++) {
        menuelement[i].addEventListener('click', function () {
            menubar.classList.remove('menu');
        })}