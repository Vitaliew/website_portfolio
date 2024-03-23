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

var m = 0;
function show_contacts() {
  var x = document.getElementById("contacts");
  var button_x = document.getElementById("contacts_btn")
  m = m + 1;
  if ( m % 2 == 0) {
      x.classList.toggle('fade');
      button_x.style.color = "white";
  }
  else {
    x.classList.toggle('fade');
    button_x.style.color = "#0B60B0";
  }
};

var i = 0;
function show_panel(clicked_id) {
    var button_x = document.getElementById(clicked_id);
    var x = document.getElementById("projects");
    i = i + 1;
    if (i % 2 == 0 ) {
        x.style.width = "0%";
        button_x.style.color = "white";
        }
    else {
        x.style.width = "35%";
        button_x.style.color = "#0B60B0";
    }
};