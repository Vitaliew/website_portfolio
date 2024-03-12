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

function show_panel(clicked_id) {
    if (clicked_id === "projects_btn") {
        button_x = document.getElementById(clicked_id);
        button_y = document.getElementById("contributions_btn");
        x = document.getElementById("projects");
        y = document.getElementById("contributions");
    }
    else if (clicked_id === "contributions_btn") {
        button_x = document.getElementById(clicked_id);
        button_y = document.getElementById("projects_btn");
        x = document.getElementById("contributions");
        y = document.getElementById("projects");
    }
    button_y.style.color = "white";
    button_x.style.color = "#0B60B0";
    y.style.width = "0%";
    x.style.width = "25%";
};