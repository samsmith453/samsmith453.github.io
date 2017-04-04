var p = 0;

// function keyPressed(){
//    if(keyCode === LEFT_ARROW){
//       p--;
//       updatePic();
//    }
//    if(keyCode === RIGHT_ARROW){
//       p++;
//       updatePic();
//    }
// }

// $(document).on("pagecreate", function(){
//    $(".centreImage").on("swipeleft", function(){
//       p++;
//       updatePic();
//    });
//
//    $(".centreImage").on("swiperight", function(){
//       p--;
//       updatePic();
//    });
//
//    $(".up").tap(function(){
//       p++;
//       updatePic();
//    });
//
//    $(".menuItem").tap(function(){
//       var item = $(this).attr("id");
//       if(item=="about"){
//          $('html, body').animate({
//             scrollTop: $("."+item).offset().top
//          }, 600);
//       }
//
//       if(item=="work"){
//          $('html, body').animate({
//             scrollTop: $(".galleryContainer").offset().top-100
//          }, 300);
//       }
//    });
// });

$(document).ready(function(){



   $(window).scroll(function(){
      autoplayToggle();
   });


   implementOwl();
   $(window).resize(function(){
      implementOwl();
      updateText(0);
   })

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
         }, 600);
      }

      if(item=="work"){
         $('html, body').animate({
            scrollTop: 0
         }, 600);
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

   $("html").keydown(function(e){
      if(e.which==37){
         p--;
         updatePic();
      }
      if(e.which==39){
         p++;
         updatePic();
      }
   })

});

function draggedIt(event){
   var index = event.item.index;

   // index begins at 3 for some reason
   // change this when adding future items
   if(index==8) index = 3;
   index-=3;
   updateText(index);
}

function updatePic(){
   if(p>pics.length-1) p=0;
   if(p<0) p=pics.length-1;

   $(".centreImage").html('<img class="imageElement" src="'+pics[p].url+'"><div class="overlayWrapper">\
   <a href="'+pics[p].goToUrl+'" target="_blank"><div class="overlayButton">'+pics[p].goTo+'</div></a></div>');
   updateText(p);


   var l = p-1;
   if(l<0) l=pics.length-1;

   var r = p+1;
   if(r>pics.length-1) r=0;

   $(".leftImage").html('<img src="'+pics[l].url+'">');
   $(".rightImage").html('<img src="'+pics[r].url+'">');
}

function updateText(n){
   $(".text").html("<h2>"+pics[n].title+"</h2>"+pics[n].text);
   $(".mobileLinkContainer").html('<h3>Swipe to view other projects!</h3><a href="'+pics[n].goToUrl+'" target="_blank"><div id="yes" class="mobileLinkButton">'+pics[n].goTo+'</div></a>')
}

function implementOwl(){

   var w = $(window).width();
   if(w<450){
      $(".owl-carousel").owlCarousel({
         loop: true,
         autoplay: true,
         items: 1,
         onTranslated: draggedIt
      });
      $(".mobileLinkContainer").css({"display":"block"});
   }

   if(w>=450){
      $(".owl-carousel").trigger("destroy.owl.carousel");
      $(".mobileLinkContainer").css({"display":"none"});
   }
}

function autoplayToggle(){
   var textToTop = $(".text").offset().top;
   var scrollToTop = $(window).scrollTop();
   if(scrollToTop>=textToTop){
      console.log("autoplay off")
      // turn autoplay off
      $(".owl-carousel").trigger("stop.owl.autoplay");
   }

   if(scrollToTop<textToTop){
      console.log("autoplay on")
      // turn autoplay on
      $(".owl-carousel").trigger("play.owl.autoplay");
   }
}
