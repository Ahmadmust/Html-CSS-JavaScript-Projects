var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
   var dayerror = document.getElementById("day-error");
   var dlabel=document.getElementById("dayl");
   var montherror = document.getElementById("month-error");
   var mlabel=document.getElementById("monthl");
   var yearError = document.getElementById("year-error");
   var ylabel=document.getElementById("yearl");

   let date= new Date(day,month-1,year);
   let currentData = new Date();
   var d = currentData.getDate();
   var m = currentData.getMonth()+1;
   var y = currentData.getFullYear();

   //if input field is empty
   function errorCheck(){
if(day==""){
  dayerror.innerHTML="This field is required";
  dlabel.style.color="red";
  return false;
}
else if( day > 31 || day <= 0){
  dayerror.innerHTML="Must be a valid day";
  dlabel.style.color="red";
  return false;
}
   //if input field is empty
if(month==""){
  montherror.innerHTML="This field is required";
  mlabel.style.color="red";
  return false;
}
else if( month > 12 || month <= 0){
  yearError.innerHTML="Must be a valid month";
  ylabel.style.color="red";
  return false;
}
   //if input field is empty
if(year==""){
  yearError.innerHTML="This field is required";
  ylabel.style.color="red";
  return false;
}
else if(year> y){
  yearError.innerHTML="Year must be in the past";
  ylabel.style.color="red";
  return false;
}
   dayerror.innerHTML="";
   dlabel.style.color="hsl(0, 1%, 44%)";
   montherror.innerHTML="";
   mlabel.style.color="hsl(0, 1%, 44%)";
   yearError.innerHTML="";
   ylabel.style.color="hsl(0, 1%, 44%)";
   return true;
   }
   errorCheck();
 


var months = [31,28,31,30,31,30,31,31,30,31,30,31];

if(day>d){
  d = d + months[m -1];
  m = m - 1;
}
if(month > m){
  m = m+12;
  y= y-1;
}
var  days = d -day;
var mon = m - month;
var years = y - year;

  console.log(years)
  console.log(mon)
  console.log(days)

  var inDays = document.getElementById("d");
  var inMonths = document.getElementById("m");
  var inYears = document.getElementById("y");


  inYears.innerHTML=years;
  inMonths.innerHTML=mon;
  inDays.innerHTML=days;
  
});