let menuIcon = document.querySelector(".menu-icon");
let mobileMenu = document.querySelector(".nav-links-mobile");

if(menuIcon && mobileMenu){
    menuIcon.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });
}

let serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach(function(button){
    button.addEventListener("click", function(){
        let clickedBox = button.closest(".service-box");
        let clickedIcon = button.querySelector("i");

        document.querySelectorAll(".service-box").forEach(function(box){
            let icon = box.querySelector(".service-btn i");

            if(box !== clickedBox){
                box.classList.remove("active");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-plus");
            }
        });

        clickedBox.classList.toggle("active");

        if(clickedBox.classList.contains("active")){
            clickedIcon.classList.remove("fa-plus");
            clickedIcon.classList.add("fa-xmark");
        }else{
            clickedIcon.classList.remove("fa-xmark");
            clickedIcon.classList.add("fa-plus");
        }
    });
});