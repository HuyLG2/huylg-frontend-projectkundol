

//show new lettermodal
// jQuery(window).on('load',function(){
//   jQuery('#ShownewsletterModal').modal('show');
// });
// active shop_3col
$(document).on('click','.popular-tags li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
// active tb-layout bnt-layout right shop_3col 
$(document).on('click','.tb-layout a',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
// active color shop_3col
$(document).on('click','.color-option li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
// active size shop_3col
$(document).on('click','.size-option li',function(){
  $(this).addClass('active').siblings().removeClass('active')
})

// show modal

jQuery(window).on('load',function(){
  jQuery('#ShownewsletterModal').modal('show');
});



