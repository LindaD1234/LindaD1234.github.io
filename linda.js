// Countdown
var time=document.getElementsByClassName("timer")
 
 var timings=30;
 var i=0;
     var myInterval = setInterval(Timeout, 1000);
    function Timeout(){
      if((timings*60-i)%60>=10){
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
      }
      else{
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
      }
      
     
      
i++;
    }


// Image gallery
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}