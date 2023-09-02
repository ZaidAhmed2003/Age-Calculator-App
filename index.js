// Get DOM elements
const dayInput = document.querySelector(".input-day");
const monthInput = document.querySelector(".input-month");
const yearInput = document.querySelector(".input-year");
const yearsTotal = document.querySelector(".years-total .dash");
const monthsTotal = document.querySelector(".months-total .dash");
const daysTotal = document.querySelector(".days-total .dash");
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const submitButton = document.querySelector(".btn");

// let date = new Date();

function calculateAge() {
  const birthDay = parseFloat(dayInput.value);
  const birthMonth = parseInt(monthInput.value) - 1; // Month is zero-indexed
  const birthYear = parseInt(yearInput.value);

  let currentDate = new Date();
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  let hasError = false;

  if (birthDate > currentDate) {
    dayError.textContent = "Invalid birthdate";
    monthError.textContent = "";
    yearError.textContent = "";
    hasError = true;
  } else {
    dayError.textContent = "";
  }
  if (birthMonth < 0 || birthMonth > 11) {
    monthError.textContent = "Invalid birth month";
    hasError = true;
  } else {
    monthError.textContent = "";
  }

  const daysInMonth = new Date(birthYear, birthMonth + 1, 0).getDate();
  if (birthDay < 1 || birthDay > daysInMonth) {
    dayError.textContent = "Invalid day for selected month";
    hasError = true;
  }

  if (!hasError) {
    const timeDiff = currentDate - birthDate;

    const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const monthsDiff = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );
    const daysDiff = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );

    yearsTotal.textContent = yearsDiff;
    monthsTotal.textContent = monthsDiff;
    daysTotal.textContent = daysDiff;
  }
}
submitButton.addEventListener("click", calculateAge);
