// ================== Estado ==================
let clienteInfo = JSON.parse(localStorage.getItem('clienteInfo') || '{"nombre":"","apellido":""}');

// ================== Utils ==================
function guardarLSCliente() {
  localStorage.setItem('clienteInfo', JSON.stringify(clienteInfo));
}

// ================== UI ==================
function mostrarCliente() {
  const infoDiv = document.getElementById('infoCliente');
  const formDiv = document.getElementById('formCliente');
  const vistaDiv = document.getElementById('vistaCliente');

  if (clienteInfo.nombre && clienteInfo.apellido) {
    if (infoDiv) infoDiv.innerHTML = `<strong>Cliente registrado:</strong> ${clienteInfo.nombre} ${clienteInfo.apellido}`;
    if (formDiv) formDiv.style.display = 'none';
    if (vistaDiv) vistaDiv.style.display = 'block';
  } else {
    if (formDiv) formDiv.style.display = 'flex';
    if (vistaDiv) vistaDiv.style.display = 'none';
    if (infoDiv) infoDiv.innerHTML = '';
  }
}

// ================== Acciones ==================
function guardarCliente() {
  const nombre = (document.getElementById('nombre')?.value || '').trim();
  const apellido = (document.getElementById('apellido')?.value || '').trim();

  if (!nombre || !apellido) {
    alert('Por favor ingresa nombre y apellido.');
    return;
  }

  clienteInfo = { nombre, apellido };
  guardarLSCliente();
  mostrarCliente();
  alert(`Cliente guardado: ${nombre} ${apellido}`);
}

function cerrarSesionCliente() {
  localStorage.removeItem('clienteInfo');
  clienteInfo = { nombre: '', apellido: '' };

  const nombreEl = document.getElementById('nombre');
  const apellidoEl = document.getElementById('apellido');
  if (nombreEl) nombreEl.value = '';
  if (apellidoEl) apellidoEl.value = '';

  mostrarCliente();
}

// ================== Init ==================
document.addEventListener('DOMContentLoaded', () => {
  // Restaurar estado del cliente y pintar UI
  const datosGuardados = localStorage.getItem('clienteInfo');
  if (datosGuardados) clienteInfo = JSON.parse(datosGuardados);
  mostrarCliente();
});

// ================== Scope global (para onclick del HTML) ==================
window.guardarCliente = guardarCliente;
window.cerrarSesionCliente = cerrarSesionCliente;
