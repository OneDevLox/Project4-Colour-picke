const dropdown = document.getElementById("option");
const angle = document.getElementById("angle");

const colorGroups = document.querySelectorAll(".color-group");

const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const htmlText = document.getElementById("html-txt")

let color1 = ""
let color2 = ""

let mode = "solid"
let angleGrad = ""

dropdown.addEventListener("change", () => {
    const modes = dropdown.value.toLowerCase();
    mode = modes
    if (modes === "linear") {
        colorGroups[1].classList.add("active");   // show Color 2
    } else {
        colorGroups[1].classList.remove("active"); // hide Color 2
    }
});
angle.addEventListener("change", () => {
    const angleVal = angle.value.toLowerCase();
    angleGrad = angleVal
    updateBackground()
});

inputColor1.addEventListener("change", () => {
    color1 = inputColor1.value
    htmlText.innerHTML = `${color1};`
    updateBackground()
})

inputColor2.addEventListener("change", () => {
    color2 = inputColor2.value
    htmlText.innerHTML = `linear-gradient(${color1}, ${color2});`
    updateBackground()
})


function updateBackground() {
    if (mode === "solid") {
        document.documentElement.style.setProperty("--primary-colour", color1);
        htmlText.innerHTML = `${color1};`;
    } else {
        const gradient = `linear-gradient(${angleGrad},${color1}, ${color2})`;
        document.documentElement.style.setProperty("--primary-colour", gradient);
        htmlText.innerHTML = gradient + ";";
    }
}

