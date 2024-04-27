document.getElementById("lamp").addEventListener("click", function () {
  const lamp = document.getElementById("lamp");
  if (lamp.src.match("/images/lamp_off.png")) {
    lamp.src = "/images/lamp_on.png";
  } else {
    lamp.src = "/images/lamp_off.png";
  }
});
