# Segunda Vida · Pitch Studio

Aplicación de estudio del Equipo 1 para GPY1102. Incluye las 9 diapositivas originales, recuperación activa sin mirar, mapa del caso, reparto de exposición, cronómetro de 7 minutos y autoevaluación local por integrante.

## Abrir en tu computador

Necesitas Node.js 22.12 o superior y npm.

```sh
npm ci
npm run dev
```

Abre la dirección local que muestra la terminal. Para crear la versión de producción: `npm run build`. Para revisarla localmente: `npm run preview`.

## Publicar en Vercel

1. Descomprime el ZIP y crea un repositorio con el contenido de `pitch-studio`. No subas `node_modules`.
2. En Vercel, selecciona **Add New → Project** e importa ese repositorio.
3. Si la aplicación está dentro de otra carpeta del repositorio, elige `pitch-studio` como **Root Directory**. Si subiste su contenido directamente a la raíz, deja el valor predeterminado.
4. Usa **Framework Preset: Vite**, **Build Command: npm run build** y **Output Directory: dist**. La configuración `vercel.json` ya declara estos valores.
5. Selecciona una versión de Node.js compatible (22.x o superior). No se requieren claves, variables de entorno ni base de datos.
6. Pulsa **Deploy** y comparte la URL con el equipo. Revisa los ajustes de acceso del proyecto: la aplicación no incorpora autenticación ni una garantía de acceso privado.

Alternativa con Vercel CLI, desde esta carpeta: `npx vercel`, siguiendo el asistente. Para producción: `npx vercel --prod`.

Documentación oficial: https://vercel.com/docs/frameworks/frontend/vite

## Cómo estudiar

- **Explorar:** comprender la idea central y los fundamentos de cada slide.
- **Recordar:** intentar explicarla sin ver la imagen ni las pistas; después comparar y autoevaluarse. No es una calificación objetiva ni un guion para memorizar.
- **Ensayar:** mantener el orden 1–9, sortear 3 slides por integrante y practicar las transiciones. El reparto también puede ajustarse manualmente.
- **Progreso:** revisar qué necesita más práctica. Cada integrante puede modificar su autoevaluación después de un nuevo intento.

El tiempo propuesto suma **6:30**, con **0:30 de margen** dentro de los **7 minutos comunicados por el docente**. Incluye los cambios de expositor. Las alertas son visuales: no hay sonido ni cambio automático de diapositiva. El cronómetro sigue contando al pasar los 7 minutos para registrar el exceso. Una pausa no cuenta como tiempo de exposición.

El docente no hará preguntas. Las preguntas breves del modo Recordar son indicaciones de autoestudio, no una simulación de interrogatorio.

## Fuentes y criterios de contenido

- Presentación final: `GPY1102_EP1_Segunda_Vida_Tiendas_Andina_O02D.pdf`, 9 páginas. Su copia está en `public/presentacion-final.pdf`; las imágenes son reproducciones de esas páginas, no slides reinventadas.
- Caso oficial: `03_Marketplace_Mobiliario_Equipamiento_Sucursales.docx`.
- Plan de Dirección: `2. plan_direccion_del_proyecto.docx` y documentación del equipo.
- Se prioriza pauta oficial, caso, documentación del equipo y aclaraciones del docente comunicadas por el usuario. La preparación se centra en planificación, estrategias e integración y justificación de herramientas.
- Los tiempos por slide son una propuesta de práctica, no una exigencia de la rúbrica.
- Los beneficios son esperados, no resultados obtenidos. El proyecto es una simulación en planificación, no una plataforma implementada.
- La diferencia entre ≈2.800 HH de referencia y 1.525,2 HH programadas permanece señalada. El tope CLP $115 millones no se presenta como costo estimado.

## Datos, privacidad y límites

Todo el progreso usa `localStorage` en este navegador, con la clave `segunda-vida-pitch-v1`. No se sincroniza entre computadores, celulares, navegadores ni dominios. Los tres perfiles no son cuentas privadas: cualquier persona que use ese navegador puede cambiarlos. Borrar datos de navegación puede eliminar el progreso. Se guardan las autoevaluaciones y hasta 30 ensayos terminados; la interfaz muestra los últimos 10.

El ensayo activo sigue si cambias de sección, pero no se recupera después de cerrar o recargar la página. No se graba audio, no se evalúa automáticamente lo que dices y no se envían resultados a un servidor. Las fuentes tipográficas se solicitan a Google Fonts, con fuentes locales de respaldo. El PDF y los nombres del equipo son accesibles a quien pueda abrir el sitio: verifica que corresponde compartirlos antes de publicar.

## Stack y mantenimiento

React 19 + TypeScript + Vite; Lucide para iconos y CSS adaptable. Sitio estático, sin servidor propio: adecuado para Vercel. No requiere Next.js porque no hay renderizado en servidor, autenticación ni API.

- `src/content.ts`: contenido de estudio y tiempos.
- `src/App.tsx`: navegación y actividades.
- `src/learning.ts`: almacenamiento y utilidades.
- `src/styles.css` y `src/readability.css`: diseño y escala legible.
- `public/slides`: 9 imágenes originales.
- `src/webmcp.ts`: consulta opcional, de solo lectura, del progreso para navegadores compatibles. La app funciona sin esta API.

## Verificación

`npm test` verifica contenido de nueve slides, suma de tiempos, reparto equilibrado, mezcla sin mutación, cronómetro y recuperación de progreso. `npm run build` valida TypeScript y genera la distribución de producción. No se ha realizado una prueba interactiva automatizada de navegador ni validación en un navegador compatible con WebMCP. Antes de la exposición, hagan un ensayo completo en los dispositivos que utilizarán.
