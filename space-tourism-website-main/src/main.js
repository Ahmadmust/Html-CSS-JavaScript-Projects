
const open = document.querySelector(".open");
const close = document.querySelector(".close")
const mobileNav = document.querySelector(".mobile-nav")

open.addEventListener('click',()=>{
    mobileNav.classList.remove("active")
})
close.addEventListener('click',()=>{
    mobileNav.classList.add("active")
})

