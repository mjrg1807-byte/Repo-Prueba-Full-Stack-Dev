/*--VARIABLES--*/
const nombreIngresado = document.getElementById("inputNombre");
const edadIngresada = document.getElementById("inputEdad");
const LocalStorageBtn = document.getElementById("btnLocalStorage");
const SessionStorageBtn = document.getElementById("btnSessionStorage");

/*--FUNCIONES--*/

function guardarEnLocalStorage() {
    localStorage.setItem("nombre", nombreIngresado.value);
    localStorage.setItem("edad", edadIngresada.value);
    alert("Datos guardados en Local Storage");
}

function guardarEnSessionStorage() {
    sessionStorage.setItem("nombre", nombreIngresado.value);
    sessionStorage.setItem("edad", edadIngresada.value);
    alert("Datos guardados en Session Storage");
}

/*--EVENTOS--*/
LocalStorageBtn.addEventListener("click", guardarEnLocalStorage);
SessionStorageBtn.addEventListener("click", guardarEnSessionStorage);