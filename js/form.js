document.addEventListener("DOMContentLoaded", () => {
  resetForm(); // Reset the form on page load
  startEventlistnere(); // Initialize event listeners
});

// Function to reset the form
function resetForm() {
  if (form) {
    form.reset(); // Reset all form fields to their default values
    dateField.style.display = "none"; // Ensure the date field is hidden by default
  }
}
// Select the form element
const form = document.querySelector("form");

// opretter constanter for datofeltet
const todayNoRadio = document.querySelector("#today-no");
const todayYesRadio = document.querySelector("#today-yes");
const dateField = document.querySelector("#date-field");
const todayField = document.querySelector("#today-field");

// opretter constanter for farlighed (range feltet)
const rangeInput = document.getElementById("farlighed");
const rangeValue = document.getElementById("range-value");

//opretter constanter for select feltet og option elementer
const select = document.querySelector("#select");
const options = document.querySelectorAll("option");

// funktion der tilføjer eventlistnere til de forskellige forminput
function startEventlistnere() {
  // tilføjer eventlistnere for radiobuttons og range input
  todayNoRadio.addEventListener("change", showHideDateField);
  todayYesRadio.addEventListener("change", showHideDateField);

  // tilføjer eventlistner for range input feltet
  rangeInput.addEventListener("input", displayRangeValue);
}

// funktion der viser eller skjuler datofeltet
function showHideDateField() {
  if (this === todayNoRadio) {
    dateField.style.display = "block";
  } else if (this === todayYesRadio) {
    dateField.style.display = "none";
  }
}

function displayRangeValue() {
  rangeValue.textContent = rangeInput.value; // Update the text content with the current range value
}
