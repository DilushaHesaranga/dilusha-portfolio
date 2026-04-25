let menuIcon = document.querySelector(".menu-icon");
let mobileLinks = document.querySelector(".nav-links-mobile");

menuIcon.addEventListener("click", function(){
    mobileLinks.classList.toggle("active");
});

let hero_title = document.getElementById("hero-title");

function display_title_01(){
    if(hero_title.textContent=="Web Developer"){
    hero_title.textContent="UI/UX designer";}
    else {
        hero_title.textContent="Web Developer";
    }
}
display_title_01();
setInterval(display_title_01,4000);

