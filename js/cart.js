
//tăng giảm sp cart
//sp1
jQuery(document).ready(function(){
  var quantitiy=0;
  jQuery('.qt-plus1').click(function(e){
      
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt1').val());
      
      // If is not undefined
          
      jQuery('#qt1').val(quantity + 1);

      // Increment
      
  });

  jQuery('.qt-minus1').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt1').val());
      
      // If is not undefined
      
      // Increment
      if(quantity>0){
          jQuery('#qt1').val(quantity - 1);
      }
  });
});
//  Sp2
jQuery(document).ready(function(){
  var quantitiy=0;
  jQuery('.qt-plus2').click(function(e){
      
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt2').val());
      
      // If is not undefined
          
      jQuery('#qt2').val(quantity + 1);

      // Increment
      
  });

  jQuery('.qt-minus2').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt2').val());
      
      // If is not undefined
      
      // Increment
      if(quantity>0){
          jQuery('#qt2').val(quantity - 1);
      }
  });
});
//sp3
jQuery(document).ready(function(){
  var quantitiy=0;
  jQuery('.qt-plus3').click(function(e){
      
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt3').val());
      
      // If is not undefined
          
      jQuery('#qt3').val(quantity + 1);

      // Increment
      
  });

  jQuery('.qt-minus3').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt(jQuery('#qt3').val());
      
      // If is not undefined
      
      // Increment
      if(quantity>0){
          jQuery('#qt3').val(quantity - 1);
      }
  });
});
 

//show new lettermodal
jQuery(window).on('load',function(){
  jQuery('#ShownewsletterModal').modal('show');
});
