# Evidencias RA1 · Festival React

## Del HTML a la tarjeta

1. El navegador lee `index.html`, crea el nodo `#root` y carga el módulo `/src/main.jsx`.
2. `main.jsx` usa `createRoot` para montar `App` dentro de ese nodo.
3. `App` importa `App.css`, renderiza `Cabecera` y entrega el objeto `concierto` a `ConciertoCard` mediante una prop.
4. La tarjeta lee artista, género y horario. Al pulsar el botón, React ejecuta `probarClic`, escribe en la consola y actualiza el mensaje mediante el estado.

| Tecnología | Función |
| --- | --- |
| HTML | Define el documento inicial y la raíz donde se monta React. |
| CSS | Controla la presentación de la cabecera, la tarjeta y el botón. |
| JSX | Permite describir la interfaz en los componentes e insertar expresiones JavaScript entre llaves. Vite transforma JSX en JavaScript. |
| JavaScript | El navegador ejecuta los módulos transformados. React usa ese código para crear y actualizar el DOM y responder al clic. |

En desarrollo, Vite sirve los módulos y aplica los cambios al guardar. Con `npm run build` genera los archivos que se pueden publicar desde `dist/`. Node ejecuta las herramientas del proyecto. El servidor de desarrollo sirve los archivos, mientras que la interacción del botón ocurre en el navegador.

**Dos ventajas.** La interfaz puede responder al clic sin esperar otra petición. Filtrar datos ya cargados permite cambiar lo que se muestra sin recargar la página.

**Dos limitaciones.** El rendimiento depende del navegador y del dispositivo. Cualquier usuario puede inspeccionar y manipular los datos del cliente, por lo que los permisos y la autenticación deben validarse en el servidor.

## Script directo, módulo externo y evento

| Forma | Ejemplo | Momento de ejecución |
| --- | --- | --- |
| Script clásico en línea | `<script>console.log('Inicio')</script>` | Se ejecuta al llegar a esa etiqueta durante la lectura del HTML. |
| Módulo externo | `<script type="module" src="/src/main.jsx"></script>` | Se descarga con sus dependencias y, por defecto, se ejecuta tras analizar el HTML. Vite sirve el código transformado en desarrollo. |
| Evento de React | `onClick={probarClic}` | React llama a la función al activar el botón. La expresión pasa una referencia a la función. |

El comentario de línea en `App.jsx` identifica los datos ficticios. El comentario de bloque en `ConciertoCard.jsx` explica el manejador y el cambio de estado.

## Pruebas realizadas

- **Error de sintaxis.** Al quitar la coma tras `artista: 'Bruma Solar'` y guardar, Vite mostró `Unexpected token, expected "," (8:2)` en `src/App.jsx`. El analizador señaló la línea de `genero`, donde esperaba la coma que separa las propiedades. La corrección consiste en reponer la coma al final de la línea de `artista`. La evaluación del objeto corregido ya se comprobó con Node.
- **Cambio del artista.** Al sustituir `Órbita Violeta` por `Bruma Solar` en el objeto de `App.jsx`, la tarjeta mostró `Bruma Solar` y conservó `Indie pop` y `21:30`. Al pulsar el botón apareció `Clic de prueba: Bruma Solar`. En Components se comprobó el nuevo valor de `concierto.artista` y el mensaje en el estado del componente.
- **Arranque en desarrollo.** Festival React cargó en `http://localhost:5173/`. Console mostró `[vite] connected.` y el cartel presentó Órbita Violeta, Indie pop y 21:30.
- **Clic y Console.** Al pulsar **Probar clic**, apareció `Clic de prueba: Órbita Violeta` tanto en la tarjeta como en Console. La consola enlazó el mensaje a `ConciertoCard.jsx:13`. También se observó un 404 independiente para `favicon.ico`.
- **Elements y Styles.** Se seleccionó `article.concierto` y se localizó el encabezado `<h3>Órbita Violeta</h3>`. Al desactivar `background: #251d35` en Styles, la tarjeta pasó a mostrar el fondo de la página y conservó el borde. El cambio se hizo en DevTools.
- **Sources.** Se activó un punto de interrupción en `console.info(confirmacion)`, en la línea 13 de `ConciertoCard.jsx`. Al pulsar **Probar clic**, DevTools mostró **Paused on breakpoint**, resaltó esa línea dentro de `probarClic` y mostró la variable local `confirmacion` en Scope.
- **Network.** Al recargar la página se localizó la petición `GET http://localhost:5173/src/main.jsx`, el módulo de entrada. En Headers se observó `304 Not Modified`. Vite confirmó que el recurso seguía vigente y el navegador reutilizó la copia en caché.
- **React Developer Tools frente a Elements.** En Components se seleccionó `ConciertoCard`, hijo de `App`, y se desplegó la prop `concierto`. El objeto contenía `artista: "Órbita Violeta"`, `genero: "Indie pop"` y `horario: "21:30"`. Components muestra esos datos agrupados como una prop. En Elements se observó el DOM generado en `article.concierto`, con el artista como texto del `h3` y los detalles agrupados en un `dl`.
- **Construcción.** `npm.cmd run build` terminó correctamente con Vite 7.1.12. Transformó 31 módulos y generó `dist/index.html` y los archivos CSS y JavaScript en `dist/assets/`. La compilación exitosa confirma que el archivo corregido pudo procesarse.

[Guía de React y Vite en MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
