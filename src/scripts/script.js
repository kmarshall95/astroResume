
  /* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("TopNavbar");
  if (x.class === "navbar") {
    x.class += " responsive";
  } else {
    x.class = "navbar";
  }
}