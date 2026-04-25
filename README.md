# car-key-site (Astro)

Este directorio contiene la web estática (Astro + Tailwind) para el emprendimiento de cerrajería de autos.

Nota: el repositorio padre se llama `carKeyProject` y el sitio está dentro del subdirectorio `car-key-site`. Esto no es un problema: Cloudflare Pages permite desplegar desde un subdirectorio si lo configurás como "Project root".

## Estructura

```
carKeyProject/
└── car-key-site/    # proyecto Astro (aquí están los comandos a ejecutar)
    ├── public/
    ├── src/
    ├── package.json
    └── ...
```

## Desarrollo local

Abrir una terminal y ejecutar desde `car-key-site`:

```bash
cd car-key-site
npm install
npm run dev -- --port 3001
# Abrir http://localhost:3001/
```

## Build y preview

```bash
npm run build
npm run preview
```

## Deploy con Cloudflare Pages (desde un subdirectorio)

1. Subí el repo `carKeyProject` a GitHub (si no lo está).
2. En Cloudflare Dashboard -> Pages -> Create a project -> conectar con GitHub y seleccionar el repo `carKeyProject`.
3. En la pantalla de configuración, establecer:
   - Framework: `Astro` o `Manual`.
   - Project root: `car-key-site`  <-- esto es clave cuando el proyecto está en un subdirectorio.
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Crear el deploy; Cloudflare hará preview builds por ramas y te generará un dominio tipo `your-project.pages.dev`.

Notas:
- Si prefieres, podés mover `car-key-site` a la raíz del repo más adelante; no es necesario ahora.
- Para usar un dominio `.com.ar`, agregalo en Pages -> Custom domains y seguí las instrucciones (DNS o mover nameservers a Cloudflare).

## Siguientes pasos recomendados

- Reemplazar el teléfono placeholder en `src/pages/index.astro` por el número real.
- Agregar logo en `public/` y actualizar `index.astro`.
- Implementar páginas `servicios` y `contacto`.
- Añadir meta tags, JSON-LD y sitemap antes del dominio público.

Si querés, me encargo de:
- Pushear estos cambios a GitHub y conectar Cloudflare Pages.
- Implementar las páginas principales y dejar el flujo de deploy listo.
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
