let bar = document.querySelector(".menu-bar");
let deroule =document.querySelector(".deroule");
let window_with = window.innerWidth;
const login_page = document.querySelector(".first-input")
const sin_up_page = document.querySelector(".second-input")


bar.addEventListener("click",function(){
    if (window_with <=800){
        deroule.classList.toggle("ouvre")
    }
    
})
window.addEventListener("resize",function(){
    deroule.classList.remove("ouvre")
})
function login(){
    login_page.style.transform ='translateX(450px)'
    sin_up_page.style.transform = 'translateX(-400px)'
    sin_up_page.style.opacity =  "1" 
    login_page.style.opacity = ".5"
    login_page.style.transition = 'all ease-in-out .5s'
    sin_up_page.style.transition = 'all ease .5s'
}
function sign_up(){
    login_page.style.transform ='translate(0px)'
    sin_up_page.style.transform = 'translate(0px)'
    login_page.style.transition = 'all ease .5s'
    sin_up_page.style.transition = 'all ease .5s'
    login_page.style.opacity = "1"

    
}