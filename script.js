$(document).ready(function () {
  $(window).scroll(function () {
  if ($(window).scrollTop() >= 666) {
  $('.navbar').css('background','#000');
  $('#logo').css('opacity', '1');
  } else {
  $('#logo').css('opacity', '0');
  $('.navbar').css('background','transparent');
  }
  });

});


// var nav = document.getElementById("navbar");
//
// window.addEventListener("scroll", function() {
//   if (window.scrollTop() >= 50) {
//     nav.style.background = "transparent";
//   }
//   else {
//     nav.style.background = "#000";
//   }
// });



// FILTER MENU FUNCTIONS

var filterLogos = document.getElementsByClassName("folio_logo");
var filterPosters = document.getElementsByClassName("folio_poster");
var filterOther = document.getElementsByClassName("folio_other");
var logoText = document.getElementById("folioLogos");
var postersText = document.getElementById("folioPosters");
var otherText = document.getElementById("folioOther");

function filterMenuLogos() {
  if (logoText.innerHTML == "Logos") {
for (var h=0; h < filterLogos.length; h++) {
  filterLogos[h].style.display = "block";
};
for (var i=0; i < filterPosters.length; i++) {
  filterPosters[i].style.display = "none";
};
for (var j=0; j < filterOther.length; j++) {
  filterOther[j].style.display = "none";
};
logoText.innerHTML = "All";
postersText.innerHTML = "Posters";
otherText.innerHTML = "Other Projects";
}
else {
  for (var k=0; k < filterPosters.length; k++) {
    filterPosters[k].style.display = "block";
  };
  for (var m=0; m < filterOther.length; m++) {
    filterOther[m].style.display = "block";
  };
  logoText.innerHTML = "Logos";
}
};

function filterMenuPosters() {
  if (postersText.innerHTML == "Posters") {
for (var h=0; h < filterLogos.length; h++) {
  filterLogos[h].style.display = "none";
};
for (var i=0; i < filterPosters.length; i++) {
  filterPosters[i].style.display = "block";
};
for (var j=0; j < filterOther.length; j++) {
  filterOther[j].style.display = "none";
};
logoText.innerHTML = "Logos";
postersText.innerHTML = "All";
otherText.innerHTML = "Other Projects";
}
else {
  for (var k=0; k < filterLogos.length; k++) {
    filterLogos[k].style.display = "block";
  };
  for (var m=0; m < filterOther.length; m++) {
    filterOther[m].style.display = "block";
  };
  postersText.innerHTML = "Posters";
}
};

function filterMenuOther() {
  if (otherText.innerHTML == "Other Projects") {
for (var h=0; h < filterLogos.length; h++) {
  filterLogos[h].style.display = "none";
};
for (var i=0; i < filterPosters.length; i++) {
  filterPosters[i].style.display = "none";
};
for (var j=0; j < filterOther.length; j++) {
  filterOther[j].style.display = "block";
};
logoText.innerHTML = "Logos";
postersText.innerHTML = "Posters";
otherText.innerHTML = "All";
}
else {
  for (var k=0; k < filterLogos.length; k++) {
    filterLogos[k].style.display = "block";
  };
  for (var m=0; m < filterPosters.length; m++) {
    filterPosters[m].style.display = "block";
  };
  otherText.innerHTML = "Other Projects";
}
};
