  document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('#techCarousel');
            let carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 5000,
                wrap: true,
                keyboard: true,
                pause: 'hover'
            });
            
            // Reiniciar el intervalo cuando se usan los controles
            const prevButton = document.querySelector('.carousel-control-prev');
            const nextButton = document.querySelector('.carousel-control-next');
            
            prevButton.addEventListener('click', function() {
                carouselInstance.dispose();
                carouselInstance = new bootstrap.Carousel(carousel, {
                    interval: 5000,
                    wrap: true,
                    keyboard: true,
                    pause: 'hover'
                });
            });
            
            nextButton.addEventListener('click', function() {
                carouselInstance.dispose();
                carouselInstance = new bootstrap.Carousel(carousel, {
                    interval: 5000,
                    wrap: true,
                    keyboard: true,
                    pause: 'hover'
                });
            });
            
            carousel.addEventListener('slide.bs.carousel', function (e) {
                // Reiniciar animaciones en cada slide
                const activeSlide = e.relatedTarget;
                const animations = activeSlide.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .btn-modern, .product-features');
                
                animations.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; // Trigger reflow
                    el.style.animation = null;
                });
                
                // Efecto de explosión de colores al cambiar slide
                document.body.style.filter = 'hue-rotate(0deg)';
                setTimeout(() => {
                    document.body.style.filter = 'hue-rotate(360deg)';
                    document.body.style.transition = 'filter 1s ease';
                }, 100);
                
                setTimeout(() => {
                    document.body.style.filter = 'hue-rotate(0deg)';
                    document.body.style.transition = 'none';
                }, 1100);
            });

            // Efecto parallax mejorado
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.hero-carousel');
                const speed = scrolled * 0.3;
                parallax.style.transform = `translateY(${speed}px) scale(${1 + scrolled * 0.0001})`;
            });

            // Efectos de hover intensificados
            const buttons = document.querySelectorAll('.btn-modern');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.15) rotate(2deg)';
                    this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.5), 0 0 50px rgba(255,255,255,0.5)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)';
                });
            });

            // Efecto de partículas en movimiento
            function createParticle() {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1000';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = '-10px';
                particle.style.boxShadow = '0 0 10px currentColor';
                
                document.body.appendChild(particle);
                
                const animation = particle.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: 'linear'
                });
                
                animation.addEventListener('finish', () => {
                    particle.remove();
                });
            }

            // Generar partículas cada cierto tiempo
            setInterval(createParticle, 500);
        });




// Seccion Productos

           const productos = [
            {
                id: 1,
                nombre: "MacBook Pro 13\"",
                precio: 1299000,
                imagen: "assets/image/img1.png",
                descripcion: "Laptop profesional con chip M2"
            },
            {
                id: 2,
                nombre: "iPhone 14",
                precio: 899000,
                imagen: "assets/image/img2.png",
                descripcion: "Smartphone último modelo"
            },
            {
                id: 3,
                nombre: "iPad Air",
                precio: 649000,
                imagen: "assets/image/img3.png",
                descripcion: "Tablet versátil y potente"
            },
            {
                id: 4,
                nombre: "Samsung Galaxy S23",
                precio: 799000,
                imagen: "assets/image/img4.png",
                descripcion: "Android flagship premium"
            },
            {
                id: 5,
                nombre: "Dell XPS 13",
                precio: 1099000,
                imagen: "assets/image/img5.png",
                descripcion: "Ultrabook profesional"
            },
            {
                id: 6,
                nombre: "AirPods Pro",
                precio: 249000,
                imagen: "assets/image/img6.png",
                descripcion: "Auriculares inalámbricos premium"
            }
        ];

        
        function formatearPrecio(precio) {
            return new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP'
            }).format(precio);
        }

        
     
      
        function cargarProductos(productosAMostrar = productos) {
            const container = document.getElementById('productosContainer');
            container.innerHTML = '';

            productosAMostrar.forEach(producto => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                
                col.innerHTML = `
                    <div class="card product-card h-100">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <div class="mt-auto">
                                <p class="price mb-3">${formatearPrecio(producto.precio)}</p>
                                <button class="btn btn-primary w-100" 
                                        onclick="agregarAlCarrito(${producto.id})"
                                        data-bs-toggle="tooltip" 
                                        title="Agregar al carrito">
                                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            });

        
            inicializarTooltips();
        }

        // Inicialización al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            cargarProductos();
            inicializarTooltips();
            
            // Inicializar carousel automático
            const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
                interval: 4000,
                wrap: true
            });
        });
    
