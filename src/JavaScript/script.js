function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function moreFunction() {
  document.getElementById("myDropdown-more").classList.toggle("show-flex");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-more')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-more");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-flex')) {
        openDropdown.classList.remove('show-flex');
      }
    }
  }
}
