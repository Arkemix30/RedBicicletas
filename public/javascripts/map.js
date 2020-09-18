var mymap = L.map("map").setView([12.12804, -86.26485], 13);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18,
}).addTo(mymap);

L.control.scale().addTo(mymap);
L.marker([12.12804, -86.26485], { draggable: true }).addTo(mymap);

// $.ajax({
//   dataType: "json",
//   url:"api/bicicletas",
//   success: function(result){
//     console.log(result);
//     result.bicicletas.forEeach(function(bici){
//       L.marker(bici.ubicacion,{title: bici.id}, { draggable: true }).addTo(mymap);
//     });
//   }
// })