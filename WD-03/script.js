// Navbar color change on scroll
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#000";
    }else{
        navbar.style.background = "#333";
    }
});