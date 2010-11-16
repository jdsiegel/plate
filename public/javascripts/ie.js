$(document).ready(function() {
  $(".links ul:first-child, nav ul > li:first-child").addClass("first");
  $(".links ul:last-child, nav ul > li:last-child").addClass("last");
  $("nav ul > li:not(.clickdown)").addClass("dropdown");
});
