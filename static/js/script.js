var n = 0;
function show_about() {
  var x = document.getElementById("about");
  var button_x = document.getElementById("about_btn")
  n = n + 1;
  if ( n % 2 == 0) {
      x.classList.toggle('fade');
      button_x.style.color = "white";
  }
  else {
    x.classList.toggle('fade');
    button_x.style.color = "#0B60B0";
  }
};

var i = 0;
function show_projects() {
    x = document.getElementById("projects");
    y = document.getElementById("contributions");
    button_x = document.getElementById("projects_btn");
    button_y = document.getElementById("contributions_btn");
    button_x.style.color = "#0B60B0";
    button_y.style.color = "white";
    y.style.width = "0%";
    x.style.width = "25%";
};

function show_contributions() {
    x = document.getElementById("contributions");
    y = document.getElementById("projects");
    button_x = document.getElementById("contributions_btn");
    button_y = document.getElementById("projects_btn");
    button_x.style.color = "#0B60B0";
    button_y.style.color = "white";
    y.style.width = "0%";
    x.style.width = "25%";
};