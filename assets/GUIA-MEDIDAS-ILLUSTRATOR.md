# Guía de Medidas para Diseño en Illustrator

## 🎯 Medidas Base Recomendadas

### **CANVAS PRINCIPAL: 375 x 812 px**

Esta es la medida estándar de iPhone X/11/12/13 y coincide casi perfectamente con tu código actual (376px).

```
Canvas:           375 x 812 px
Contenedor seguro: 343 x 748 px
Márgenes:         16 px laterales
```

---

## 📐 Setup de Illustrator

### 1. Crear Nuevo Documento

```
File > New

Name: Control-Plagas-Design
Profile: Web
Width: 375 px
Height: 812 px
Units: Pixels
Orientation: Portrait
Color Mode: RGB Color
Raster Effects: Screen (72 PPI)
```

### 2. Crear Múltiples Artboards

```
Artboard Tool (Shift + O) o desde panel Artboards

Artboard 1: Mobile-Base
- 375 x 812 px
- Para diseño principal

Artboard 2: Mobile-Scroll
- 375 x 2500 px
- Para landing pages largas

Artboard 3: Tablet
- 768 x 1024 px
- iPad estándar

Artboard 4: Desktop
- 1440 x 900 px
- Escritorio HD
```

---

## 🎨 Sistema de Grilla 8PT

### Grid Settings

```
View > Show Grid
Edit > Preferences > Guides & Grid

Gridline every: 8 px
Subdivisions: 2
```

### Columnas Mobile (4 columnas)

```
Total width:  343 px (área segura)
Columns:      4
Gutter:       16 px
Column width: 73.75 px cada una

Distribución:
[16px] | [73.75] [16] [73.75] [16] [73.75] [16] [73.75] | [16px]
```

---

## 📏 Zonas y Márgenes

### Márgenes de Seguridad

```css
/* Mobile 375px */
margin-left:   16px
margin-right:  16px
margin-top:    16px (+ header)
margin-bottom: 16px

/* Contenedor útil */
width:  343px (375 - 32)
height: 748px (812 - 64 header)
```

### Header Zone

```
Position: 0, 0
Size:     375 x 64 px
Safe:     343 x 48 px (con márgenes)

Elementos:
- Logo/Texto:  280 x 32 px (left)
- Menu button: 55 x 32 px (right)
- Gap:         16 px entre elementos
```

### Content Area

```
Position: 16, 64
Size:     343 x 748 px
Padding:  16px todos los lados

Esta es tu zona de trabajo principal
```

### Footer Zone (opcional)

```
Position: 0, 748
Size:     375 x 64 px
```

---

## 📦 Componentes y Medidas

### Tipografía

```
Hero Title (Desktop):
- Font size: 72-96 px
- Line height: 0.95
- Letter spacing: -2px
- Weight: 900

Hero Title (Mobile):
- Font size: 36-48 px
- Line height: 1.0
- Letter spacing: -1px
- Weight: 900

Body Text:
- Font size: 14-16 px (desktop)
- Font size: 12-14 px (mobile)
- Line height: 1.6-1.8
- Max width: 600-700 px

Small Text:
- Font size: 10-12 px
- Line height: 1.5
```

### Botones

```
Button Large (Mobile):
- Width: 343 px (full width)
- Height: 48 px
- Border radius: 4 px
- Font size: 12 px
- Font weight: 600

Button Medium:
- Width: 160 px
- Height: 48 px
- Border radius: 4 px

Button Small:
- Width: 120 px
- Height: 40 px
```

### Cards

```
Card Mobile:
- Width: 343 px
- Height: 200-300 px
- Padding: 16 px
- Border radius: 8 px

Card Tablet (2 columnas):
- Width: 352 px (736 / 2 - 16 gap)
- Height: 250 px

Card Desktop (3 columnas):
- Width: 400 px
- Height: 300 px
```

### Imágenes

```
Hero Image Mobile:
- Width: 343 px
- Height: 200-250 px
- Aspect ratio: 16:9 o 4:3

Hero Image Desktop:
- Width: 1280 px (contenedor max)
- Height: 500-600 px
- Aspect ratio: 21:9 o 16:9

Thumbnail/Card Image:
- Width: 343 px (mobile)
- Height: 200 px
- Aspect ratio: 16:9
```

---

## 🎯 Escalado a Diferentes Breakpoints

### Mobile → Tablet (768px)

```
Scale factor: 2.05x (768 / 375)

Contenedor:
- Old: 343 px
- New: 736 px (768 - 32 margins)

Layout:
- Cambia de 1 columna a 2 columnas
- Gap aumenta: 16px → 24px
- Padding aumenta: 16px → 24px
```

### Mobile → Desktop (1440px)

```
Scale factor: 3.84x (1440 / 375)

Contenedor max:
- 1280 px centered
- Margins: 80 px laterales

Layout:
- Cambia a 3-4 columnas
- Gap: 32px
- Padding: 80-120 px verticales
```

---

## 🛠️ Herramientas de Illustrator

### Guías Útiles

```
View > Rulers (Cmd + R)
View > Show Grid (Cmd + ')
View > Guides > Make Guides (Cmd + 5)

Crear guías en:
- 16px (margen izquierdo)
- 359px (margen derecho)
- 187.5px (centro vertical)
- 64px (fin del header)
- 748px (inicio del footer)
```

### Alinear a Píxeles

```
View > Snap to Pixel (Alt + Cmd + ')

IMPORTANTE: Siempre activo para diseño web
Evita bordes borrosos al exportar
```

### Exportar para Web

```
File > Export > Export for Screens...

Format: PNG
Scale: 1x, 2x, 3x
Suffix: @1x, @2x, @3x

O usar:

File > Export > Save for Web (Legacy)
- PNG-24 con transparencia
- Optimized
- Convert to sRGB
```

---

## 📱 Tabla de Referencia Rápida

| Breakpoint | Width | Container | Margins | Columns | Gap |
|------------|-------|-----------|---------|---------|-----|
| Mobile     | 375px | 343px     | 16px    | 1-2     | 16px|
| Tablet     | 768px | 736px     | 16px    | 2-3     | 24px|
| Desktop    | 1440px| 1280px    | 80px    | 3-4     | 32px|

---

## 🎨 Capas Recomendadas en Illustrator

```
Estructura de capas:

📁 GUIDES (ocultar al exportar)
   - Margins
   - Grid
   - Safe areas

📁 HEADER
   - Logo/Text
   - Menu button

📁 CONTENT
   - Hero section
   - Text blocks
   - Images
   - Cards
   - Buttons

📁 FOOTER
   - CTA
   - Info

📁 BACKGROUND
   - Colors
   - Patterns
```

---

## ✅ Checklist Pre-Exportar

- [ ] Todas las formas alineadas a píxel
- [ ] Textos convertidos a outline (si necesario)
- [ ] Capa GUIDES oculta
- [ ] Colores en modo RGB
- [ ] Exportar a 1x, 2x, 3x
- [ ] Nombres de archivo descriptivos
- [ ] Verificar márgenes de 16px

---

## 🚀 Workflow Recomendado

1. **Diseñar en Mobile First** (375px)
2. **Validar proporciones** en grilla 8pt
3. **Duplicar artboard** y escalar a Tablet
4. **Ajustar layout** para 2 columnas
5. **Duplicar a Desktop** y ampliar a 3-4 columnas
6. **Exportar assets** en múltiples resoluciones
7. **Documentar medidas** para desarrollo

---

## 📎 Archivos de Referencia

- `template-illustrator.svg` - Template con guías
- `logo-control-plagas.svg` - Logo editable
- `iconos-servicios.svg` - Íconos del sitio

---

**Tip Pro:** Usa el plugin **Illustrator to Code** o exporta con **Specifications** activadas para obtener medidas exactas automáticamente.

---

¿Necesitas más ayuda? Consulta la documentación oficial de Adobe Illustrator o el archivo `template-illustrator.svg` que incluye todas las guías visuales.
