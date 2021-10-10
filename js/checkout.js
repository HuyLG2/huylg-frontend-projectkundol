//  ***********************************************************
// Checkout


$(".dashboard-tabs .tab-item").click(function () {
    var idata= $(this).attr('idata');
    $(".dashboard-tabs-content .tab-check").removeClass('active');
    $(".tab-check-" + idata).addClass('active');
  });
  
  
  // Border checked Dashboard
  checkDashboard = document.querySelector(".dashboard-tabs").querySelectorAll(".tab-item");
  console.log(checkDashboard);
  
  checkDashboard.forEach(element => {
    element.addEventListener("click",function() {
      checkDashboard.forEach(checkDashboard=>checkDashboard.classList.remove("active"))
      this.classList.add("active");
    })
  })
  
  // Active VIEW
  function viewDashboard() {
    var viewDashboard = document.getElementById("viewDB");
    viewDashboard.classList.toggle('active')
  }
  
  function viewDashboard2() {
    var viewDashboard2 = document.getElementById("viewDB2");
    viewDashboard2.classList.toggle('active')
  }
  
  
  
  //show new lettermodal
  jQuery(window).on('load',function(){
    jQuery('#ShownewsletterModal').modal('show');
  });