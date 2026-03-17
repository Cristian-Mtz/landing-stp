# STP Landing

Landing page de alta fidelidad para una prueba técnica Front-End, implementada con Astro 6 a partir de referencias visuales y un sistema de diseño traducido a design tokens CSS. El objetivo fue entregar una solución ligera, semántica, accesible y lista para producción.

## Stack elegido

- Astro 6
- TypeScript
- CSS moderno con variables CSS
- Componentes `.astro` reutilizables
- Sitio estático listo para deploy en Vercel

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Servidor local por defecto: `http://localhost:4321`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Verificación de tipos

```bash
npm run check
```

## Deploy en Vercel

1. Importa el repositorio en Vercel.
2. Deja la configuración por defecto para Astro.
3. Si hace falta, usa `npm run build` como `Build Command`.
4. Publica como sitio estático.

No se requiere adapter adicional en esta iteración.

## Estructura del proyecto

```text
src/
  components/
    ui/
    sections/
  data/
  layouts/
  pages/
  styles/
public/
  images/
```

## Principales decisiones técnicas

- Astro 6 se eligió para maximizar HTML estático, reducir JavaScript y simplificar el deploy.
- El sistema visual se concentró en `src/styles/tokens.css` para evitar valores mágicos y asegurar consistencia.
- La UI se dividió entre primitives reutilizables (`ui`) y composición de bloques (`sections`) para abstraer solo donde aporta claridad.
- El contenido estructural vive en `src/data/landing.ts` para desacoplar copy y layout.
- El formulario usa validación cliente accesible y submit simulado, explicado como demo al no existir backend provisto.

## Enfoque de accesibilidad

- Semántica con `header`, `nav`, `main`, `section`, `form` y `footer`.
- Un solo `h1` y jerarquía consistente de headings.
- Labels asociados por campo.
- `aria-invalid`, mensajes de error y `aria-live` para feedback del formulario.
- Focus visible y soporte para `prefers-reduced-motion`.
- Navegación mobile accesible con `details/summary`.

## Enfoque responsive

- Desktop basado en el container de `1079px` observado en las referencias visuales.
- Hero, plataforma y contacto se apilan en una sola columna desde tablet.
- Header simplificado en mobile.
- Footer en stack vertical en pantallas pequeñas.
- Se ajustó densidad, ritmo y tipografía para mantener intención visual, no solo evitar roturas.

## Enfoque de performance

- Sitio mayormente estático.
- JavaScript limitado a la validación del formulario.
- Sin dependencias visuales pesadas.
- SVGs locales para placeholders y OG image.
- Dimensiones explícitas para reducir layout shift.

## Mejoras futuras

- Reemplazar placeholders por assets finales si se comparten.
- Afinar medidas tipográficas si se recibe una referencia más precisa.
- Conectar el formulario a un endpoint real.
- Añadir pruebas visuales y E2E automatizadas.
- Integrar analítica real si la landing evoluciona a un contexto productivo.

## Documentación adicional

Las decisiones técnicas y las inferencias derivadas de trabajar con referencias visuales están documentadas en [DECISIONS.md](./DECISIONS.md).
