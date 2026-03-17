# DECISIONS

## Por qué Astro 6

- Astro 6 permite entregar HTML estático y muy poco JavaScript, ideal para una landing enfocada en performance, SEO y estabilidad visual.
- La composición por componentes `.astro` mantiene la implementación simple y legible.
- El deploy en Vercel queda directo y sin complejidad adicional.

## Por qué design tokens con CSS variables

- Figma sí expuso color, spacing, radius, sombras e icon sizes suficientes para armar una base de tokens sólida.
- Centralizar esos valores en `src/styles/tokens.css` evita valores mágicos y facilita ajustes finos posteriores.
- También deja el proyecto listo para escalar o refinar variantes sin rehacer estilos seccionales.

## Cómo se pensó la componentización

- `ui/` contiene primitives reutilizables: `Button`, `Badge`, `Card`, `Chip`, `InputField`, `Container`, `SectionHeader`, `Icon`, `Logo`.
- `sections/` encapsula bloques de composición: header, hero, beneficios, plataforma, compatibilidad, contacto y footer.
- La intención fue abstraer solo lo necesario para mantener consistencia y claridad, sin sobre-ingenierizar una landing simple.

## Cómo se abordó responsive

- Desktop parte del container observado en las referencias visuales: `1079px`.
- Los bloques de dos columnas se apilan en tablet/mobile.
- El header desktop no tenía una contraparte mobile explícita, así que se resolvió con `details/summary` accesible y ligero.
- Se cuidó ritmo vertical, orden visual y tamaño de CTA para que la adaptación se sienta intencional.

## Cómo se abordó accesibilidad

- Semántica estructural completa.
- Un solo `h1`.
- Formulario con labels, `aria-invalid`, mensajes por campo y feedback en `aria-live`.
- Focus visible y soporte a `prefers-reduced-motion`.
- Interacción básica completamente navegable con teclado.

## Qué se priorizó en la prueba

- Fidelidad visual razonable a las referencias disponibles.
- Código ordenado y mantenible.
- Performance realista.
- Responsive sólido.
- Accesibilidad básica bien resuelta.

## Qué valores o decisiones fueron inferidos

- Los tokens principales se reconstruyeron a partir de la captura de landing y el system design compartidos.
- Lo que siguió siendo inferido:
  - algunos detalles tipográficos finos
  - comportamiento mobile exacto
  - assets visuales finales del hero y del bloque informativo

## Placeholders usados

- Se usaron SVGs locales para el hero, la sección informativa y la imagen Open Graph.
- La intención fue mantener composición, tono y proporciones sin depender de assets remotos.
- Estos placeholders están pensados para reemplazarse fácilmente si más adelante se comparten assets finales.

## Formulario simulado

- No se proporcionó endpoint ni especificación de integración.
- Se decidió mantener validación cliente y feedback de éxito simulado, pero dejando explícito en interfaz que se trata de una demo.
- Así se conserva la experiencia interactiva sin prometer un backend inexistente.

## Mejoras para una siguiente iteración

- Sustituir placeholders por assets finales si se comparten.
- Afinar spacing/tipografía si se recibe una referencia más precisa para mobile.
- Conectar el formulario a un endpoint real.
- Añadir pruebas visuales y E2E automatizadas.
