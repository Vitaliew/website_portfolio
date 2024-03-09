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
  var x = document.getElementById("projects");
  var y = document.getElementById("contributions");
  var button_x = document.getElementById("projects_btn")
  var button_y = document.getElementById("contributions_btn")
  if ( i < 1 ) {
    i = i + 1;
    y.style.zIndex = 0;
    x.style.zIndex = 1;
    x.classList.toggle('fade');
    button_x.disabled = true;
    button_x.style.color = "#0B60B0";
    button_y.style.color = "white";
  }
  else {
      y.style.zIndex = 0;
      x.style.zIndex = 1;
      x.classList.toggle('fade');
      y.classList.toggle('fade');
      button_y.disabled = false;
      button_x.disabled = true;
      button_x.style.color = "#0B60B0";
      button_y.style.color = "white";
  };
};

function show_contributions() {
  var x = document.getElementById("contributions");
  var y = document.getElementById("projects");
  var button_x = document.getElementById("contributions_btn")
  var button_y = document.getElementById("projects_btn")
  if ( i < 1 ) {
    i = i + 1;
    y.style.zIndex = 0;
    x.style.zIndex = 1;
    x.classList.toggle('fade');
    button_x.disabled = true;
    button_x.style.color = "#0B60B0";
    button_y.style.color = "white";
  }
  else {
      y.style.zIndex = 0;
      x.style.zIndex = 1;
      x.classList.toggle('fade');
      y.classList.toggle('fade');
      button_y.disabled = false;
      button_x.disabled = true;
      button_x.style.color = "#0B60B0";
      button_y.style.color = "white";
  };
};