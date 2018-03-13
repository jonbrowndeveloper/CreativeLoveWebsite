//Preload images first 
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var images = Array("./images/slideshow/1.jpg",
                    "./images/slideshow/2.jpg",
                    "./images/slideshow/3.jpg",
                    "./images/slideshow/4.jpg",
                    "./images/slideshow/5.jpg",
                    "./images/slideshow/6.jpg",
                    "./images/slideshow/7.jpg",
                    "./images/slideshow/8.jpg",
                    "./images/slideshow/9.jpg",
                    "./images/slideshow/10.jpg",
                    "./images/slideshow/11.jpg",
                    "./images/slideshow/12.jpg");

$([images[0],images[1],images[2],images[3],images[4],images[5],images[6],images[7],images[8],images[9],images[10],images[11],images[12]]).preload();

// Usage:

var currimg = 0;

$(document).ready(function(){
   
    function loadimg(){
        
       $('.cover-container').animate({ opacity: 1 }, 2000,function(){

            //finished animating, minifade out and fade new back in           
            $('.cover-container').animate({ opacity: 0.1 }, 1000,function(){
                
                currimg++;
                
                if(currimg > images.length-1){
                    
                    currimg=0;
                    
                }
                
                var newimage = images[currimg];
            
                //swap out bg src                
                $('.cover-container').css("background-image", "url("+newimage+")"); 
            
                //animate fully back in
                $('.cover-container').animate({ opacity: 1 }, 2000,function(){

                    //set timer for next
                    setTimeout(loadimg,8000);

                });

            });
        
        });

     }
     setTimeout(loadimg,8000);
  
});
