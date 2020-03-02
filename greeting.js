const formContainer = document.querySelector(".js-form-container");
const formLabel = formContainer.querySelector(".js-form-label");
const formInput = formContainer.querySelector(".js-form-input");
const greetingContainer = document.querySelector(".js-greeting-container");
const greeting = greetingContainer.querySelector(".js-greeting");
const showingOn = "showing";
const nameLs = "name-local-storage";

function formShowing() {
  formContainer.classList.add(showingOn);
}

function greetingShowing() {
  formContainer.classList.remove(showingOn);
  greetingContainer.classList.add(showingOn);
}

function loadName() {
  const name = localStorage.getItem(nameLs);
  if (name === null) {
    formShowing();
  } else {
    greetingShowing();
    greeting.innerHTML = `<span>Welcome~ 🤗🎉</span><span>${name}</span>`;
  }
}

function saveName(name) {
  localStorage.setItem(nameLs, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const nameSubmit = formInput.value;
  saveName(nameSubmit);
  loadName();
}

function init() {
  loadName();
  formContainer.addEventListener("submit", handleSubmit);
}

init();
