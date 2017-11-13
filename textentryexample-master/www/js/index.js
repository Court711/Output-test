$(document).on("pagecreate","#pageone",function(){
    
  $('#tap1').on("tap", function(){
    
      var rand = random();
      $(this).text(rand);
      
      if(rand){
          navigator.notification.beep(1); //beep once
      }
      else{
          navigator.notification.beep(2); //beep twice
      }
      
      
  });            
});            


function random() {
    return !Math.round(Math.random());
}
