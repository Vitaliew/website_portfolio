function show_about() {
  var x = document.getElementById("about_text");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
function show_projects() {
  var x = document.getElementById("projects");
  var y = document.getElementById("contributions");
  if (x.style.display === "none" || x.style.display === "") {
    y.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function show_contributions() {
  var x = document.getElementById("contributions");
  var y = document.getElementById("projects");
  if (x.style.display === "none" || x.style.display === "") {
    y.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}