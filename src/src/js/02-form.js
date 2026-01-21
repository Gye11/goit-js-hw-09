import throttle from "lodash.throttle";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");
  const STORAGE_KEY = "feedback-form-state";

  if (!form) return;

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  for (const [name, value] of Object.entries(savedData)) {
    if (form.elements[name]) {
      form.elements[name].value = value;
    }
  }

  form.addEventListener(
    "input",
    throttle((event) => {
      savedData[event.target.name] = event.target.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    }, 500)
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(savedData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  });
});
