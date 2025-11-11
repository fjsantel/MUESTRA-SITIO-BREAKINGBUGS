document.addEventListener('DOMContentLoaded', function() {
    // ==========================================
    // MENU Y NAVEGACIÓN ORIGINAL
    // ==========================================
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const bpDisplay = document.getElementById('bp-display');
    const yellowCurtain = document.getElementById('yellow-curtain');

    // Menu functionality
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Breakpoint display functionality
    function updateBreakpoint() {
        if (!bpDisplay) return;

        const width = window.innerWidth;
        let bp = '';

        if (width <= 320) {
            bp = 'iPhone SE: 320px';
        } else if (width >= 340 && width <= 390) {
            bp = 'Mobile Base: 390px';
        } else if (width >= 391 && width <= 412) {
            bp = 'Pixel/Galaxy: 412px';
        } else if (width >= 416 && width <= 768) {
            bp = 'Tablet: 768px';
        } else if (width >= 769) {
            bp = 'Desktop: 1440px';
        }

        bpDisplay.textContent = `BP: ${bp}`;
    }

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    // Navigation with curtain
    function showPageWithCurtain(pageUrl) {
        if (yellowCurtain) {
            yellowCurtain.classList.add('show');
            setTimeout(() => {
                window.location.href = pageUrl;
            }, 600);
        }
    }

    // Menu navigation
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('menu-item')) {
                const page = e.target.getAttribute('data-page');
                dropdownMenu.classList.remove('show');

                if (page === 'index') {
                    showPageWithCurtain('index.html');
                } else if (page === 'servicios') {
                    showPageWithCurtain('servicios.html');
                } else if (page === 'nosotros') {
                    showPageWithCurtain('nosotros.html');
                } else if (page === 'contacto') {
                    showPageWithCurtain('contacto.html');
                }
            }
        });
    }

    // ==========================================
    // SLIDER LATERAL ELEGANTE
    // ==========================================
    const sliderTrack = document.getElementById('slider-track');
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const sliderCounter = document.getElementById('slider-counter');

    if (sliderTrack && sliderPrev && sliderNext && sliderCounter) {
        const slides = sliderTrack.querySelectorAll('.slide-item');
        let currentSlide = 0;
        const totalSlides = slides.length;

        // Calcular cuántos slides se ven según el viewport
        function getSlidesPerView() {
            const width = window.innerWidth;
            if (width >= 769) {
                return 3; // Desktop: 3 slides
            } else if (width >= 416) {
                return 2; // Tablet: 2 slides
            } else {
                return 1; // Mobile: 1 slide
            }
        }

        function updateSlider() {
            const slidesPerView = getSlidesPerView();
            const maxSlide = Math.max(0, totalSlides - slidesPerView);

            // Limitar currentSlide al rango válido
            if (currentSlide > maxSlide) {
                currentSlide = maxSlide;
            }

            // Calcular el desplazamiento
            const slideWidth = slides[0].offsetWidth;
            const gap = 16; // Gap entre slides en px (ajustar según tu spacing)
            const offset = -(currentSlide * (slideWidth + gap));

            sliderTrack.style.transform = `translateX(${offset}px)`;

            // Actualizar contador
            const displaySlide = currentSlide + 1;
            sliderCounter.textContent = `${displaySlide.toString().padStart(2, '0')} / ${totalSlides.toString().padStart(2, '0')}`;

            // Deshabilitar botones en los extremos
            sliderPrev.disabled = currentSlide === 0;
            sliderNext.disabled = currentSlide >= maxSlide;

            // Estilo visual para botones deshabilitados
            if (currentSlide === 0) {
                sliderPrev.style.opacity = '0.3';
                sliderPrev.style.cursor = 'not-allowed';
            } else {
                sliderPrev.style.opacity = '1';
                sliderPrev.style.cursor = 'pointer';
            }

            if (currentSlide >= maxSlide) {
                sliderNext.style.opacity = '0.3';
                sliderNext.style.cursor = 'not-allowed';
            } else {
                sliderNext.style.opacity = '1';
                sliderNext.style.cursor = 'pointer';
            }
        }

        // Event listeners para botones
        sliderPrev.addEventListener('click', function() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });

        sliderNext.addEventListener('click', function() {
            const slidesPerView = getSlidesPerView();
            const maxSlide = totalSlides - slidesPerView;
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlider();
            }
        });

        // Actualizar al cambiar tamaño de ventana
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                updateSlider();
            }, 250);
        });

        // Swipe touch para móviles
        let touchStartX = 0;
        let touchEndX = 0;

        sliderTrack.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderTrack.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - siguiente
                    const slidesPerView = getSlidesPerView();
                    const maxSlide = totalSlides - slidesPerView;
                    if (currentSlide < maxSlide) {
                        currentSlide++;
                        updateSlider();
                    }
                } else {
                    // Swipe right - anterior
                    if (currentSlide > 0) {
                        currentSlide--;
                        updateSlider();
                    }
                }
            }
        }

        // Teclado navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && currentSlide > 0) {
                currentSlide--;
                updateSlider();
            } else if (e.key === 'ArrowRight') {
                const slidesPerView = getSlidesPerView();
                const maxSlide = totalSlides - slidesPerView;
                if (currentSlide < maxSlide) {
                    currentSlide++;
                    updateSlider();
                }
            }
        });

        // Inicializar
        updateSlider();
    }

    // ==========================================
    // BOTONES DE ACCIÓN - Smooth Scroll
    // ==========================================
    const actionButtons = document.querySelectorAll('.btn-action, .btn-action-large, .btn-cta-primary, .btn-cta-secondary');

    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Aquí puedes agregar lógica personalizada
            console.log('Botón clickeado:', this.textContent);

            // Ejemplo: Si el botón dice "Contactar", navegar a contacto
            if (this.textContent.includes('Contactar') || this.textContent.includes('Cotización')) {
                e.preventDefault();
                showPageWithCurtain('contacto.html');
            }

            // Ejemplo: Si dice "Servicios", navegar a servicios
            if (this.textContent.includes('Servicios')) {
                e.preventDefault();
                showPageWithCurtain('servicios.html');
            }
        });
    });

    // ==========================================
    // ANIMACIONES AL SCROLL (Opcional)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar bloques para animaciones de entrada
    const blocks = document.querySelectorAll('.block-split, .block-centered, .stats-block, .full-image-block');
    blocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(block);
    });

    // ==========================================
    // LAZY LOADING PARA IMÁGENES (Opcional)
    // ==========================================
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');

    imagePlaceholders.forEach(placeholder => {
        // Aquí puedes agregar lógica para cargar imágenes reales
        // cuando tengas las URLs de las imágenes

        // Ejemplo:
        // const imgSrc = placeholder.getAttribute('data-src');
        // if (imgSrc) {
        //     const img = document.createElement('img');
        //     img.src = imgSrc;
        //     img.style.width = '100%';
        //     img.style.height = '100%';
        //     img.style.objectFit = 'cover';
        //     placeholder.innerHTML = '';
        //     placeholder.appendChild(img);
        // }
    });

    // ==========================================
    // BOTONES DE SLIDE - Navegación
    // ==========================================
    const slideButtons = document.querySelectorAll('.btn-slide');

    slideButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.closest('.slide-item').querySelector('.slide-title').textContent;
            console.log('Solicitar servicio:', serviceName);

            // Navegar a página de contacto o abrir modal
            showPageWithCurtain('contacto.html');
        });
    });

    // ==========================================
    // ESTADÍSTICAS - Animación de conteo (Opcional)
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    const statsBlock = document.querySelector('.stats-block');
    if (statsBlock) {
        statsObserver.observe(statsBlock);
    }

    function animateStats() {
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/[^0-9]/g, ''));

            if (isNaN(number)) return;

            let current = 0;
            const increment = number / 50; // 50 pasos
            const duration = 2000; // 2 segundos
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }

                let displayValue = Math.floor(current);
                if (hasPlus) displayValue += '+';
                if (hasPercent) displayValue += '%';
                if (text === '24/7') displayValue = '24/7'; // Caso especial

                stat.textContent = displayValue;
            }, stepTime);
        });
    }

    console.log('Landing Editorial JavaScript inicializado correctamente');
});
