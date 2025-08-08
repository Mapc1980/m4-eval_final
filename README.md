# Tecno Chile - Tienda en Línea

## 📱 Descripción del Proyecto
Tecno Chile es una tienda en línea moderna y responsiva para productos tecnológicos, desarrollada con HTML5, CSS3, JavaScript y Bootstrap 5.

## ✨ Características

### 🎠 Carrusel Hero Interactivo
- Slides automáticos con controles manuales completamente funcionales
- Efectos visuales modernos con partículas animadas
- Totalmente responsivo y optimizado
- Navegación por teclado (flechas)

### 👤 Sistema de Cliente
- Registro de datos del cliente con validación
- Almacenamiento local persistente
- Validación de campos en tiempo real
- Edición de información registrada

### 🛍️ Catálogo de Productos
- 6 productos tecnológicos predefinidos
- Búsqueda en tiempo real por nombre/descripción
- Tarjetas de producto con diseño atractivo
- Imágenes con fallback automático

### 🛒 Carrito de Compras Avanzado
- Agregar/eliminar productos
- Modificar cantidades fácilmente
- Persistencia en localStorage
- Botón flotante con contador
- Notificaciones de confirmación
- Proceso de compra completo

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html                 # Página principal
├── css/
│   └── styles.css            # Estilos completos
├── js/
│   ├── productos.js          # Lógica de productos y carrusel
│   ├── carrito.js           # Sistema de carrito
│   └── cliente.js           # Gestión de cliente
└── assets/
    └── image/
        ├── img1.png         # MacBook Pro 13"
        ├── img2.png         # iPhone 14
        ├── img3.png         # iPad Air
        ├── img4.png         # Samsung Galaxy S23
        ├── img5.png         # Dell XPS 13
        └── img6.png         # AirPods Pro
```

## 🚀 Instalación y Uso

1. **Clona o descarga** todos los archivos manteniendo la estructura de carpetas
2. **Agrega las imágenes** de los productos en `assets/image/`
3. **Abre `index.html`** en tu navegador web
4. **¡Listo!** La tienda estará funcionando completamente

## 🖼️ Imágenes Requeridas

Necesitas agregar las siguientes imágenes en `assets/image/`:
- `img1.png` - MacBook Pro 13"
- `img2.png` - iPhone 14  
- `img3.png` - iPad Air
- `img4.png` - Samsung Galaxy S23
- `img5.png` - Dell XPS 13
- `img6.png` - AirPods Pro

*Nota: Si no tienes las imágenes, se mostrarán placeholders automáticamente*

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con animaciones
- **JavaScript ES6+** - Funcionalidad dinámica
- **Bootstrap 5.3** - Framework CSS responsivo
- **Font Awesome 6.4** - Iconos vectoriales
- **LocalStorage** - Persistencia de datos

## ⚙️ Funcionalidades Técnicas

### Carrusel
- Controles táctiles y de teclado
- Animaciones CSS3 avanzadas  
- Efecto parallax sutil
- Sistema de partículas optimizado
- Pausado automático al cambiar de pestaña

### Sistema de Datos
- Persistencia en `localStorage`
- Validación de formularios en tiempo real
- Formateo automático de precios en CLP
- Manejo de errores robusto
- Notificaciones visuales informativas

### Optimizaciones
- Código modular y mantenible
- Event listeners optimizados
- Lazy loading de efectos visuales
- Responsive design mobile-first
- Accesibilidad mejorada

## 🎯 Funcionalidades Principales

### 1. Navegación del Carrusel
- **Controles manuales**: Botones anterior/siguiente totalmente funcionales
- **Indicadores**: Dots clickeables para salto directo
- **Teclado**: Flechas izquierda/derecha (cuando no hay inputs enfocados)
- **Táctil**: Swipe en dispositivos móviles
- **Auto-play**: Cambio automático cada 6 segundos

### 2. Gestión de Cliente
```javascript
// Ejemplo de uso
guardarCliente(); // Guarda datos del formulario
cerrarSesionCliente(); // Limpia sesión
editarCliente(); // Modifica datos existentes
obtenerInfoCliente(); // Retorna información completa
```

### 3. Manejo del Carrito
```javascript
// Funciones principales
agregarAlCarrito(productoId); // Agregar producto
cambiarCantidad(id, cantidad); // Modificar cantidad
eliminarDelCarrito(id); // Quitar producto
vaciarCarrito(); // Limpiar carrito completo
procesarCompra(); // Finalizar compra
```

### 4. Búsqueda de Productos
- Búsqueda en tiempo real
- Filtrado por nombre y descripción
- Limpieza con tecla Escape
- Resultados instantáneos

## 🎨 Personalización

### Colores Principales
```css
:root {
    --primary-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    --secondary-gradient: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    --tech-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Modificar Productos
Edita el array `productos` en `js/productos.js`:
```javascript
const productos = [
    {
        id: 1,
        nombre: "Nuevo Producto",
        precio: 500000,
        imagen: "assets/image/nuevo.png",
        descripcion: "Descripción del producto"
    }
];
```

## 📱 Responsividad

- **Desktop**: Experiencia completa con efectos avanzados
- **Tablet**: Adaptación de controles y espaciado
- **Móvil**: Interfaz optimizada y controles táctiles

### Breakpoints
- `≥768px`: Desktop y tablet
- `<768px`: Móvil (efectos reducidos para mejor rendimiento)

## 🔧 Solución de Problemas

### Carrusel no funciona
- Verifica que Bootstrap esté cargado correctamente
- Revisa la consola del navegador para errores
- Asegúrate de que los IDs coincidan entre HTML y JavaScript

### Productos no se muestran
- Confirma que `window.productos` esté disponible
- Verifica que las imágenes estén en la ruta correcta
- Revisa si hay errores de JavaScript en la consola

### Carrito no guarda datos
- Verifica que localStorage esté habilitado
- Comprueba si hay suficiente espacio de almacenamiento
- Revisa la configuración de privacidad del navegador

### Imágenes no cargan
- Verifica las rutas de las imágenes
- Asegúrate de que los archivos existan
- Los placeholders se mostrarán automáticamente si fallan

## 🚀 Mejoras Futuras

- [ ] Integración con API de pagos
- [ ] Base de datos para productos
- [ ] Sistema de usuarios más avanzado
- [ ] Categorías de productos
- [ ] Wishlist de productos favoritos
- [ ] Comparador de productos
- [ ] Reviews y calificaciones
- [ ] Sistema de cupones de descuento

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crea una rama para tu feature
3. Commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema:
1. Revisa la consola del navegador para errores
2. Verifica que todos los archivos estén en su lugar
3. Asegúrate de usar un navegador moderno
4. Comprueba que JavaScript esté habilitado

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## ✅ Checklist de Implementación

- [x] HTML estructura completa
- [x] CSS con todas las animaciones
- [x] JavaScript modular y funcional
- [x] Carrusel completamente operativo
- [x] Sistema de cliente robusto
- [x] Carrito de compras avanzado
- [x] Búsqueda de productos
- [x] Responsive design
- [x] Persistencia de datos
- [x] Notificaciones de usuario
- [x] Validación de formularios
- [x] Manejo de errores
- [x] Optimización de rendimiento

---

**¡Tecno Chile está listo para usar!** 🎉

Todos los archivos han sido generados con funcionalidad completa y están listos para implementar. Solo necesitas agregar las imágenes de los productos y tendrás una tienda en línea completamente funcional.