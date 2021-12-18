//  ***********************************************************
// Dashboard

$(".productPage-tabs .tab-item").click(function () {
    var idata= $(this).attr('idata');
    $(".productPage-tabs-content .tab-check").removeClass('active');
    $(".tab-check-" + idata).addClass('active');
  });
  
  
  // Border checked Dashboard
  checkDashboard = document.querySelector(".productPage-tabs").querySelectorAll(".tab-item");
  console.log(checkDashboard);
  
  checkDashboard.forEach(element => {
    element.addEventListener("click",function() {
      checkDashboard.forEach(checkDashboard=>checkDashboard.classList.remove("active"))
      this.classList.add("active");
    })
  })
  

  //show new lettermodal
  jQuery(window).on('load',function(){
    jQuery('#ShownewsletterModal').modal('show');
  });


  // Slide banner Zoom
  var swiper = new Swiper(".mySwiperZoom", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".productPage-button-next",
      prevEl: ".productPage-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // Product Final
  var swiper = new Swiper(".mySwiperProductPage", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      }
    },
  });


// active color
$(document).on('click','.color-option li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
// active size 
$(document).on('click','.size-option li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})



// Zoom banner 2

// 1
$(document).ready(function(){
  let t=document.getElementById("NZoomImg1"),
  e=t.getAttribute("data-NZoomscale")<=0?1:t.getAttribute("data-NZoomscale"),
  s=t.clientWidth,o=t.clientHeight;
  $("#NZoomImg1").replaceWith('<div id="NZoomContainer1">'+t.outerHTML+"</div>");
  
  let i=$("#NZoomContainer1"),n=$("#NZoomImg1");
  i.css("width",s+"px"),i.css("height",o+"px"),i.mousemove(function(t){
      let e=$(this).offset(),i=(t.pageX-e.left)/s*100<=100?(t.pageX-e.left)/s*100:100,c=(t.pageY-e.top)/o*100<=100?(t.pageY-e.top)/o*100:100;
      n.css("transform-origin",i+"% "+c+"%")}),i.mouseenter(function(){
          n.css("cursor","crosshair"),
          n.css("width",s+"px"),
          n.css("height",o+"px"),
          n.css("transition","0.2s"),
          n.css("transform","scale("+e+")")
      }).mouseleave(function(){n.css("transition","0.2s"),n.css("transform","scale(1)")})});

// 2
$(document).ready(function(){
  let t=document.getElementById("NZoomImg2"),
  e=t.getAttribute("data-NZoomscale")<=0?1:t.getAttribute("data-NZoomscale"),
  s=t.clientWidth,o=t.clientHeight;
  $("#NZoomImg2").replaceWith('<div id="NZoomContainer2">'+t.outerHTML+"</div>");
  
  let i=$("#NZoomContainer2"),n=$("#NZoomImg2");
  i.css("width",s+"px"),i.css("height",o+"px"),i.mousemove(function(t){
      let e=$(this).offset(),i=(t.pageX-e.left)/s*100<=100?(t.pageX-e.left)/s*100:100,c=(t.pageY-e.top)/o*100<=100?(t.pageY-e.top)/o*100:100;
      n.css("transform-origin",i+"% "+c+"%")}),i.mouseenter(function(){
          n.css("cursor","crosshair"),
          n.css("width",s+"px"),
          n.css("height",o+"px"),
          n.css("transition","0.2s"),
          n.css("transform","scale("+e+")")
      }).mouseleave(function(){n.css("transition","0.2s"),n.css("transform","scale(1)")})});
      

// 4
$(document).ready(function(){
  let t=document.getElementById("NZoomImg3"),
  e=t.getAttribute("data-NZoomscale")<=0?1:t.getAttribute("data-NZoomscale"),
  s=t.clientWidth,o=t.clientHeight;
  $("#NZoomImg3").replaceWith('<div id="NZoomContainer3">'+t.outerHTML+"</div>");
  
  let i=$("#NZoomContainer3"),n=$("#NZoomImg3");
  i.css("width",s+"px"),i.css("height",o+"px"),i.mousemove(function(t){
      let e=$(this).offset(),i=(t.pageX-e.left)/s*100<=100?(t.pageX-e.left)/s*100:100,c=(t.pageY-e.top)/o*100<=100?(t.pageY-e.top)/o*100:100;
      n.css("transform-origin",i+"% "+c+"%")}),i.mouseenter(function(){
          n.css("cursor","crosshair"),
          n.css("width",s+"px"),
          n.css("height",o+"px"),
          n.css("transition","0.2s"),
          n.css("transform","scale("+e+")")
      }).mouseleave(function(){n.css("transition","0.2s"),n.css("transform","scale(1)")})});

// 4
$(document).ready(function(){
  let t=document.getElementById("NZoomImg4"),
  e=t.getAttribute("data-NZoomscale")<=0?1:t.getAttribute("data-NZoomscale"),
  s=t.clientWidth,o=t.clientHeight;
  $("#NZoomImg4").replaceWith('<div id="NZoomContainer4">'+t.outerHTML+"</div>");
  
  let i=$("#NZoomContainer4"),n=$("#NZoomImg4");
  i.css("width",s+"px"),i.css("height",o+"px"),i.mousemove(function(t){
      let e=$(this).offset(),i=(t.pageX-e.left)/s*100<=100?(t.pageX-e.left)/s*100:100,c=(t.pageY-e.top)/o*100<=100?(t.pageY-e.top)/o*100:100;
      n.css("transform-origin",i+"% "+c+"%")}),i.mouseenter(function(){
          n.css("cursor","crosshair"),
          n.css("width",s+"px"),
          n.css("height",o+"px"),
          n.css("transition","0.2s"),
          n.css("transform","scale("+e+")")
      }).mouseleave(function(){n.css("transition","0.2s"),n.css("transform","scale(1)")})});


// 5 
$(document).ready(function(){
  let t=document.getElementById("NZoomImg5"),
  e=t.getAttribute("data-NZoomscale")<=0?1:t.getAttribute("data-NZoomscale"),
  s=t.clientWidth,o=t.clientHeight;
  $("#NZoomImg5").replaceWith('<div id="NZoomContainer5">'+t.outerHTML+"</div>");
  
  let i=$("#NZoomContainer5"),n=$("#NZoomImg5");
  i.css("width",s+"px"),i.css("height",o+"px"),i.mousemove(function(t){
      let e=$(this).offset(),i=(t.pageX-e.left)/s*100<=100?(t.pageX-e.left)/s*100:100,c=(t.pageY-e.top)/o*100<=100?(t.pageY-e.top)/o*100:100;
      n.css("transform-origin",i+"% "+c+"%")}),i.mouseenter(function(){
          n.css("cursor","crosshair"),
          n.css("width",s+"px"),
          n.css("height",o+"px"),
          n.css("transition","0.2s"),
          n.css("transform","scale("+e+")")
      }).mouseleave(function(){n.css("transition","0.2s"),n.css("transform","scale(1)")})});



// Xem share

function OpenviewShare() {
  var viewShare = document.getElementById("viewshare");
  viewShare.classList.toggle('active')
}
function CloseviewShare() {
  var viewShare = document.getElementById("viewshare");
  viewShare.classList.toggle('active')
}
