// Submit form
const forms = document.querySelectorAll(".form");
const url = "../php/mail.php";

forms.forEach((form) => {
  form.addEventListener("submit", handleSubmit);
});

async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // send a request by fetch or axios
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  showSuccessMessage(form);

  const result = await response.json();
}

function showSuccessMessage(form) {
  const success = form.querySelector(".form__success");
  const submit = form.querySelector(".form__submit");
  const inputs = form.querySelectorAll(".form__input");

  success.classList.add("form__success--visible");
  submit.disabled = true;

  setTimeout(() => {
    success.classList.remove("form__success--visible");
    submit.disabled = false;
    inputs.forEach((input) => (input.value = ""));
  }, 3000);
}

// Validate
const inputs = [...document.getElementsByTagName("INPUT")];
const errorClassName = "form__input--error";

inputs.forEach((input) => {
  input.addEventListener("blur", handleInputBlur);
});

function handleInputBlur(e) {
  const input = e.target;
  const validity = input.validity;

  if (validity.valueMissing) {
    input.classList.add(errorClassName);
    return;
  }

  if (validity.tooShort) {
    input.classList.add(errorClassName);
    return;
  }

  if (validity.patternMismatch) {
    input.classList.add(errorClassName);
    return;
  }

  if (validity.valid) {
    input.classList.remove(errorClassName);
  }
}

// Mask
const phoneInputs = [...document.querySelectorAll("input[type='tel']")];
const maskOptions = {
  mask: "+{38\\0} (00) 000-00-00",
};

phoneInputs.forEach((input) => {
  let mask = IMask(input, maskOptions);
});
