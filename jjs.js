let text= document.querySelector('#text');
let author=document.querySelector('#author');
let button=document.querySelector('#new-quote');
let span=document.createElement("span");
let warper=document.querySelector('.wrapper');
let btn=document.querySelector('#btn');




let fir=button.addEventListener("click",function(){
text.innerHTML="A person who never made a mistake never tried anything new.."
author.innerHTML="- Albert Einstein";
document.body.style.background="purple";
document.body.querySelector('#new-quote').style.background="purple";
document.body.querySelector('#tumblr-quote').style.background="purple";
document.body.querySelector('#tweet-quote').style.background="purple";

});



  


