var p = 0;

function setup(){
   noCanvas();
}

function keyPressed(){
   if(keyCode === LEFT_ARROW){
      p--;
      updatePic();
   }
   if(keyCode === RIGHT_ARROW){
      p++;
      updatePic();
   }
}

$(document).ready(function(){
   updatePic();
   $(".up").click(function(){
      p++;
      updatePic();
   });

   $(".down").click(function(){
      p--;
      updatePic();
   });

   $(".leftImage").click(function(){
      p--;
      updatePic();
   });

   $(".rightImage").click(function(){
      p++;
      updatePic();
   });

   $(".menuItem").click(function(){
      var item = $(this).attr("id");
      if(item=="about"){
         $('html, body').animate({
            scrollTop: $("."+item).offset().top
         }, 300);
      }

      if(item=="work"){
         $('html, body').animate({
            scrollTop: $(".galleryContainer").offset().top-100
         }, 300);
      }
   });

   // modal
   $("#modalOpen").click(function(){
      $(".modalBackground").css({"display" : "block"});
   });

   $(".close").click(function(){
      $(".modalBackground").css({"display" : "none"});
   })
   // modal end

   // overlay

   $(".centreImage").hover(function(){
      $(".overlayButton").css({"display": "block"});
   }, function(){
      $(".overlayButton").css({"display": "none"});
   });

   //overlay end
});



function updatePic(){
   if(p>pics.length-1) p=0;
   if(p<0) p=pics.length-1;

   $(".centreImage").html('<img class="imageElement" src="'+pics[p].url+'"><div class="overlayWrapper">\
   <a href="'+pics[p].goToUrl+'" target="_blank"><div class="overlayButton">'+pics[p].goTo+'</div></a></div>');
   $(".text").html("<h2>"+pics[p].title+"</h2>"+pics[p].text);


   var l = p-1;
   if(l<0) l=pics.length-1;

   var r = p+1;
   if(r>pics.length-1) r=0;

   $(".leftImage").html('<img src="'+pics[l].url+'">');
   $(".rightImage").html('<img src="'+pics[r].url+'">');
}
