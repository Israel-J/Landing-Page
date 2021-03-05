console.log("hihi");

//STOPS VIDEO WHEN MODAL IS CLOSED
$("body").on("hidden.bs.modal", ".modal", function () {
  $("video").trigger("pause");
});

// GOOGLE MAPS

function initMap() {
  // Center and Zoom

  var options = {
    center: { lat: 47.6062, lng: -122.3321 },
    zoom: 11,
  };

  // NEW MAP
  map = new google.maps.Map(document.getElementById("map"), options);

  //MARKER
  const marker = new google.maps.Marker({
      position:{lat: 47.6205, lng: -122.3493},
      map: map
  })
}
