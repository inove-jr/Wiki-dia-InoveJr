let myButton = document.querySelector(".btn-usuario");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor, digite o seu nome");
  localStorage.setItem("name", myName);
  myHeading.textContent = `${myName} - Perfil de Membro da InoveJr`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName} - Perfil de Membro da InoveJr`;
}

myButton.onclick = () => {
  setUserName();
};