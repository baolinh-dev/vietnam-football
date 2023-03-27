// slider match calender
$(document).ready(function(){
  $('.slider').slick({ 
    slidesToShow: 3,  
    autoplay: false,  
    autoplaySpeed: 2000,
    infinite: true, 
    speed: 600,  
    centerMode: true,  
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", 
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: { 
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});   
// Owl 
$('.owl-carousel').owlCarousel({
        items:4,
        loop:true, 
        autoplay: true, 
    autoplayTimeout:4000, 
    URLhashListener:true, 
      center: true,
        startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// Timer counter 
const daysEl = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds'); 
const newYears = "23 Aug 2023";
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/
    1000;
    const days = Math.floor(totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds)% 60; 

    daysEl.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins); 
    secondsE1.innerHTML = formatTime(seconds); 
    if (totalSeconds < 0) {
      daysEl.innerHTML = formatTime(0);
      hoursE1.innerHTML = formatTime(0);
      minsEl.innerHTML = formatTime(0); 
      secondsE1.innerHTML = formatTime(0);
      return; // dừng bộ đếm ngược nếu thời gian đã hết
    }
} 
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call
countdown();
setInterval(countdown, 1000);