const top1 = document.querySelector(".top1")
const top2 = document.querySelector(".top2")
const top3 = document.querySelector(".top3")
const open = document.querySelector(".open")
const close = document.querySelector(".close");
const open2 = document.querySelector(".open2")
const open3 = document.querySelector(".open3")

const mobilenav = document.querySelector(".mobilenav")

open.addEventListener("click",()=>{
    mobilenav.classList.remove("active")
})
open2.addEventListener("click",()=>{
    mobilenav.classList.remove("active")
})
open3.addEventListener("click",()=>{
    mobilenav.classList.remove("active")
})
close.addEventListener("click",()=>{
    mobilenav.classList.add("active")
})


function nextPic1(){
top2.classList.remove("active")
top1.classList.add("active")
}
function nextPic2(){
top3.classList.remove("active")
top2.classList.add("active")
}
function nextPic3(){
top1.classList.remove("active")
top3.classList.add("active")
}
function prevPic1(){
top3.classList.remove("active")
top1.classList.add("active")
}
function prevPic2(){
top1.classList.remove("active")
top2.classList.add("active")
}
function prevPic3(){
top2.classList.remove("active")
top3.classList.add("active")
}