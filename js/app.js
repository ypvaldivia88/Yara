// Regular map
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
      $("#brand-logo").fadeOut();
    } else {
      $("#brand-logo").fadeIn();
      $(".navbar").removeClass("active");
    }
  });
});

$(function () {
  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");

    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });
});

function regular_map() {
  var var_location = new google.maps.LatLng(40.725118, -73.997699);

  var var_mapoptions = {
    center: var_location,
    zoom: 14,
  };

  var var_map = new google.maps.Map(
    document.getElementById("map-container"),
    var_mapoptions
  );

  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title: "New York",
  });
}

// Initialize maps
google.maps.event.addDomListener(window, "load", regular_map);

// Carousel options

$(".carousel").carousel({
  interval: 3000,
});
