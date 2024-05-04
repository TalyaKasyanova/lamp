document.getElementById("lamp").addEventListener("click", function () {
  const lamp = document.getElementById("lamp");
  const color = document.getElementById("colorPicker").value;
  lamp.style.fill = color;
});
