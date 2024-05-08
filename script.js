const lamp = document.getElementById("lamp");
const switchButton = document.getElementById("switch");
const colorPicker = document.getElementById("colorPicker");

switchButton.addEventListener("click", function () {
  lamp.classList.toggle("lamp-on");
  updateLampColor();
  switchButtonText();
});

colorPicker.addEventListener("input", function () {
  updateLampColor();
});

function updateLampColor() {
  if (lamp.classList.contains("lamp-on")) {
    lamp.style.filter = `drop-shadow(0 0 15px ${colorPicker.value})`;
  } else {
    lamp.style.filter = "none";
  }
}

function switchButtonText() {
  if (switchButton.textContent === "Turn On") {
    switchButton.textContent = "Turn Off";
  } else {
    switchButton.textContent = "Turn On";
  }
}
