# AURA — Landing page de lanzamiento

## Objetivo

Construir una landing page inmersiva para presentar los auriculares inalámbricos AURA, impulsar la preventa y captar correos para la lista de espera. La entrega será una demo frontend completa, sin backend, con validación local y estado de suscripción exitoso.

## Dirección creativa

La dirección aprobada es **Lujo frío**: una expresión industrial, sobria y tecnológica basada en negro, plata, humo y blanco frío. El producto debe sentirse como una pieza de ingeniería de precisión, no como un accesorio gamer. La composición usará mucho espacio negativo, tipografía sans serif contemporánea, contraste alto y luz controlada.

El sitio no usará cian o violeta como acentos principales. La acción se distinguirá mediante contraste tonal: superficies claras sobre fondos oscuros y negro sobre plata en secciones luminosas. El sistema de bordes será sobrio, con radios pequeños o medios consistentes y botones tipo píldora.

## Arquitectura técnica

La implementación conservará la base existente:

- `index.html` para estructura semántica y contenido.
- `estilos.css` para el sistema visual, responsive y animaciones.
- `script.js` para interacciones, validación y estados.
- Una carpeta local de recursos para las imágenes generadas del producto y sus escenarios.

No se incorporarán frameworks ni dependencias de ejecución. El sitio deberá poder abrirse como una página estática y también servirse con cualquier servidor HTTP sencillo.

## Estructura de la experiencia

### Navegación

Cabecera compacta, sticky y translúcida. Contendrá la marca AURA, enlaces internos a Tecnología, Especificaciones y Experiencia, además de un CTA `Reservar ahora`. En móvil, los enlaces se agruparán en un menú accesible controlado por botón.

### Hero

El primer viewport usará una composición asimétrica: contenido a la izquierda y una imagen protagonista de los auriculares a la derecha. Incluirá el titular aprobado, un subtítulo breve, el CTA de reserva y el control `Ver video`. El producto tendrá una flotación casi imperceptible y responderá al selector de acabado.

El selector ofrecerá tres acabados: Silver Mist, Graphite y Polar White. Cambiará la imagen o tratamiento visual del producto, el nombre del acabado y la atmósfera tonal sin alterar la paleta global.

### Propuesta de valor

Las cuatro prestaciones se presentarán en una composición editorial asimétrica, con variación de escala y recursos visuales. Se evitará una cuadrícula uniforme de tarjetas. Los mensajes serán:

- Cancelación de ruido adaptativa por IA.
- 40 horas de batería y cuatro horas de uso con diez minutos de carga.
- Audio espacial de 360 grados con seguimiento de cabeza.
- Aluminio aeronáutico y espuma con memoria.

### Especificaciones interactivas

Un panel mostrará una vista de producto junto a cuatro controles seleccionables: respuesta de frecuencia, Bluetooth 5.4, peso y drivers de titanio de 40 mm. Al seleccionar una especificación, el panel actualizará su valor, descripción y marcador visual. La interacción funcionará con mouse y teclado y expondrá correctamente el estado activo.

### Modos de uso

Una galería presentará tres escenas: Oficina, Viaje y Estudio. En escritorio se usará una composición amplia de ritmo editorial; en móvil se convertirá en una secuencia vertical o carrusel con controles accesibles. Cada imagen tendrá texto alternativo descriptivo.

### Social proof

Las reseñas se tratarán como citas editoriales, no como tarjetas de testimonios genéricas. Se usarán tres medios ficticios claramente presentados como parte de la demo, con una cita principal y dos menciones secundarias. No se atribuirán afirmaciones a medios reales.

### Conversión y footer

El cierre recuperará el fondo oscuro e incluirá el beneficio de preventa del 20 %, un campo de correo y un CTA consistente. El formulario validará:

- Campo vacío.
- Formato de correo inválido.
- Envío correcto.

Los errores aparecerán debajo del campo, asociados mediante atributos accesibles. El envío exitoso reemplazará el formulario por una confirmación animada y mantendrá el dato únicamente en memoria durante la sesión. No se enviará información a ningún servicio externo.

## Movimiento e interacción

Las animaciones apoyarán la jerarquía sin dominarla:

- Flotación suave en el render del hero.
- Aparición progresiva de bloques mediante `IntersectionObserver`.
- Parallax leve en imágenes de gran formato.
- Transiciones de opacidad y escala al cambiar acabado o especificación.
- Feedback táctil en botones y controles.

Todas las animaciones se desactivarán o simplificarán con `prefers-reduced-motion: reduce`. Ninguna interacción esencial dependerá exclusivamente del movimiento.

## Responsive y accesibilidad

El hero cabrá en el primer viewport de escritorio con CTA visible. Por debajo de 768 px, las composiciones multicolumna se convertirán en una sola columna y el producto aparecerá antes o después del copy según preserve mejor la lectura. La navegación, selectores, especificaciones, galería y formulario serán operables mediante teclado.

Se usará HTML semántico, foco visible, contraste WCAG AA, etiquetas persistentes en formularios, regiones `aria-live` para resultados y textos alternativos en las imágenes. Los CTAs no se partirán en dos líneas.

## Recursos visuales

La landing necesitará cuatro recursos raster generados específicamente para la marca:

1. Render principal de auriculares en acabado plata, sobre fondo transparente o gris neutro.
2. Auriculares en una oficina de arquitectura o estudio creativo.
3. Auriculares en un entorno de viaje premium.
4. Auriculares en un estudio de producción musical.

Los recursos compartirán geometría de producto, materiales, iluminación y proporciones para mantener continuidad visual.

## Comportamiento ante errores

Si JavaScript no está disponible, el contenido seguirá siendo legible y los enlaces internos funcionarán. Los controles interactivos mostrarán un estado inicial válido. Las imágenes tendrán dimensiones reservadas para evitar saltos de layout y fondos de respaldo coherentes con la composición.

## Verificación

La entrega se comprobará en anchos móvil, tablet y escritorio. Se verificarán la navegación por teclado, los estados del selector de acabado, el panel de especificaciones, la apertura y cierre del video, los tres estados del formulario y la reducción de movimiento. También se revisará la consola del navegador y el comportamiento sin JavaScript.

## Fuera de alcance

- Backend, base de datos o integración con CRM.
- Procesamiento real de pagos o reservas.
- Reproducción de un video externo; la demo usará una experiencia visual local.
- Panel administrativo o analítica.
