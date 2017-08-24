$(document).ready(function(){

    //$('#compContainer').animate({width:-100},5000);

    $('img.updown').addClass('show').removeClass('updown');
   
 $('.show').css({top:-320});
    function loop() {
    
     $('.show')
     .animate({top:-10},5000)
     .animate({top:-320},6000, loop); // callback
  


    
  }
    loop();
       
    
   
    
});