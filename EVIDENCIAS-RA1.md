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

- **Error de sintaxis.** Se extrajo el objeto real de `App.jsx` y se comprobó con Node que quitar la coma tras `'Órbita Violeta'` produce un `SyntaxError`. Con la coma restaurada, el mismo objeto se evalúa correctamente. El código entregado contiene la coma.
- **Cambio del artista.** Se evaluó el objeto con `'Bruma Solar'` en lugar de `'Órbita Violeta'` y se comprobó que cambia el valor de `artista`. La comprobación visual de la tarjeta queda pendiente.
- **Arranque y construcción.** Se intentaron `npm install`, `npm run dev` y `npm run build`. La instalación falló con `ENOTFOUND registry.npmjs.org` y los dos scripts quedaron bloqueados al faltar Vite.

## Comprobaciones pendientes en el navegador

Después de instalar las dependencias y arrancar Vite, registra el resultado observado de cada paso.

| Herramienta o prueba | Acción y resultado esperado |
| --- | --- |
| Elements | Inspecciona `article.concierto`. Localiza el `h3` con el artista y desmarca momentáneamente el fondo de la tarjeta en Styles. |
| Console | Pulsa **Probar clic** y busca `Clic de prueba: Órbita Violeta`. Comprueba que el mismo texto aparece en la tarjeta. |
| Sources | Abre `src/ConciertoCard.jsx`, coloca un punto de interrupción en la primera línea de `probarClic` y activa el botón. Comprueba la variable `artista` y reanuda la ejecución. |
| Network | Recarga con la pestaña abierta. Selecciona la petición de `/src/main.jsx` y comprueba el estado HTTP y el JavaScript de la respuesta. |
| React Developer Tools | En Components, selecciona `ConciertoCard` y despliega `props → concierto`. Debe contener `artista`, `genero` y `horario`. Elements muestra el DOM resultante, por ejemplo el texto del `h3` y el elemento `time`, mientras que Components muestra el objeto original que recibe React. |
| Cambio de artista | Cambia el artista en el objeto de `App.jsx` a `Bruma Solar`. Guarda y comprueba que cambian el encabezado y el mensaje del siguiente clic. Restaura el dato original después de la prueba. |
| Construcción | Ejecuta `npm run build` y revisa que se genere `dist/`. |

[Guía de React y Vite en MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
