# Landing profesional biográfica

Aplicación web construida con Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion y Lucide React para presentar una biografía profesional, experiencia, habilidades, proyectos, formación, referencias y contacto.

## Estructura

```txt
src/
 ├── app/
 │   ├── api/contact/route.ts
 │   ├── globals.css
 │   ├── layout.tsx
 │   ├── metadata.ts
 │   └── page.tsx
 ├── components/
 ├── data/profile.ts
 ├── lib/utils.ts
 └── types/profile.ts
```

## Personalización

Edita `src/data/profile.ts` para cambiar nombre, biografía, experiencia, habilidades, proyectos, formación, testimonios y datos de contacto.

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
