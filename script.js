//STOPS VIDEO WHEN MODAL IS CLOSED
$("body").on("hidden.bs.modal", ".modal", function () {
  $("video").trigger("pause");
});

// GOOGLE MAPS
// function initMap() {
// Center and Zoom

// var options = {
//   center: { lat: 47.6062, lng: -122.3321 },
//   zoom: 13,
// };

// NEW MAP
// map = new google.maps.Map(document.getElementById("map"), options);

//MARKER
//   const marker = new google.maps.Marker({
//     position: { lat: 47.6205, lng: -122.3493 },
//     map: map,
//   });
// }

//SMOOTH SCROLLING
$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// Changes NAVBAR COLOR WHEN SCROLLING DOWN
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 150) {
    $(".fixed-top").css("background", "transparent");
  } else {
    $(".fixed-top").css("background", "black");
  }
});
