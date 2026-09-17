# AURA Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir localmente una landing page responsive, accesible e inmersiva para AURA que demuestre preventa, selección de acabado, especificaciones interactivas, galería y suscripción validada.

**Architecture:** La página seguirá siendo una aplicación estática de una sola vista con HTML semántico, un sistema visual completo en CSS y JavaScript progresivo sin dependencias. Las funciones puras de datos y validación se exportarán condicionalmente para pruebas con `node:test`; las interacciones DOM se iniciarán solo cuando exista `document`.

**Tech Stack:** HTML5, CSS3, JavaScript ES2020, Node.js built-in test runner, IntersectionObserver, recursos raster locales.

**Spec:** `docs/superpowers/specs/2026-09-16-aura-landing-design.md`

## Global Constraints

- Trabajar únicamente en local; no inicializar Git, crear commits, publicar ni desplegar.
- No incorporar frameworks ni dependencias de ejecución.
- Mantener la dirección aprobada **Lujo frío**: negro, plata, humo y blanco frío, sin cian ni violeta como acentos principales.
- Usar una única intención de CTA de preventa con la etiqueta `Reservar ahora`.
- Implementar Silver Mist, Graphite y Polar White como acabados seleccionables.
- Mantener toda captación de correo en memoria; no transmitir datos.
- Cumplir contraste WCAG AA, navegación por teclado, foco visible y `prefers-reduced-motion`.
- Mantener el hero dentro del primer viewport de escritorio con el CTA visible.
- No atribuir reseñas inventadas a medios reales.

## File Map

- `index.html`: estructura semántica, copy final, controles accesibles, modal visual y formulario.
- `estilos.css`: tokens, layout, responsive, estados, animaciones y reducción de movimiento.
- `script.js`: catálogos de acabados/especificaciones, funciones puras, interacciones DOM y validación.
- `tests/script.test.js`: pruebas unitarias sin dependencias para catálogos y validación.
- `assets/aura-hero-silver.jpg`: render principal optimizado sobre fondo neutro.
- `assets/aura-office.jpg`: escena de uso en oficina creativa.
- `assets/aura-travel.jpg`: escena de uso durante un viaje premium.
- `assets/aura-studio.jpg`: escena de uso en estudio musical.

---

### Task 1: Product Visual System

**Files:**
- Create: `assets/aura-hero-silver.jpg`
- Create: `assets/aura-office.jpg`
- Create: `assets/aura-travel.jpg`
- Create: `assets/aura-studio.jpg`

**Interfaces:**
- Consumes: dirección `Lujo frío` y descripción de recursos de la especificación.
- Produces: cuatro rutas raster estables usadas directamente por `index.html` y `estilos.css`.

- [ ] **Step 1: Generate the canonical product render**

Usar la herramienta de generación de imágenes con este contenido exacto como base creativa: auriculares over-ear inalámbricos premium AURA, aluminio plateado satinado, diadema delgada continua, copas ovaladas con almohadillas gris grafito, sin logotipos de terceros, vista tres cuartos flotante, iluminación de estudio fría, fondo gris claro uniforme, diseño industrial realista, alta fidelidad material, composición horizontal con espacio negativo a la izquierda. Guardar el resultado optimizado en `assets/aura-hero-silver.jpg`.

- [ ] **Step 2: Inspect the canonical render**

Abrir el archivo generado y comprobar visualmente: ambas copas completas, diadema sin deformaciones, ausencia de texto ilegible, fondo utilizable y suficiente resolución para ocupar aproximadamente la mitad de un viewport de escritorio.

- [ ] **Step 3: Generate three consistent lifestyle scenes**

Usar el render canónico de `assets/aura-hero-silver.jpg` como referencia visual en las tres generaciones:

```text
Office: same AURA headphones on a minimalist architecture studio desk, brushed aluminum laptop, concrete and glass, cool daylight, restrained silver-grey palette, editorial product photography, 4:5 composition.
Travel: same AURA headphones worn by a traveler beside a premium train window, soft motion outside, cool overcast light, silver-grey palette, cinematic editorial photography, 4:5 composition.
Studio: same AURA headphones resting beside a professional mixing console in a dark recording studio, narrow neutral practical lights, graphite and silver palette, cinematic editorial photography, 4:5 composition.
```

Guardar optimizados como `assets/aura-office.jpg`, `assets/aura-travel.jpg` y `assets/aura-studio.jpg`.

- [ ] **Step 4: Inspect all scenes as a set**

Abrir los cuatro recursos juntos y verificar continuidad en forma de copas, diadema, color de aluminio y proporciones. Regenerar cualquier escena donde el producto parezca pertenecer a otra familia.

### Task 2: Semantic Page Structure

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: las cuatro rutas creadas por Task 1.
- Produces: IDs `tecnologia`, `especificaciones`, `experiencia`, `reservar`; controles con atributos `data-finish`, `data-spec`, `data-scene`; formulario `#waitlist-form`; modal `#film-dialog`.

- [ ] **Step 1: Build the document head and global landmarks**

Cambiar `lang` a `es`, añadir descripción, `theme-color`, precarga del hero y fuente sans local del sistema. Crear un enlace de salto, `header`, `main` y `footer`. La navegación debe usar enlaces internos y un botón móvil con `aria-expanded="false"` y `aria-controls="primary-nav"`.

- [ ] **Step 2: Build the hero**

Crear una sección `#inicio` con el copy:

```text
Eyebrow: AURA ONE / SMART SOUND SYSTEM
H1: El sonido que se adapta a tu mundo.
Body: Cancelación inteligente por IA y acústica Hi-Fi, afinadas para cada lugar.
Primary CTA: Reservar ahora · 20% OFF
Secondary control: Ver video
```

Añadir `<img id="hero-product" src="assets/aura-hero-silver.jpg">`, el nombre `#finish-name` y tres botones `data-finish="silver|graphite|white"` dentro de un grupo con etiqueta accesible.

- [ ] **Step 3: Build value and specification sections**

Crear `#tecnologia` con cuatro artículos y los valores exactos de la especificación. Crear `#especificaciones` con cuatro botones `data-spec="frequency|bluetooth|weight|drivers"`, un valor `#spec-value`, un título `#spec-title`, una descripción `#spec-description` y un marcador visual decorativo. El primer botón debe iniciar con `aria-selected="true"`.

- [ ] **Step 4: Build gallery and editorial reviews**

Crear `#experiencia` con tres figuras que usen las rutas Office, Travel y Studio. Cada figura debe incluir un texto alternativo concreto y un rótulo visible. Añadir tres citas de medios ficticios `FORM`, `SIGNAL` y `OBJECT`, con una nota visual `Concepto editorial · Demo`.

- [ ] **Step 5: Build conversion section and modal**

Crear `#reservar` con un formulario `novalidate`, etiqueta visible, `input type="email" id="email"`, mensaje `#email-error`, región `#form-status` con `aria-live="polite"` y botón `Reservar ahora`. Crear `<dialog id="film-dialog">` con una experiencia visual local abstracta, texto explicativo y botón de cierre.

- [ ] **Step 6: Check semantic output**

Ejecutar:

```bash
rg -n 'lang="es"|id="tecnologia"|id="especificaciones"|id="experiencia"|id="reservar"|id="waitlist-form"|id="film-dialog"' index.html
```

Expected: una coincidencia para cada estructura requerida y ninguna sección ausente.

### Task 3: Cold-Luxury Responsive Design

**Files:**
- Modify: `estilos.css`

**Interfaces:**
- Consumes: todas las clases e IDs estructurales creados en Task 2.
- Produces: variables CSS `--ink`, `--smoke`, `--silver`, `--paper`, `--muted`, `--line`, layouts desktop/mobile y estados `.is-visible`, `.is-success`, `[aria-selected="true"]`.

- [ ] **Step 1: Establish reset, tokens and typography**

Definir exactamente una paleta fría y neutral, escalas fluidas con `clamp()`, contenedor máximo de 1440 px, botones píldora y tarjetas/paneles con radio consistente de 16 px. Incluir `box-sizing`, estilo de selección, foco visible y utilitario `.sr-only`.

- [ ] **Step 2: Style navigation and first viewport**

Limitar la cabecera a 72 px en escritorio. Construir el hero con grid asimétrico, altura `calc(100svh - 72px)` y mínimo de 640 px; asegurar un H1 de máximo dos líneas y CTA visible. Usar un halo radial gris, grano sutil con pseudo-elemento y sombra fría bajo el producto.

- [ ] **Step 3: Style the section layouts without repetition**

Usar familias distintas: composición editorial asimétrica para features; panel oscuro dividido para specs; mosaico fotográfico 2+1 para experiencias; bloque tipográfico horizontal para reseñas; composición centrada de alta conversión para preventa. No repetir una cuadrícula de tarjetas genérica.

- [ ] **Step 4: Add interactive and motion states**

Definir transiciones para botones, acabados, pestañas, modal, apariciones y flotación. `.reveal` debe iniciar con opacidad y desplazamiento moderados; `.reveal.is-visible` debe restaurarlos. Los estados `:hover`, `:active`, `:focus-visible`, error y éxito deben ser distinguibles sin depender solo del color.

- [ ] **Step 5: Implement explicit tablet and mobile fallbacks**

En `@media (max-width: 900px)`, convertir hero y specs a una columna, ocultar enlaces dentro del menú cerrado y desplegarlos con `.nav-open`. En `@media (max-width: 640px)`, reducir padding, convertir galería a una columna, apilar formulario y limitar tamaños de texto. Usar `min-height: 100svh` donde corresponda para evitar el bug de `100vh` móvil.

- [ ] **Step 6: Implement reduced-motion fallback**

Añadir:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

### Task 4: Tested Interaction Model

**Files:**
- Create: `tests/script.test.js`
- Modify: `script.js`

**Interfaces:**
- Consumes: controles DOM definidos en Task 2 y estados CSS definidos en Task 3.
- Produces: `isValidEmail(value): boolean`, `getFinishById(id): Finish|null`, `getSpecById(id): Spec|null`, `initAura(document): void` y export condicional para Node.

- [ ] **Step 1: Write failing tests for pure behavior**

Crear `tests/script.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, getFinishById, getSpecById } = require('../script.js');

test('validates realistic email addresses', () => {
  assert.equal(isValidEmail('audio@aura.example'), true);
  assert.equal(isValidEmail('audio+uy@aura.example'), true);
});

test('rejects empty and malformed email addresses', () => {
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('audio@'), false);
  assert.equal(isValidEmail('audio aura@example.com'), false);
});

test('returns a supported finish and rejects unknown ids', () => {
  assert.equal(getFinishById('silver').name, 'Silver Mist');
  assert.equal(getFinishById('unknown'), null);
});

test('returns exact specification data', () => {
  assert.equal(getSpecById('bluetooth').value, '5.4');
  assert.equal(getSpecById('drivers').value, '40 mm');
  assert.equal(getSpecById('unknown'), null);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/script.test.js`

Expected: FAIL because `script.js` does not export the required functions.

- [ ] **Step 3: Implement catalogs and pure functions**

Definir `FINISHES` con claves `silver`, `graphite`, `white`; cada objeto tendrá `id`, `name`, `image`, `filter` y `ambient`. Definir `SPECS` con claves `frequency`, `bluetooth`, `weight`, `drivers`; cada objeto tendrá `id`, `label`, `value`, `description`. Implementar búsqueda segura y validación con una expresión conservadora que rechace espacios.

Al final del archivo incluir:

```js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isValidEmail, getFinishById, getSpecById };
}
```

- [ ] **Step 4: Run unit tests to verify they pass**

Run: `node --test tests/script.test.js`

Expected: 4 tests, 4 passed, 0 failed.

- [ ] **Step 5: Implement DOM initialization**

Implementar `initAura(doc)` con listeners para menú móvil, selector de acabado, tabs de especificaciones, modal, formulario y enlaces internos. Cada consulta opcional debe validarse antes de usarse para conservar mejora progresiva. Invocar solo con:

```js
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => initAura(document));
}
```

- [ ] **Step 6: Implement scroll reveals and light parallax**

Si existe `IntersectionObserver`, observar `.reveal` y añadir `.is-visible`, desconectando cada elemento tras revelarlo. Aplicar parallax únicamente cuando `matchMedia('(prefers-reduced-motion: no-preference)')` coincida; limitar el desplazamiento a un máximo de 18 px mediante `requestAnimationFrame`.

- [ ] **Step 7: Re-run unit tests after DOM work**

Run: `node --test tests/script.test.js`

Expected: 4 tests, 4 passed, 0 failed, sin intento de acceder a `document` desde Node.

### Task 5: Browser Verification and Polish

**Files:**
- Modify if required: `index.html`
- Modify if required: `estilos.css`
- Modify if required: `script.js`

**Interfaces:**
- Consumes: entrega completa de Tasks 1–4.
- Produces: landing verificada en navegador local, sin errores conocidos en las rutas principales.

- [ ] **Step 1: Start the local server**

Run:

```bash
/Users/gonchi/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 -m http.server 8000
```

Expected: servidor disponible en `http://localhost:8000`.

- [ ] **Step 2: Verify the desktop experience**

Abrir a 1440×900 y comprobar: hero dentro del primer viewport; nav en una sola línea; selector de tres acabados; cuatro specs; tres escenas; modal abre/cierra; CTA navega al formulario; ningún texto o botón queda cortado.

- [ ] **Step 3: Verify form state cycle**

Enviar el formulario vacío y esperar error de campo requerido. Enviar `audio@` y esperar error de formato. Enviar `audio@aura.example` y esperar sustitución por mensaje de éxito, foco movido a la confirmación y ausencia de solicitudes de red.

- [ ] **Step 4: Verify keyboard and mobile behavior**

Navegar con Tab y Enter por menú, acabados, specs, modal y formulario. Comprobar a 390×844 que no exista overflow horizontal, el menú se abra y cierre, el formulario no provoque zoom y todas las imágenes mantengan proporción.

- [ ] **Step 5: Verify reduced motion and no-JavaScript fallback**

Emular `prefers-reduced-motion: reduce` y comprobar que no haya flotación, parallax ni reveals ocultos. Desactivar JavaScript y comprobar que todo el contenido permanezca visible, los enlaces internos funcionen y el formulario conserve una estructura comprensible aunque no pueda completar la demo.

- [ ] **Step 6: Run final automated checks**

Run:

```bash
node --test tests/script.test.js
rg -n 'lorem ipsum|TEMP_MARKER|unfinished copy' index.html estilos.css script.js tests assets docs/superpowers
```

Expected: todas las pruebas pasan y la búsqueda no devuelve placeholders.
