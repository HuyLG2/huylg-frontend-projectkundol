// Darkmode
var darkMode = document.getElementById("dark-change");
darkMode.onclick = function() {
  document.body.classList.toggle("dark-theme");
}
//Color

const widget = document.querySelector('.widget');
const control = document.querySelector('.control');

widget.addEventListener("click", () => {
    control.classList.toggle('open');
});

const colors = [ ... document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#fe4536");

colors.forEach((color) => {
    color.addEventListener("click", () => {
        const currentColor = color.dataset.id;
        document
            .querySelector(":root")
            .style.setProperty("--customColor", currentColor);
    });
});

window.addEventListener("scroll", () => {
    control.classList.remove("open");
});

// Color border-black checked
editColor = document.querySelector(".colorfull").querySelectorAll("div");
console.log(editColor);

editColor.forEach(element => {
  element.addEventListener("click",function() {
    editColor.forEach(editColor=>editColor.classList.remove("color-active"))
    this.classList.add("color-active");
  })
})

// Btn - check Box & RTL
var circleRunRTL = document.getElementById("circle-runRTL");
circleRunRTL.addEventListener('click', function() {
  circleRunRTL.classList.toggle('activeRunRTL');
})

var circleRunBox = document.getElementById("circle-runBox");
circleRunBox.addEventListener('click', function() {
  circleRunBox.classList.toggle('activeRunBox');
})


// Swiper Slide BANNER

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    parallax: true,
    cssMode: true,
    mousewheel: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
  });

  // Nav-mobi
  function openFunction() {
    var nav = document.getElementById("navmobi");
    nav.classList.toggle('active')
  }
  function closeFunction() {
    var nav = document.getElementById("navmobi");
    nav.classList.toggle('active')
  }

  // Dropdown mobi
  function showHome() {
    var nav = document.getElementById("showHome");
    nav.classList.toggle('dropdownMobi')
  }

  function showShop() {
    var nav = document.getElementById("showShop");
    nav.classList.toggle('dropdownMobi')
  }

  function showProduct() {
    var nav = document.getElementById("showProduct");
    nav.classList.toggle('dropdownMobi')
  }

  function showFeatures() {
    var nav = document.getElementById("showFeatures");
    nav.classList.toggle('dropdownMobi')
  }

  function showPages() {
    var nav = document.getElementById("showPages");
    nav.classList.toggle('dropdownMobi')
  }

  function showVendor() {
    var nav = document.getElementById("showVendor");
    nav.classList.toggle('dropdownMobi')
  }


  // Dropdown Search
  function searchFunction() {
    var search = document.getElementById("dropdownSearch");
    search.classList.toggle('activeSearch')
  }
  // const search = document.querySelector('.search-all');
  // const searchAll = document.querySelector('.btn-navScroll-mobi-right');

  // searchAll.addEventListener("click", () => {
  //   search.classList.toggle('activeSearch');
  // });


  // scroll-Top menu nagivaion
$(window).scroll(function(){
  if ($(window).scrollTop() > 100){ 
     $('.scroll-top').slideDown(100);
     $(".scroll-top").css({
        "opacity": "1",
        "visibility" :"visible",
        "transition": "all 300ms ease-in-out"
     });
    //  Scroll Menu
     $('.header-scroll-nav').slideDown(100);
     $(".header-scroll-nav").css({
        "display" :"block",
        "transition": "all 300ms ease-in-out"
     });
  } 
  else{
     $('.scroll-top').css({
        'opacity' : '0',
        "visibility" :"hidden",
        "transition": "all 300ms ease-in-out"
     });
    //  Scroll Menu
     $('.header-scroll-nav').css({
      "display" :"none",
      "transition": "all 300ms ease-in-out"
     });
  }
});

// Swiper Slide Foods (Selling Product) 1

var swiper = new Swiper(".mySwiperSeling", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".selling-button-next",
    prevEl: ".selling-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    426: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

// Swiper Slide Foods (Selling Product) 2 

var swiper = new Swiper(".mySwiperSeling-2", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".selling-button-next-2",
    prevEl: ".selling-button-prev-2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  },
});


// Swiper Slide (News Feed)

var swiper = new Swiper(".mySwiperNews", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news-button-next",
    prevEl: ".news-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    426: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Add (Cart, Wishlist, Compare)
function notificationCart(){
    
  jQuery('#notificationCart').show();
  setTimeout(function(){
      jQuery('#notificationCart').hide('slow');
    }, 2000);
}
function notificationCompare(){

  jQuery('#notificationCompare').show();
  setTimeout(function(){
      jQuery('#notificationCompare').hide('slow');
    }, 2000);
}

function notificationWishlist(){

  jQuery('#notificationWishlist').show();
  setTimeout(function(){
      jQuery('#notificationWishlist').hide('slow');
    }, 2000);
}

// Active EYES (Detail) 
$(document).on('click','.product-model li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
$(document).on('click','.product-model1 li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
//------------------------------tăng giảm sp 
jQuery(document).ready(function(){
  var quantitiy=0;
  jQuery('.quantity-plus1').click(function(e){
      
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#quantity1').val());
      
      // If is not undefined
          
      jQuery('#quantity1').val(quantity + 1);

      // Increment
      
  });

  jQuery('.quantity-minus1').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#quantity1').val());
      
      // If is not undefined
      
      // Increment
      if(quantity>0){
          jQuery('#quantity1').val(quantity - 1);
      }
  });
});



//show new lettermodal
jQuery(window).on('load',function(){
  jQuery('#ShownewsletterModal').modal('show');
});

