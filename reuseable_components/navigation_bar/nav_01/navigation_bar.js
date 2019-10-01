window.onload = function () {
    let toggle_button = document.getElementById("nav-toggle-button");
    let collapse_list = document.getElementsByClassName("nav-collapse")[0];
    toggle_button.onclick = function () {
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
window.onscroll = function() {
    // make top nav change background color when scroll
    let navbar = document.getElementsByClassName("navigation")[0];
    let sticky = navbar.offsetTop + navbar.clientHeight;

    let navCollapse = document.getElementsByClassName("nav-collapse")[0];
    let navband_image = document.getElementsByClassName("nav-brand-img")[0];

    if (window.pageYOffset > sticky + 120) {
        navband_image.classList.add("shrink");
        navCollapse.children[0].classList.add("rising-up");
        navCollapse.children[1].classList.add("rising-up");
    } else {
        navband_image.classList.remove("shrink");
        navCollapse.children[0].classList.remove("rising-up");
        navCollapse.children[1].classList.remove("rising-up");
    }
};
