# Guía de Edición de Archivos SVG en Illustrator

## 📁 Archivos SVG Creados

1. **logo-control-plagas.svg** - Logo principal con escudo y texto
2. **iconos-servicios.svg** - 6 íconos de servicios + logo simplificado

---

## 🎨 Cómo Abrir y Editar en Adobe Illustrator

### 1. Abrir el Archivo
```
Archivo > Abrir > Seleccionar el SVG
```

### 2. Estructura de Capas

Ambos archivos están organizados en **capas nombradas** para facilitar la edición:

#### **logo-control-plagas.svg** - 10 Capas:
- ✅ **escudo-base** - Forma principal del escudo con gradiente
- ✅ **cruz-proteccion** - Cruz blanca interior
- ✅ **circulo-central** - Círculo donde va el símbolo
- ✅ **plaga-eliminada** - Ícono X sobre insecto
- ✅ **texto-control** - Texto "CONTROL"
- ✅ **texto-plagas** - Texto "DE PLAGAS"
- ✅ **hojas-decorativas** - Elementos decorativos laterales
- ✅ **estrellas-certificacion** - Estrellas amarillas
- ✅ **borde-refuerzo** - Borde exterior del escudo
- ✅ **subtitulo-profesional** - Texto "profesional"

#### **iconos-servicios.svg** - 7 Grupos:
- 🐀 **icono-roedor** - Control de roedores
- 🦟 **icono-insecto-volador** - Control de insectos voladores
- 🪳 **icono-cucaracha** - Desinsectación
- 🧪 **icono-sanitizacion** - Sanitización/desinfección
- 🪲 **icono-termitas** - Control de termitas
- ✅ **icono-certificacion** - Escudo certificado
- 🏷️ **logo-simple** - Versión simplificada del logo

---

## 🎯 Tareas Comunes de Edición

### Cambiar Colores

**Paleta Actual:**
```css
Verde Oscuro:    #2d5016 (Principal)
Verde Medio:     #4a7c26 (Secundario)
Verde Brillante: #7cb342 (Acento)
Amarillo:        #ffd600 (Alerta/Certificación)
```

**Cómo cambiar:**
1. Selecciona la capa o elemento
2. Panel Apariencia > Clic en el color de relleno
3. Ingresa el nuevo código hexadecimal

### Editar Texto

1. Selecciona la herramienta Texto (T)
2. Haz clic en el texto que quieres editar
3. Cambia contenido, fuente o tamaño
4. Para el logo principal, considera fuentes como:
   - **Título**: Impact, Bebas Neue, Futura Bold
   - **Subtítulo**: Arial, Helvetica, Open Sans

### Modificar Formas

1. Herramienta Selección Directa (A)
2. Selecciona los puntos de anclaje
3. Arrastra para modificar la forma
4. Para el escudo: mantén simetría usando guías (Ver > Guías)

### Agregar/Quitar Elementos

- Para ocultar: Panel Capas > Clic en el ícono del ojo
- Para eliminar: Selecciona capa > Tecla Delete
- Para duplicar: Selecciona capa > Cmd/Ctrl + C > Cmd/Ctrl + F

---

## 💡 Consejos de Diseño

### Para el Logo Principal

1. **Mantén la jerarquía visual**
   - Escudo = Elemento más grande
   - Texto = Legible y bold
   - Detalles = Sutiles, no compiten

2. **Prueba en diferentes tamaños**
   - 400x400px (actual)
   - 64x64px (favicon)
   - 200x200px (header web)

3. **Simplifica para versiones pequeñas**
   - Usa el "logo-simple" en tamaños menores a 100px
   - Elimina detalles finos que no se verán

### Para los Íconos de Servicios

1. **Consistencia**
   - Mantén el mismo estilo de línea en todos
   - Usa la misma paleta de colores
   - Tamaños similares entre íconos

2. **Claridad**
   - Cada ícono debe ser reconocible a 32x32px
   - Evita detalles excesivos

3. **Contexto**
   - El fondo circular ayuda a la legibilidad
   - Las etiquetas de texto son importantes

---

## 🔄 Exportar para Web

### Método 1: Exportar como PNG (Recomendado para web)
```
Archivo > Exportar > Exportar como...
- Formato: PNG
- Resolución: 72 ppi (web) o 300 ppi (impresión)
- Fondo: Transparente (si aplica)
```

### Método 2: Guardar como SVG optimizado
```
Archivo > Exportar > Exportar como...
- Formato: SVG
- Opciones:
  ✓ Decimales: 2
  ✓ Minificar
  ✓ Responsive
```

### Tamaños Recomendados para Exportar

**Logo:**
- `logo-400x400.png` - Web grande
- `logo-200x200.png` - Header
- `logo-64x64.png` - Favicon/ícono
- `logo.svg` - Versión vectorial para web moderna

**Íconos de Servicios:**
- `icono-roedor-128x128.png`
- `icono-insectos-128x128.png`
- `icono-cucaracha-128x128.png`
- `icono-sanitizacion-128x128.png`
- `icono-termitas-128x128.png`
- `icono-certificacion-128x128.png`

---

## 🎨 Ideas de Rediseño

### Estilos Sugeridos

1. **Minimalista Moderno**
   - Elimina gradientes, usa colores planos
   - Reduce detalles, formas más geométricas
   - Inspírate en: Flat Design

2. **Badge/Insignia Profesional**
   - Enfatiza el escudo y borde dorado
   - Añade ribbons y elementos heráldicos
   - Inspírate en: Logos de certificaciones

3. **Orgánico/Natural**
   - Añade más hojas y elementos vegetales
   - Formas más fluidas y orgánicas
   - Inspírate en: Empresas eco-friendly

4. **Industrial/Técnico**
   - Líneas rectas, ángulos precisos
   - Colores metálicos (grises, azules)
   - Inspírate en: Empresas de seguridad

---

## 📐 Dimensiones y Espaciado

### Logo Principal
- Canvas: 400x400px
- Área de seguridad: 20px desde bordes
- Escudo: ~300px altura
- Texto principal: 32px
- Texto secundario: 20px

### Íconos
- Canvas individual: 160x160px
- Área de diseño: 140x140px (padding 10px)
- Círculo de fondo: radio 60px
- Texto etiqueta: 12px

---

## ✅ Checklist Antes de Finalizar

- [ ] Todos los textos convertidos a contornos (Objeto > Expandir)
- [ ] Colores están en modo RGB (para web) o CMYK (para impresión)
- [ ] Eliminadas capas vacías o guías innecesarias
- [ ] Nombres de capas son descriptivos
- [ ] Probado en diferentes fondos (blanco, negro, verde)
- [ ] Exportado en todos los tamaños necesarios
- [ ] Versiones PNG tienen fondo transparente

---

## 🆘 Problemas Comunes

**Gradientes se ven mal al exportar:**
- Aumenta la resolución de exportación
- Usa rasterizar: Objeto > Rasterizar (300 dpi)

**Textos se ven borrosos:**
- Alinea a píxeles: Ver > Alinear a píxel
- Usa tamaños de fuente pares (16, 20, 24px)

**Archivo muy pesado:**
- Simplifica trazados: Objeto > Trazado > Simplificar
- Elimina puntos innecesarios
- Reduce complejidad de gradientes

**Colores se ven diferentes en navegador:**
- Asegúrate de usar modo RGB
- Guarda con perfil sRGB

---

## 📚 Recursos Adicionales

**Fuentes Recomendadas (Gratuitas):**
- Google Fonts: fonts.google.com
- Font Squirrel: fontsquirrel.com

**Inspiración de Logos:**
- Dribbble: dribbble.com/search/pest-control-logo
- Behance: behance.net/search/projects?search=pest+control

**Paletas de Colores:**
- Coolors: coolors.co
- Adobe Color: color.adobe.com

---

**¿Dudas?** Consulta la documentación de Illustrator o experimenta con las capas. Todos los elementos están organizados para ser fácilmente editables. ¡Buena suerte con tu rediseño! 🎨
