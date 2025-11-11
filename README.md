# Sitio Web - Control de Plagas Profesional

Sitio web diseñado para empresa de control de plagas en Chile, basado en el estilo minimalista y efectivo de HUMANO BRANDING.

## 🎨 Características de Diseño

### Estilo Visual
- **Paleta de colores profesional**: Verdes corporativos (#2d5016, #4a7c26, #7cb342)
- **Tipografía limpia**: Author y Bespoke Serif
- **Diseño mobile-first**: Totalmente responsive desde 320px hasta 1440px+
- **Navegación con cortina de transición**: Experiencia fluida entre páginas
- **Animaciones sutiles**: Conceptos rotativos y hover effects

### Estructura del Sitio

```
sitio-web/
├── index.html          # Página principal con hero y servicios destacados
├── servicios.html      # Catálogo completo de servicios (6 servicios)
├── contacto.html       # Formulario de contacto e información
├── styles.css          # Estilos globales con breakpoints
└── README.md          # Este archivo
```

## 📱 Páginas Incluidas

### 1. **Index (Inicio)**
- Hero con ícono de protección
- Frase de impacto
- Bloques de texto informativos
- Navegador interactivo de servicios con flechas
- Conceptos rotativos animados

### 2. **Servicios**
- 6 servicios principales en cards:
  - 🐀 Control de Roedores
  - 🦟 Control de Insectos
  - 🪳 Desinsectación
  - 🧪 Sanitización
  - 🪲 Control de Termitas
  - 🦟 Control de Mosquitos
- Características detalladas por servicio
- Layout adaptativo (1 columna mobile, 2 columnas desktop)

### 3. **Contacto**
- Información de contacto (teléfono, email, dirección, WhatsApp)
- Formulario de cotización con validación
- Horarios de atención
- Disponibilidad 24/7 para emergencias

## 🎯 Características Técnicas

### Responsive Design
- **iPhone SE** (320px): Layout ultra-compacto
- **Mobile Base** (390px): Vista móvil estándar
- **Pixel/Galaxy** (412px): Android optimizado
- **Tablet** (768px): Grid de 2 columnas
- **Desktop** (1440px+): Experiencia completa

### Navegación
- Menú dropdown en header
- Transiciones con cortina verde
- Sistema de navegación entre páginas
- Indicador visual de breakpoint (oculto por defecto)

### Interactividad
- Navegador de servicios con flechas (index)
- Hover effects en cards y botones
- Animaciones de entrada/salida
- Formulario de contacto funcional

## 🚀 Cómo Usar

1. **Abrir el sitio**:
   - Abre `index.html` en tu navegador
   - O usa un servidor local: `python3 -m http.server 8000`

2. **Personalizar**:
   - **Colores**: Edita las variables CSS en `:root` de `styles.css`
   - **Textos**: Modifica el contenido en cada archivo HTML
   - **Servicios**: Agrega o edita servicios en el array JavaScript de `index.html`

3. **Logo/Imágenes**:
   - Crea carpeta `assets/` para imágenes
   - Reemplaza emojis por íconos SVG o PNG
   - Actualiza referencias en HTML

## 🎨 Paleta de Colores

```css
--color-primary: #2d5016;    /* Verde oscuro profesional */
--color-secondary: #4a7c26;  /* Verde medio */
--color-accent: #7cb342;     /* Verde brillante */
--color-warning: #ffd600;    /* Amarillo alerta */
```

## 📋 Tareas Pendientes (Opcionales)

- [ ] Crear página "Nosotros" con equipo
- [ ] Crear página "Sectores" (hogar, empresas, restaurantes, hospitales)
- [ ] Agregar galería de imágenes
- [ ] Integrar Google Maps en contacto
- [ ] Agregar certificaciones (ISP, MINSAL, HACCP, BRC)
- [ ] Implementar envío real de formulario (backend)
- [ ] Optimizar imágenes y assets
- [ ] SEO: meta tags, Open Graph, structured data

## 📄 Licencia

Diseño basado en HUMANO BRANDING - Adaptado para Control de Plagas Chile 2025

---

**Nota**: Este es un diseño de presentación. Para producción, considera agregar:
- Backend para formulario de contacto
- Sistema de gestión de contenido (CMS)
- Optimización de assets
- Testing cross-browser
- Accesibilidad (WCAG)
