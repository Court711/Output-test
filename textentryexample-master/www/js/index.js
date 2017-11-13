$(document).on("pagecreate","#pageone",function(){
    
  $('#tap1').on("tap", function(){
    
      var rand = random();
      $(this).text(rand);
      
      if(rand){
          //navigator.notification.beep(1);
          navigator.vibrate(2000);

      }
      else{
          //navigator.notification.beep(2);
          navigator.vibrate(2000);

      }
      
      
  });            
});            


function random() {
    return !Math.round(Math.random());
}
