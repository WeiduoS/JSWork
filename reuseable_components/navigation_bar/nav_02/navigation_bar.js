window.onload = function() {
  let toggle_button = document.getElementById("nav-toggle-button");
  let collapse_list = document.getElementsByClassName("nav-list")[0];
  toggle_button.onclick = function() {
    if (toggle_button.classList.contains("active")) {
      toggle_button.classList.remove("active");
    } else {
      toggle_button.classList.add("active");
    }
    if (collapse_list.classList.contains("collapse")) {
      collapse_list.classList.remove("collapse");
    } else {
      collapse_list.classList.add("collapse");
    }
  };
};
