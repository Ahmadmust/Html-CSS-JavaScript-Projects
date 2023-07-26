var nextStep1 = document.getElementById("ns1");
var nextStep2 = document.getElementById("ns2");
var nextStep3 = document.getElementById("ns3");
var nextStep4 = document.getElementById("ns4");

var goback2 = document.getElementById("gb2");
var goback3 = document.getElementById("gb3");
var goback4 = document.getElementById("gb4");

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");

var circle1 = document.getElementById("c1");
var circle2 = document.getElementById("c2");
var circle3 = document.getElementById("c3");
var circle4 = document.getElementById("c4");
var MnextStep1 = document.getElementById("mns1");


MnextStep1.addEventListener("click",()=>{
    step1.classList.add("active");
    step2.classList.remove("active");
    circle2.classList.add("cactive");
    circle1.classList.remove("cactive");
});

nextStep1.addEventListener("click",()=>{
step1.classList.add("active");
step2.classList.remove("active");
circle2.classList.add("cactive");
circle1.classList.remove("cactive");
});

nextStep2.addEventListener("click",()=>{
step1.classList.add("active");
step2.classList.add("active");
step3.classList.remove("active");
circle3.classList.add("cactive");
circle2.classList.remove("cactive");
circle1.classList.remove("cactive");

});

nextStep3.addEventListener("click",()=>{
step1.classList.add("active");
step2.classList.add("active");
step3.classList.add("active");
step4.classList.remove("active");
circle4.classList.add("cactive");
circle3.classList.remove("cactive");
circle2.classList.remove("cactive");
circle1.classList.remove("cactive");

});

nextStep4.addEventListener("click",()=>{
step1.classList.add("active");
step2.classList.add("active");
step3.classList.add("active");
step4.classList.add("active");
step5.classList.remove("active");
});

goback2.addEventListener("click",()=>{
step1.classList.remove("active");
step2.classList.add("active");
circle2.classList.remove("cactive");
circle1.classList.add("cactive");
});
goback3.addEventListener("click",()=>{
    step1.classList.add("active");
    step3.classList.add("active");
    step2.classList.remove("active");
    circle2.classList.add("cactive");
    circle1.classList.remove("cactive");
    circle3.classList.remove("cactive");
    });
    goback4.addEventListener("click",()=>{
        step1.classList.add("active");
        step2.classList.add("active");
        step3.classList.remove("active");
        step4.classList.add("active");
        circle4.classList.remove("cactive");
        circle3.classList.add("cactive");
        circle2.classList.remove("cactive");
        circle1.classList.remove("cactive");

});



