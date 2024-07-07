let box = document.querySelector("div");
let borderRadiusInput = document.querySelector("#borderRadiusInput");
let backgroundColorInput = document.querySelector("#backgroundColorInput");
let textColorInput = document.querySelector("#textColorInput");
let fontSizeInput = document.querySelector("#fontSizeInput");
let marginInput = document.querySelector("#marginInput");
let paddingInput = document.querySelector("#paddingInput");
let widthInput = document.querySelector("#widthInput");
let heightInput = document.querySelector("#heightInput");

widthInput.addEventListener("input", () => {
    box.style.width = widthInput.value;
});

heightInput.addEventListener("input", () => {
    box.style.height = heightInput.value;
});

paddingInput.addEventListener("input", () => {
    box.style.padding = paddingInput.value;
});

marginInput.addEventListener("input", () => {
    box.style.margin = marginInput.value;
});


fontSizeInput.addEventListener("input", () => {
    box.style.fontSize = fontSizeInput.value;
});


textColorInput.addEventListener("input", () => {
    box.style.color = textColorInput.value;
});


borderRadiusInput.addEventListener("input", () => {
    box.style.borderRadius = borderRadiusInput.value;
});

backgroundColorInput.addEventListener("input", () => {
    box.style.backgroundColor = backgroundColorInput.value;
});
