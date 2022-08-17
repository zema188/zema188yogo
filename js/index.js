
//------------------------------------------SEC-1-NAV--------------------------------

    let parent = document.querySelector('.header__nav-list');
    let menuItem = parent.querySelectorAll('.header__nav-item');
    
    
    parent.addEventListener('click', (event) => {
      // Отлавливаем элемент в родители на который мы нажали
      let target = event.target;
      
      // Проверяем тот ли это элемент который нам нужен
      if(target.classList.contains('header__nav-item')) {
        
        for(let i = 0; i < menuItem.length; i++) {
          // Убираем у других
          menuItem[i].classList.remove('active');
        }
        // Добавляем тому на который нажали
        target.classList.add('active');
      }
      
    });

//------------------------------------------SEC-3-SWIPER--------------------------------

const swiper = new Swiper('.sec-3__swiper', {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    750: {
      slidesPerView: 5,
      spaceBetween: 0,
    },


  }

})

//------------------------------------------SEC-3-PC--------------------------------

let parent_wrapper = document.querySelector('.swiper-wrapper');
let wrapper_slider = parent_wrapper.querySelectorAll('.sec-3__swiper-slide');


 for(let i = 0; i < wrapper_slider.length; i++) {
   if((wrapper_slider[i].classList.contains('swiper-slide-next')) && (screen.width>750)) {
     wrapper_slider[i-1].classList.add('active')
   }
 }




document.querySelector('.sec-3__swiper').onclick = function() {

  for(let i = 0; i < wrapper_slider.length; i++) {

      wrapper_slider[i].classList.remove('active')
  }
  for(let i = 0; i < wrapper_slider.length; i++) {
    if((wrapper_slider[i].classList.contains('swiper-slide-next')) && (screen.width>750)) {


      wrapper_slider[i-1].classList.add('active')
    }
  }
}
document.querySelector('.sec-3__swiper').addEventListener("mousemove", scroll_swiper_3)
document.querySelector('.sec-3__swiper').addEventListener("touchend", scroll_swiper_3)
function scroll_swiper_3() {
  for(let i = 0; i < wrapper_slider.length; i++) {

    wrapper_slider[i].classList.remove('active')
}
for(let i = 0; i < wrapper_slider.length; i++) {
  if((wrapper_slider[i].classList.contains('swiper-slide-next')) && (screen.width>750)) {

    wrapper_slider[i-1].classList.add('active')
  }
}
}
//------------------------------------------SEC-3-SWIPER-PHONE--------------------------------
if (screen.width<=750) {
  let parent_wrapper_3_m = document.querySelector('.swiper-wrapper');
  let wrapper_slider_3_m = parent_wrapper_3_m.querySelectorAll('.sec-3__swiper-slide');
  
  
   for(let i = 0; i < wrapper_slider_3_m.length; i++) {
     if((wrapper_slider_3_m[i].classList.contains('swiper-slide-next')) && (screen.width<=750)) {
  
       wrapper_slider_3_m[i-1].classList.add('active')
     }
   }
  
  
  
  
  document.querySelector('.sec-3__swiper').onclick = function() {
  
    for(let i = 0; i < wrapper_slider_3_m.length; i++) {
  
        wrapper_slider_3_m[i].classList.remove('active')
    }
    for(let i = 0; i < wrapper_slider_3_m.length; i++) {
      if((wrapper_slider_3_m[i].classList.contains('swiper-slide-next')) && (screen.width<=750)) {
  
  
        wrapper_slider_3_m[i-1].classList.add('active')
      }
    }
  }

  document.querySelector('.sec-3__swiper').addEventListener("touchend", scroll_swiper_3)
  function scroll_swiper_3() {
    for(let i = 0; i < wrapper_slider_3_m.length; i++) {
  
      wrapper_slider_3_m[i].classList.remove('active')
  }
  for(let i = 0; i < wrapper_slider_3_m.length; i++) {
    if((wrapper_slider_3_m[i].classList.contains('swiper-slide-next')) && (screen.width<=750)) {
  
      wrapper_slider_3_m[i-1].classList.add('active')
    }
  }
  }
}


//------------------------------------------SEC-9-SWIPER--------------------------------

const swiper_sec_9 = new Swiper('.sec-9__swiper', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 180,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 180
    },
    970: {
      slidesPerView: 1,
      spaceBetween: 70
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 70
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 50
    },

  }

})


//------------------------------------------SEC-9-PC more 1200px--------------------------------

 let parent_wrapper_9 = document.querySelector('.sec-9__swiper-wrapper');
 let wrapper_slider_9 = parent_wrapper_9.querySelectorAll('.sec-9__swiper-slide');


  for(let i = 0; i < wrapper_slider_9.length; i++) {
    if((wrapper_slider_9[i].classList.contains('swiper-slide-active')) && (screen.width>1200)) {
      wrapper_slider_9[i].classList.add('sec-9__slide-active')
    }
  }




 document.querySelector('.sec-9__swiper-wrapper').onclick = function() {

   for(let i = 0; i < wrapper_slider_9.length; i++) {

       wrapper_slider_9[i].classList.remove('sec-9__slide-active')
   }
   for(let i = 0; i < wrapper_slider_9.length; i++) {
     if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)) {


       wrapper_slider_9[i].classList.add('sec-9__slide-active')
     }
   }
 }
 document.querySelector('.sec-9__swiper-wrapper').addEventListener("mousemove", scroll_swiper_9)
 function scroll_swiper_9() {
  for(let i = 0; i < wrapper_slider_9.length; i++) {

     wrapper_slider_9[i].classList.remove('sec-9__slide-active')
 }
 for(let i = 0; i < wrapper_slider_9.length; i++) {
   if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)) {

     wrapper_slider_9[i].classList.add('sec-9__slide-active')
   }
   if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)){
     wrapper_slider_9[i].classList.add('sec-9__slide-active')
   }
}
 }

document.querySelector('.sec-9__swiper-button-prev').onclick = function() {
  for(let i = 0; i < wrapper_slider_9.length; i++) {

    wrapper_slider_9[i].classList.remove('sec-9__slide-active')
}
for(let i = 0; i < wrapper_slider_9.length; i++) {
  if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)) {

    wrapper_slider_9[i].classList.add('sec-9__slide-active')
  }
  if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)){
    wrapper_slider_9[i].classList.add('sec-9__slide-active')
  }
}
}

document.querySelector('.sec-9__swiper-button-next').onclick = function() {
  for(let i = 0; i < wrapper_slider_9.length; i++) {

    wrapper_slider_9[i].classList.remove('sec-9__slide-active')
}
for(let i = 0; i < wrapper_slider_9.length; i++) {
  if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)) {

    wrapper_slider_9[i].classList.add('sec-9__slide-active')
  }
  if((wrapper_slider_9[i].classList.contains('swiper-slide-active'))&& (screen.width>1200)){
    wrapper_slider_9[i].classList.add('sec-9__slide-active')
  }
}
}


//------------------------------------------SEC-9-PC <1200px--------------------------------

let parent_wrapper_9_m = document.querySelector('.sec-9__swiper-wrapper');
let wrapper_slider_9_m = parent_wrapper_9_m.querySelectorAll('.sec-9__swiper-slide');


 for(let i = 0; i < wrapper_slider_9_m.length; i++) {
   if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active')) && (screen.width<=1200)) {
     wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
   }
 }




document.querySelector('.sec-9__swiper-wrapper').onclick = function() {

  for(let i = 0; i < wrapper_slider_9_m.length; i++) {

      wrapper_slider_9_m[i].classList.remove('sec-9__slide-active')
  }
  for(let i = 0; i < wrapper_slider_9_m.length; i++) {
    if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active'))&& (screen.width<=1200)) {


      wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
    }
  }
}
document.querySelector('.sec-9__swiper-wrapper').addEventListener("touchend", scroll_swiper_9_m)
function scroll_swiper_9_m() {

  for(let i = 0; i < wrapper_slider_9_m.length; i++) {

    wrapper_slider_9_m[i].classList.remove('sec-9__slide-active')
 }
 for(let i = 0; i < wrapper_slider_9_m.length; i++) {
  if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active')) && (screen.width<=1200)) {

    wrapper_slider_9_m[i+1].classList.add('sec-9__slide-active')
  }
}

}

document.querySelector('.sec-9__swiper-button-prev').onclick = function() {
 for(let i = 0; i < wrapper_slider_9_m.length; i++) {

   wrapper_slider_9_m[i].classList.remove('sec-9__slide-active')
}
for(let i = 0; i < wrapper_slider_9_m.length; i++) {
 if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active'))&& (screen.width<=1200)) {

   wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
 }
 if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active'))&& (screen.width<=1200)){
   wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
 }
}
}

document.querySelector('.sec-9__swiper-button-next').onclick = function() {
  for(let i = 0; i < wrapper_slider_9_m.length; i++) {

    wrapper_slider_9_m[i].classList.remove('sec-9__slide-active')
 }
 for(let i = 0; i < wrapper_slider_9_m.length; i++) {
  if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active'))&& (screen.width<=1200)) {
    wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
  }
  if((wrapper_slider_9_m[i].classList.contains('swiper-slide-active'))&& (screen.width<=1200)){
    wrapper_slider_9_m[i].classList.add('sec-9__slide-active')
  }
 }
}











































//------------------------------------------HAMBURGER--------------------------------

var obj1 = document.getElementById('menuToggle');

if (getComputedStyle(obj1).display == 'none') {
document.getElementById('rezult1').innerHTML = "Скрыто";
}


document.querySelector('#menu_open').onclick = function() {


  if (getComputedStyle(obj1).position == 'absolute') {
    document.getElementById('menuToggle').style.position = "fixed";
    }
  else {
    document.getElementById('menuToggle').style.position = "absolute";
  }

}


// document.getElementById("menu").addEventListener("click",
// function(e){
// e = e || window.event;
// var target = e.target || e.srcElement;
// if(target.id == "menu") 
// {
//   console.log('asdasd')
//   document.getElementById('menu').style.transform = "rotate";
// }

// }
// );  