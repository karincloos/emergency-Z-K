document.querySelector("#pan").classList.add("panorama");
document.querySelector("#pan").classList.add("stop");

document.querySelector("#pan").addEventListener("mouseover", startPanorama);
document.querySelector("#pan").addEventListener("mouseout", stopPanorama);

function startPanorama() {
  this.classList.remove("stop");
}

function stopPanorama() {
  this.classList.add("stop");
}
