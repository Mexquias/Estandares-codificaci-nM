# BitNova — Portal de Descubrimientos Tecnológicos

BitNova es un sitio web interactivo y responsive que presenta los descubrimientos tecnológicos más revolucionarios, desde inteligencia artificial hasta exploración espacial.

by: MEXQUIAS

## Características

- **4 temas de color**: Oscuro, Claro, Neón y Océano (persistentes en localStorage)
- **Tema automático**: Cambia según la hora del día (claro 7–19h / oscuro 19–7h)
- **3D Tilt**: Las tarjetas siguen el movimiento del mouse con perspectiva 3D
- **3D Parallax**: El hero responde al movimiento del mouse con capas de profundidad
- **Partículas animadas**: Fondo interactivo con canvas en la sección hero
- **Filtros por categoría**: Filtra descubrimientos por IA, Cuántica, Biotech, etc.
- **Lightbox**: Haz clic en imágenes para verlas a tamaño completo
- **Contadores animados**: Las estadísticas cuentan desde 0 al hacer scroll
- **Barra de progreso**: Indicador de lectura en la parte superior
- **Animaciones scroll-reveal**: Los elementos aparecen al hacer scroll
- **Diseño responsive**: Adaptado a móvil, tablet y escritorio
- **Accesibilidad**: ARIA labels, roles, foco visible y `prefers-reduced-motion`

## Secciones

1. **Hero** — Introducción con efecto parallax y partículas
2. **Descubrimientos** — 8 tarjetas con imagen sobre avances tecnológicos (2025–2026)
3. **Tecnologías Emergentes** — 6 tendencias que definirán la próxima década
4. **Artículo Destacado** — Análisis sobre la superinteligencia
5. **Cronología** — Línea del tiempo desde la escritura sumeria hasta 2026
6. **Innovadores** — Perfiles de Elon Musk, Demis Hassabis, Jennifer Doudna y Sam Altman
7. **Estadísticas** — Datos globales con contador animado
8. **Newsletter** — Formulario de suscripción

## Tecnologías usadas

- HTML5 semántico
- CSS3 (custom properties, grid, flexbox, animaciones, transforms 3D)
- JavaScript vanilla (Intersection Observer, Canvas API, eventos 3D)
- Google Fonts (Outfit, Inter, UnifrakturMaguntia)
- Unsplash (imágenes)

## Cómo usar

Abrí `index.html` en cualquier navegador moderno:

```
start index.html
```

## Requisitos

Navegador actualizado con soporte para CSS Grid, Custom Properties, `backdrop-filter` y ES6.

## Estructura

```
E:\PAGINA\
├── index.html   (estructura HTML semántica)
├── styles.css   (estilos, temas, animaciones, responsive)
├── script.js    (lógica JS en IIFE con 'use strict')
└── README.md
```
