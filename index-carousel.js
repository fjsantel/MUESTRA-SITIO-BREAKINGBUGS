/* ========================================
   CARRUSEL DE INSECTOS - ANIMACIÓN
   ======================================== */

// Mapeo de servicios a nombres
const serviceNames = {
    'desratizacion': 'Desratización',
    'desinsectacion': 'Desinsectación',
    'desinfeccion': 'Desinfección',
    'sanitizacion': 'Sanitización'
};

// Variables globales
let currentIndex = 1; // Inicia con desinsectación en el centro (índice 1)
let carouselItems = [];
let isAnimating = false;

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos
    carouselItems = document.querySelectorAll('.carousel-item');
    const insectNameElement = document.getElementById('insect-name');

    // Configurar nombre inicial
    updateInsectName();

    // Iniciar rotación automática
    startAutoRotation();

    // Agregar interactividad: click en items
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (!isAnimating && index !== currentIndex) {
                const direction = index > currentIndex ? 'next' : 'prev';
                const steps = Math.abs(index - currentIndex);
                rotateCarousel(direction, steps);
            }
        });
    });
});

// Función para actualizar el nombre del servicio
function updateInsectName() {
    const insectNameElement = document.getElementById('insect-name');
    const currentItem = carouselItems[currentIndex];
    const serviceType = currentItem.getAttribute('data-service');

    // Animación de fade out/in
    insectNameElement.style.opacity = '0';

    setTimeout(() => {
        insectNameElement.textContent = serviceNames[serviceType];
        insectNameElement.style.opacity = '1';
    }, 200);
}

// Función para rotar el carrusel
function rotateCarousel(direction = 'next', steps = 1) {
    if (isAnimating) return;

    isAnimating = true;

    // Calcular nuevo índice
    if (direction === 'next') {
        currentIndex = (currentIndex + steps) % carouselItems.length;
    } else {
        currentIndex = (currentIndex - steps + carouselItems.length) % carouselItems.length;
    }

    // Actualizar clases de todos los items
    carouselItems.forEach((item, index) => {
        item.classList.remove('carousel-item-center');

        if (index === currentIndex) {
            item.classList.add('carousel-item-center');
        }
    });

    // Actualizar nombre
    updateInsectName();

    // Permitir nueva animación después de completar
    setTimeout(() => {
        isAnimating = false;
    }, 800); // Debe coincidir con la duración de la transición CSS
}

// Función para iniciar rotación automática
function startAutoRotation() {
    setInterval(() => {
        if (!isAnimating) {
            rotateCarousel('next', 1);
        }
    }, 3000); // Cambia cada 3 segundos
}

// Navegación con teclado (opcional)
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        rotateCarousel('prev', 1);
    } else if (e.key === 'ArrowRight') {
        rotateCarousel('next', 1);
    }
});

/* ========================================
   INTEGRACIÓN CON MENÚ Y CORTINA
   ======================================== */

// Manejo del menú dropdown
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && !menuButton.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Navegación de menú
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

// Función de navegación con cortina amarilla
function navigateToPage(page) {
    const curtain = document.getElementById('yellow-curtain');

    if (curtain) {
        // Mostrar cortina
        curtain.classList.add('active');

        // Navegar después de la animación
        setTimeout(() => {
            switch(page) {
                case 'servicios':
                    window.location.href = 'servicios.html';
                    break;
                case 'nosotros':
                    window.location.href = 'nosotros.html';
                    break;
                case 'contacto':
                    window.location.href = 'contacto.html';
                    break;
                default:
                    window.location.href = 'index.html';
            }
        }, 600);
    }
}

// Animación de entrada de página
window.addEventListener('load', function() {
    const curtain = document.getElementById('yellow-curtain');

    if (curtain && curtain.classList.contains('active')) {
        setTimeout(() => {
            curtain.classList.remove('active');
        }, 100);
    }
});

/* ========================================
   FADE OUT DEL TEXTO "CONTROL DE PLAGAS" EN SCROLL
   ======================================== */

window.addEventListener('scroll', function() {
    const controlPlagasText = document.querySelector('.control-plagas-text');
    const logoHeader = document.querySelector('.logo-header');

    if (!controlPlagasText || !logoHeader) return;

    // Obtener posiciones
    const textRect = controlPlagasText.getBoundingClientRect();
    const logoRect = logoHeader.getBoundingClientRect();

    // Calcular la distancia entre el texto y el logo
    const textBottom = textRect.bottom;
    const logoBottom = logoRect.bottom;

    // Distancia de fade (rango en el que se desvanece)
    const fadeDistance = 100; // píxeles

    // Calcular opacidad basada en la proximidad
    let opacity = 1;

    if (textBottom <= logoBottom + fadeDistance) {
        // El texto está cerca o debajo del logo
        const distance = logoBottom - textBottom;
        opacity = Math.max(0, Math.min(1, distance / fadeDistance));
    }

    controlPlagasText.style.opacity = opacity;
});

/* ========================================
   PHOTO SLIDER FUNCTIONALITY
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const photoSlider = document.getElementById('photoSlider');
    const photoSliderDots = document.getElementById('photoSliderDots');

    if (!photoSlider || !photoSliderDots) return;

    const slides = photoSlider.querySelectorAll('.photo-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        photoSliderDots.appendChild(dot);
    });

    const dots = photoSliderDots.querySelectorAll('.slider-dot');

    function goToSlide(index) {
        currentSlide = index;
        photoSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto-advance every 4 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }, 4000);
});
