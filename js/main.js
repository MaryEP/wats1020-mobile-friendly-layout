
$(document).ready(function(){
  
 var $carousel = $('#carousel-example-generic');

$carousel.on('slid.bs.carousel', function(e) {
  if($(e.relatedTarget).is(':last-child')){
    $carousel.carousel('pause');
  }
});
  
  
  // Adds scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Adds smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // Prevents default anchor click behavior
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({ // animates for smooth scroll
      scrollTop: $(hash).offset().top
    }, 800, function(){ //800 milliseconds to scroll
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });


/////////////////////////////////
//map from leaflet.js:
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
}

var map = L.map('map').setView([19.521611, -155.91887], 16); 
L.control.layers(mapLayers).addTo(map);
drawLayer.addTo(map);

var marker = L.marker([19.521611, -155.91887]).addTo(map);
marker.bindPopup("<b>The Spider Hospital</b><br>Please call for exact location.");

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
 

window.sr = ScrollReveal();
sr.reveal('#patients');
sr.reveal('#research');
sr.reveal('#resources');
  
  });
