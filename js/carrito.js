// ================== Estado ==================
let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

// ================== Utils ==================
function guardarLSCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function formatearPrecio(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const totalItems = carrito.reduce((acc, p) => acc + (p.cantidad || 0), 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'grid' : 'none';
}

function ensureFloatingCartButton() {
  if (document.getElementById('btnCartFloat')) return;

  const btn = document.createElement('button');
  btn.id = 'btnCartFloat';
  btn.className = 'btn btn-primary';
  btn.title = 'Ver carrito';
  btn.setAttribute('aria-label', 'Ver carrito');
  btn.innerHTML = `
    <i class="fas fa-shopping-cart"></i>
    <span id="cartBadge"
          class="position-absolute translate-middle badge rounded-pill bg-danger"
          style="top:0; right:0; min-width:24px; height:24px; display:grid; place-items:center; font-size:12px;">0</span>
  `;
  Object.assign(btn.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    zIndex: '1050',
    borderRadius: '999px',
    width: '56px',
    height: '56px',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,.2)'
  });
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    document.getElementById('carrito')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ================== Render ==================
function actualizarCarrito() {
  const contenedor = document.getElementById('carritoProductos');
  const totalSpan = document.getElementById('totalCarrito');
  if (!contenedor || !totalSpan) return;

  contenedor.innerHTML = '';
  let total = 0;

  carrito.forEach(prod => {
    const subtotal = prod.precio * prod.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border p-2 mb-2">
        <span>${prod.nombre} (x${prod.cantidad})</span>
        <span>${formatearPrecio(subtotal)}</span>
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${prod.id}, ${prod.cantidad - 1})">−</button>
          <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${prod.id}, ${prod.cantidad + 1})">+</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${prod.id})">X</button>
        </div>
      </div>
    `;
  });

  totalSpan.textContent = formatearPrecio(total);
  updateCartBadge();
}

// ================== Acciones ==================
function agregarAlCarrito(producto) {
  const item = carrito.find(p => p.id === producto.id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarLSCarrito();
  actualizarCarrito();
}

function cambiarCantidad(id, nuevaCantidad) {
  carrito = carrito.map(p => p.id === id ? { ...p, cantidad: Math.max(1, nuevaCantidad) } : p);
  guardarLSCarrito();
  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(p => p.id !== id);
  guardarLSCarrito();
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarLSCarrito();
  actualizarCarrito();
}

function procesarCompra() {
  const clienteInfo = JSON.parse(localStorage.getItem('clienteInfo') || '{"nombre":"","apellido":""}');
  if (!clienteInfo.nombre || !clienteInfo.apellido) {
    alert('Debes ingresar los datos del cliente antes de procesar la compra.');
    document.getElementById('nombre')?.focus();
    return;
  }
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }
  alert(`Compra realizada por ${clienteInfo.nombre} ${clienteInfo.apellido}.\nGracias por su compra.`);
  vaciarCarrito();
}

// ================== Init ==================
document.addEventListener('DOMContentLoaded', () => {
  ensureFloatingCartButton();
  updateCartBadge();
  actualizarCarrito();
});

// ================== Scope global (para onclick del HTML) ==================
window.agregarAlCarrito = agregarAlCarrito;
window.cambiarCantidad = cambiarCantidad;
window.eliminarDelCarrito = eliminarDelCarrito;
window.vaciarCarrito = vaciarCarrito;
window.procesarCompra = procesarCompra;
