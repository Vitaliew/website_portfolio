function show_about() {
  var x = document.getElementById("about_text");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
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
    x.classList.toggle('fade');
    button_x.disabled = true;
  }
  else {
      x.classList.toggle('fade');
      y.classList.toggle('fade');
      button_y.disabled = false;
      button_x.disabled = true;
  };
};

function show_contributions() {
  var x = document.getElementById("contributions");
  var y = document.getElementById("projects");
  var button_x = document.getElementById("contributions_btn")
  var button_y = document.getElementById("projects_btn")
  if ( i < 1 ) {
    i = i + 1;
    x.classList.toggle('fade');
    button_x.disabled = true;
  }
  else {
      x.classList.toggle('fade');
      y.classList.toggle('fade');
      button_y.disabled = false;
      button_x.disabled = true;
  };
};