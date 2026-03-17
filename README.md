# STP Landing

Landing page para STP construida como prueba técnica Front-End. El proyecto se planteó con un enfoque simple y sólido: generar una landing rápida, clara de mantener, con buena semántica HTML, responsive desde la base y con una estructura que permita escalar ajustes visuales sin reordenar todo el código.

## Stack del proyecto

- Astro 6
- TypeScript
- CSS moderno con variables CSS
- ESLint
- Prettier
- Vercel como destino de despliegue

## Por qué se eligió este stack

Se eligió Astro porque para una landing el objetivo principal es entregar HTML estático, poco JavaScript y una carga rápida. Eso permite priorizar performance, SEO, estabilidad visual y una base muy limpia para producción sin cargar complejidad innecesaria.

TypeScript se usó para dar estructura al contenido, tipar los datos de la landing y hacer más seguro el mantenimiento de componentes y props. En un proyecto pequeño esto evita errores simples y deja una base más clara si después crece.

CSS con variables se eligió para centralizar tokens visuales como color, spacing, radios, sombras y tipografía. En vez de repartir valores sueltos por toda la app, el sistema queda ordenado y permite ajustar la UI de forma consistente.

ESLint y Prettier se dejaron como parte del stack para mantener consistencia de código y una base fácil de revisar. Vercel encaja bien porque el proyecto compila como sitio estático y no requiere configuración adicional para esta iteración.

## Requisitos

- Node.js `>=22.12.0`
- npm

## Cómo correr el proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Levantar el entorno local

```bash
npm run dev
```

Servidor por defecto: [http://localhost:4321](http://localhost:4321)

### 3. Generar build de producción

```bash
npm run build
```

### 4. Previsualizar el build

```bash
npm run preview
```

### 5. Verificaciones disponibles

```bash
npm run check
npm run lint
npm run format:check
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Estructura del proyecto

```text
src/
  assets/
    images/
  components/
    sections/
    ui/
  data/
  layouts/
  pages/
  styles/
public/
  images/
```

## Por qué se definió esta estructura

La estructura separa responsabilidades de forma explícita para que la landing sea fácil de leer y modificar.

- `src/pages/` contiene las rutas, en este caso la entrada principal.
- `src/layouts/` encapsula la base compartida del documento.
- `src/components/ui/` agrupa piezas reutilizables pequeñas como botones, badges, cards o inputs.
- `src/components/sections/` reúne bloques completos de la landing, como hero, beneficios, plataforma o contacto.
- `src/data/landing.ts` concentra el contenido y metadatos para no mezclar copy con la composición visual.
- `src/styles/` reúne tokens, utilidades y estilos globales para mantener la UI consistente.

La decisión de dividir entre `ui` y `sections` responde a una idea simple: reutilizar lo pequeño y aislar lo compositivo. Así evitamos tanto la repetición como la sobre-ingeniería.

## Decisiones técnicas principales

### Render estático y mínimo JavaScript

La landing está pensada para aprovechar al máximo el render estático de Astro. El JavaScript se limita a lo realmente necesario para interacción básica, lo que mejora tiempos de carga y reduce complejidad operativa.

### Sistema visual basado en tokens

Los valores visuales principales viven en `src/styles/tokens.css`. Esto evita valores mágicos en los componentes y ayuda a sostener consistencia visual en espaciado, color, tipografía, sombras y tamaños.

### Datos desacoplados de la vista

El contenido principal se concentra en `src/data/landing.ts`. Esto hace que cambiar textos, métricas, navegación o bloques informativos no obligue a tocar la composición de cada sección.

### Componentización moderada

No se buscó abstraer por abstracción. Los componentes pequeños se reutilizan donde tiene sentido y las secciones encapsulan bloques completos de interfaz. La meta fue mantener un código claro, no convertir una landing simple en un sistema excesivamente complejo.

### Preparado para despliegue simple

El proyecto se dejó listo para desplegarse como sitio estático en Vercel sin adaptadores adicionales. Eso reduce fricción y mantiene el setup alineado con el tipo de producto que se está resolviendo.

## Criterios de implementación

### Accesibilidad

- Estructura semántica con `header`, `nav`, `main`, `section`, `form` y `footer`.
- Jerarquía de encabezados consistente y un único `h1`.
- Campos con labels asociados y feedback accesible.
- Estados de foco visibles.
- Soporte para `prefers-reduced-motion`.
- Navegación mobile resuelta con una opción ligera y accesible.

### Responsive

- La composición desktop parte del ancho observado en diseño y se adapta sin romper ritmo visual.
- Los bloques de dos columnas se apilan en tablet y mobile.
- Se priorizó que la interfaz conserve intención visual, no solo que “quepa” en pantalla.

### Performance

- Sitio mayormente estático.
- Dependencias mínimas.
- Assets locales.
- HTML simple y directo.
- Menor carga de JavaScript posible para el tipo de experiencia.

## Consideraciones del proyecto

- El formulario está planteado como demo de interacción y validación de frontend.
- Los placeholders visuales locales permiten mantener composición y proporciones mientras no existan assets finales.
- La base quedó preparada para reemplazar contenido, conectar integraciones reales o ampliar secciones sin rehacer la arquitectura.

## Despliegue

La landing ya está desplegada en Vercel y disponible en:

- [https://landing-stp.vercel.app](https://landing-stp.vercel.app)

El proyecto se publica como sitio estático usando la configuración estándar de Astro en Vercel, sin necesidad de un adapter adicional para esta versión.
