window.onload = function () {
    let toggle_button = document.getElementById("nav-toggle-button");
    let collapse_list = document.getElementsByClassName("nav-collapse")[0];
    toggle_button.onclick = function () {
        // if(collapse_list.style.display !== "block") {
        //     collapse_list.style.display = "block";
        // }else{
        //     collapse_list.style.display = "none";
        // }
        if(toggle_button.classList.contains("active")) {
            toggle_button.classList.remove("active");
        }else{
            toggle_button.classList.add("active");
        }
        if(collapse_list.classList.contains("show")) {
            collapse_list.classList.remove("show");
        }else {
            collapse_list.classList.add("show");
        }
    }
};