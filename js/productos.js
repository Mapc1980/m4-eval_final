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