/**
 * `setUpThemeToggle()` adds an event listener to the theme toggle button that toggles the `dark-theme`
 * class on the `<html>` element
 */
function setUpThemeToggle() {

    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("change", () => {
        document.documentElement.classList.toggle("dark-theme");
    });


    const menuToggleLeft = document.getElementById("btn_menu_left")
    menuToggleLeft.addEventListener("click", () => {
        document.documentElement.classList.toggle("show_menu_left")
    })


}

window.onload = setUpThemeToggle();