const correctPassword = "Liga1234";
const wpisaneHaslo = prompt("Wpisz swoje hasło:");

if (wpisaneHaslo === correctPassword) {
  alert("Dostęp przyznany!");
} else if (wpisaneHaslo.length < 6) {
  alert("Hasło musi mieć co najmniej 6 znaków.");
} else {
  alert("Dostęp wzbroniony!");
}
