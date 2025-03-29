document.addEventListener("DOMContentLoaded", startEventlistnere);

// opretter constanter for datofeltet
const todayNoRadio = document.querySelector("#today-no");
const todayYesRadio = document.querySelector("#today-yes");
const dateField = document.querySelector("#date-field");

// opretter constanter for farlighed (range feltet)
const rangeInput = document.getElementById("farlighed");
const rangeValue = document.getElementById("range-value");

function startEventlistnere() {
  // tilføjer eventlistnere for radiobuttons og range input
  todayNoRadio.addEventListener("change", showDateField);
  todayYesRadio.addEventListener("change", hideDateField);

  // tilføjer eventlistner for range input feltet
  rangeInput.addEventListener("input", displayRangeValue);
}

// funktion der viser datofeltet
function showDateField() {
  dateField.style.display = "block";
}

// funktion der skjuler datofeltet
function hideDateField() {
  dateField.style.display = "none";
}

// funktion der viser værdien af range input feltet
function displayRangeValue() {
  rangeValue.textContent = rangeInput.value;
}
