const changeThemeButton = document.getElementById("change-theme-button");

const body = document.querySelector("body");

const imageChangeThemeButton = document.querySelector(".image-button")

changeThemeButton.addEventListener("click", () => {
    const darkModeEnabled = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeEnabled) {
        imageChangeThemeButton.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imageChangeThemeButton.setAttribute("src", "./src/imagens/moon.png");
    };
})