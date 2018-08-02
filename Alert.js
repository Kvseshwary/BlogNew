function myMap() {
  var myCentre=new google.maps.LatLng(26.117000,78.216000);
  var mapCanvas=document.getElementById("googleMap");
  var mapOptions={center:myCentre,zoom:5.4};
  var map=new google.maps.Map(mapCanvas,mapOptions);
  var marker=new google.maps.Marker({position:myCentre});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function(){
	  var infoWindow=new google.maps.InfoWindow({
		  content:"Snehalaya by Gwalior Hospital and Education Charitable Trust"
	  });
	  infoWindow.open(map,marker);
  });
}

