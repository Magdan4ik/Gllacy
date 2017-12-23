// SLIDER

$(document).ready(function(){

    $("#bg1").click(function(){
        $("body").addClass("bg-1");
        $("body").removeClass("bg-2 bg-3");
        $("#h-1").show();
        $("#h-2").hide();
        $("#h-3").hide();
        $("#bg2").removeClass("active-slide");    
        $("#bg3").removeClass("active-slide");
        $("#bg1").addClass("active-slide");    
    });

    $("#bg2").click(function(){
        $("body").addClass("bg-2");
        $("body").removeClass("bg-1 bg-3");
        $("#h-2").show();
        $("#h-1").hide();
        $("#h-3").hide();
        $("#bg1").removeClass("active-slide");    
        $("#bg3").removeClass("active-slide");
        $("#bg2").addClass("active-slide");    
    });

    $("#bg3").click(function(){
        $("body").addClass("bg-3");
        $("body").removeClass("bg-1 bg-2");
        $("#h-3").show();
        $("#h-1").hide();
        $("#h-2").hide();
        $("#bg1").removeClass("active-slide"); 
        $("#bg2").removeClass("active-slide"); 
        $("#bg3").addClass("active-slide");  
    });


//Preload images
  pic = new Image();
  pic2 = new Image();
  pic3 = new Image();
    pic.src="/img/ice-cream-1.png";
    pic2.src="/img/ice-cream-2.png";
    pic3.src="/img/ice-cream-3.png";
});


// Google MAP
  function initMap() {

    var uluru = {lat: 59.9390145, lng: 30.3225147};
    var MyMap = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 15,
      center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: MyMap,
      animation: google.maps.Animation.BOUNCE,
      icon: { url: 'img/map-marker-80x140.png'
      }
    });

  }