//usamos variables para referenciar nuestro elementos que vamos a manipular
const saveBtn  = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const output   = document.getElementById('output');

// hacermos la persistencia de los elementos
window.addEventListener('DOMContentLoaded', displayData);

// con este evento buscamos agregar cada elemento y poder contar con las interaciones
saveBtn.addEventListener('click', () => {

  // obtenemos los valores del form
  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');

  const username = usernameInput.value.trim();
  const age = parseInt(ageInput.value, 10);

  //hacemos las validaciones y condiciones que deberian de cumplir
  if (!username || isNaN(age)) {
    alert('Todos los datos son requeridos, por favor llenar todos los campos!');
    console.error('Todos los datos son requeridos, por favor llenar todos los campos!');
    return;
  }

  // almacenamos datos en el local storage
  localStorage.setItem('userName', username);
  localStorage.setItem('userAge', age);

  //actualizamos la interfaz por cada interaccion
  displayData();
  updateSessionCounter();
});

// limpiamos los datos del local storage
clearBtn.addEventListener('click', () => {
  // Solo borramos las claves que creamos
  localStorage.removeItem('userName');
  localStorage.removeItem('userAge');

  displayData();
  updateSessionCounter();
});

//usamos una funcion para poder mostrar los datos almacenados
function displayData() {
  const storedName = localStorage.getItem('userName');
  const storedAge  = localStorage.getItem('userAge');

  if (storedName && storedAge) {
    output.textContent = `Bienvenido/a, ${storedName}. Tu edad es ${storedAge}.`;
  } else {
    output.textContent = 'No se encontraron datos almacenados!';
  }
}

// se inicia desde la primera vez que se abre la pestaña
if (!sessionStorage.getItem('iCount')) {
  sessionStorage.setItem('iCount', 0);
}

function updateSessionCounter() {
  let count = parseInt(sessionStorage.getItem('iCount'), 10);
  count++;
  sessionStorage.setItem('iCount', count);
  console.log(`La interaciones que se obtuvieorn durande esta sesion fueron ${count}!`);
  alert(`La interaciones que se obtuvieorn durande esta sesion fueron ${count}!`);
}
