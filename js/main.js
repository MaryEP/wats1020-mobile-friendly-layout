
$(document).ready(function(){
  
 var $carousel = $('#carousel-example-generic');

$carousel.on('slid.bs.carousel', function(e) {
  if($(e.relatedTarget).is(':last-child')){
    $carousel.carousel('pause');
  }
});
  
  
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({ // animate for smooth scroll
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

var map = L.map('map-container').setView([46.852, -121.760], 11); //13
L.control.layers(mapLayers).addTo(map);
satLayer.addTo(map);
//center: [coordinates or in .set view]
//minZoom: 4;
//zoom: 2

var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>The top of Mt. Rainier!</b><br> 14,411 feet");

var marker2 = L.marker([46.849068, -121.712208]).addTo(map);
marker2.bindPopup("<b>Little Tahoma Peak</b><br> 11,138 feet");

var circle1 = L.circle([46.785486,-121.733322], 500, {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5
}).addTo(map);
  circle1.bindPopup("Paradise");

var circle2 = L.circle([46.83031, -121.726885], 500, {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5

});
});

