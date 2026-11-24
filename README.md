# Festival React

Primera tarea de Desarrollo Web · RA1. El cartel muestra un concierto ficticio. El botón **Probar clic** muestra una confirmación en la tarjeta y en la consola.

## Arranque y construcción

Usa Node.js 20.19+ o 22.12+ dentro de sus respectivas ramas, o Node.js 24.

```powershell
npm install
npm run dev
npm run build
```

Abre la URL que indica Vite para comprobar la tarjeta. La construcción genera `dist/`. Para comprobar esa versión, ejecuta `npm run preview`.

## Recorrido

`index.html` contiene el elemento `#root` y carga `src/main.jsx` como módulo. `main.jsx` importa `App` y monta React en esa raíz. `App` importa el CSS, muestra `Cabecera` y pasa el objeto del concierto a `ConciertoCard`. La tarjeta lee la prop y vincula el botón con su manejador.

Consulta [EVIDENCIAS-RA1.md](EVIDENCIAS-RA1.md) para las comprobaciones y la explicación del código cliente.
