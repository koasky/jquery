jQuery("h1").click(function() {
  alert("This is a header.");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});
var yourName = prompt("What's yor name?")
var homeTown = function(StreetName) {
  var firstLetter = StreetName.charAt(0).toUpperCase()
  var lastLetter = StreetName.charAt(StreetName.length - 1).toUpperCase()
  return firstLetter + lastLetter
}
var swap = function(StreetName) {
  var firstLetter = StreetName.charAt(0)
  var lastLetter = StreetName.charAt(StreetName.length - 1)
  return lastLetter + firstLetter
}
var add = function(lunch) {
  var javaMe = swap(homeTown(lunch))
  var scriptMe = lunch + javaMe
  return scriptMe
}
var rant = function(Online) {
  var length = Online.length
  var count =  Math.ceil(length/2)
  var result = Online.charAt(count)
  var final = result + add((Online))
  return final
}
