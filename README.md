# Portafolio profesional

Aplicación web construida con Next.js App Router, React, TypeScript, Tailwind CSS y Lucide React para presentar un perfil profesional, experiencia, habilidades, proyectos, formación, referencias y contacto.

Incluye un creador de CV en `/cv-builder`, con selección de plantillas, edición en vivo, autoguardado local y exportación a PDF desde el navegador.

## Estructura

```txt
src/
 ├── app/
 │   ├── api/contact/route.ts
 │   ├── cv-builder/page.tsx
 │   ├── globals.css
 │   ├── layout.tsx
 │   ├── metadata.ts
 │   └── page.tsx
 ├── components/
 │   └── cv-builder/
 ├── data/profile.ts
 ├── data/cv.ts
 ├── lib/utils.ts
 └── types/profile.ts
```

## Personalización

Edita `src/data/profile.ts` para cambiar nombre, biografía, experiencia, habilidades, proyectos, formación, testimonios y datos de contacto.

Edita `src/data/cv.ts` para cambiar las plantillas disponibles y los datos iniciales del creador de CV.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```env
CONTACT_EMAIL=
EMAIL_PROVIDER_API_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Desarrollo

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Producción

```bash
npm run build
npm run start
```
