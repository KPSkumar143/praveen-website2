const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const agreeCheckbox = document.getElementById("agree");
const submitBtn = document.getElementById("submitBtn");
const gear = document.getElementById("gear");
const hand = document.getElementById("hand");
const form = document.getElementById("loginForm");

nameInput.addEventListener("input", () => {
  gear.style.transform = "rotate(360deg)";
  setTimeout(() => {
    gear.style.transform = "rotate(0deg)";
  }, 1000);

  hand.style.transform = "translateY(30px)";
  setTimeout(() => {
    hand.style.transform = "translateY(0)";
  }, 400);

  agreeCheckbox.checked = true;
  submitBtn.disabled = false;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  alert(`Logged in as ${name} (${email})`);
});
