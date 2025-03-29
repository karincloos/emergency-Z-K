document.addEventListener("DOMContentLoaded", () => {
  const todayNoRadio = document.getElementById("today-no");
  const todayYesRadio = document.getElementById("today-yes");
  const additionalFields = document.getElementById("additional-date-fields");

  todayNoRadio.addEventListener("change", () => {
    console.log("No selected");
    if (todayNoRadio.checked) {
      additionalFields.style.display = "block";
    }
  });

  todayYesRadio.addEventListener("change", () => {
    console.log("Yes selected");
    if (todayYesRadio.checked) {
      additionalFields.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.getElementById("farlighed");
  const rangeValue = document.getElementById("range-value");

  // Update the displayed value when the range slider changes
  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
  });
});
