$(".label-switch-lang").each(function () {
  var c = $(this).data("color");
  $(this).find(".box-text-lang").css("color", c);
  $(this)
    .find(".slider")
    .append(`<style>.slider:before{background-color:` + c + `;}</style>`);
});

$(".side-menu").each(function () {
  var c = $(this).data("color");
  $(this).find(".ul-side-menu").css("background-color", c);
});

$(".carousel.slide").each(function () {
  var c = $(this).data("color");
  $(this).prepend(
      `<style>#carousel-emenu.carousel .carousel-indicators li.active{background-color:` +
        c +
        `;}</style>`
    );
});
