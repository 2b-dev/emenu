// (document.querySelectorAll('img.svg').forEach(function(img){
//     var imgID = img.id;
//     var imgClass = img.className;
//     var imgURL = img.src;
//     var colorfill = img.data("color");

//     fetch(imgURL).then(function(response) {
//         return response.text();
//     }).then(function(text){

//         var parser = new DOMParser();
//         var xmlDoc = parser.parseFromString(text, "text/xml");

//         var svg = xmlDoc.getElementsByTagName('svg')[0];

//         if(typeof imgID !== 'undefined') {
//             svg.setAttribute('id', imgID);
//         }
//         if(typeof imgClass !== 'undefined') {
//             svg.setAttribute('class', imgClass+' replaced-svg');

//         }

//         svg.removeAttribute('xmlns:a');

//         if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
//             svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
//         }

//         img.parentNode.replaceChild(svg, img);

//     });

// }))();

$("img.svg").each(function () {
  var $e = $(this);
  var imgURL = $e.prop("src");
  var colorfill = $(this).data("color");

  $.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = $(data).find("svg");

    // change the color
    $svg.find("path").attr("fill", colorfill);

    $e.prop(
      "src",
      "data:image/svg+xml;base64," + window.btoa($svg.prop("outerHTML"))
    );
  });
});


