# Proyecto Web — Alejandro Medina Sandín | Mentor Académico

## Contexto del proyecto
Web profesional multipágina para un servicio de mentoría académica dirigido a doctorandos e investigadores hispanohablantes. El objetivo es convertir visitantes en leads (agendar llamada o descargar lead magnet). El propietario es Alejandro Medina Sandín, doctorando en Economía por la Universidad de Verona, con base en Barcelona.

## Arquitectura de páginas

### 1. Inicio (`index.html`)
- Hero con propuesta de valor clara y CTA principal (agendar llamada)
- Resumen de credenciales (conferencias, premios, publicaciones)
- Prueba social resumida (testimonios destacados)
- Sección lead magnet: curso gratuito de IA para investigadores (captura de email)
- Enlace a las demás páginas

### 2. Carrera Académica (`carrera.html`)
- NO llamarla "Sobre mí" — el enfoque es autoridad académica
- Ph.D. (c) en Economía, Universidad de Verona
- Publicaciones y papers en revisión
- Conferencias internacionales (CCP Annual Conference, Londres 2025)
- Premios: LearLab Roma 2025, Premio Innova URV
- Canal de YouTube y podcast "Publicar o Perecer"
- Foto profesional

### 3. Programa Académico (`programa.html`)
- Landing de conversión para el programa de 6 meses
- Problema → Agitación → Solución (estructura de copywriting)
- Las 6 fases del proceso (diagnóstico → envío a revista)
- Qué incluye: llamadas 1 a 1 ilimitadas, WhatsApp, feedback en vídeo
- Testimonios completos
- Sección FAQ
- CTA: agendar llamada de claridad académica
- NO mostrar precio (se revela en la llamada)
- Copy de filtro: "Para investigadores comprometidos con publicar"

### 4. Asesorías (`asesorias.html`)
- Consultorías puntuales 1 a 1
- Para quienes necesitan ayuda específica sin compromiso largo
- Metodología, análisis de datos, revisión de manuscritos, estrategia de publicación
- CTA: agendar llamada
- NO mostrar precio

### 5. Contacto (`contacto.html`)
- Formulario de contacto o enlace a Google Forms
- Redes sociales: YouTube, Spotify (podcast), LinkedIn, Instagram
- Sección lead magnet (curso IA para investigadores)

## Identidad visual

### Paleta de colores
```css
:root {
  --color-primary: #FFA500;        /* Naranja — color principal de marca */
  --color-primary-dark: #E08E00;   /* Naranja oscuro — hover states */
  --color-primary-light: #FFD080;  /* Naranja claro — acentos suaves */
  --color-black: #1A1A1A;          /* Negro principal — textos, fondos oscuros */
  --color-dark: #2D2D2D;           /* Gris muy oscuro — fondos alternativos */
  --color-gray: #6B6B6B;           /* Gris medio — texto secundario */
  --color-light: #F5F5F0;          /* Crema/off-white — fondos claros */
  --color-white: #FFFFFF;          /* Blanco puro — contraste */
  --color-accent: #FF6B00;         /* Naranja intenso — CTAs destacados */
}
```

### Tipografía
- **Títulos/Headlines:** Montserrat Black (900) o Montserrat ExtraBold (800)
- **Subtítulos:** Montserrat Bold (700) o SemiBold (600)
- **Cuerpo de texto:** Montserrat Regular (400) o Light (300)
- Importar de Google Fonts
- Tamaños: títulos grandes y con impacto, cuerpo legible (16-18px base)

### Estilo visual
- **Tono:** Académico serio con calidez. No frío tipo universidad, pero sí con autoridad y rigor.
- **Fondos:** Alternar entre secciones oscuras (negro/gris oscuro) y claras (crema/blanco). No todo blanco.
- **Acentos naranjas:** Usarlos con intención — CTAs, líneas decorativas, highlights. No abusar.
- **Imágenes:** Placeholders donde corresponda (el usuario añadirá sus fotos después). Usar `<!-- PLACEHOLDER: descripción de la foto -->` y un fondo gris con icono.
- **Animaciones:** Suaves al hacer scroll (fade-in, slide-up). Nada llamativo ni excesivo. Usar Intersection Observer.
- **Espaciado:** Generoso. Mucho aire entre secciones. Composición limpia.

## Componentes globales

### Navbar
- Logo/nombre "Alejandro Medina" a la izquierda
- Links: Inicio, Carrera Académica, Programa, Asesorías, Contacto
- CTA en navbar: botón "Agendar Llamada" con color primario
- Sticky on scroll con fondo semi-transparente
- Mobile: hamburger menu

### Footer
- Links a todas las páginas
- Redes sociales (iconos)
- Aviso legal y política de privacidad
- Copyright

### Botón flotante WhatsApp
- Esquina inferior derecha
- Enlace: `https://wa.me/PLACEHOLDER_NUMERO`
- Icono de WhatsApp
- Siempre visible

### CTAs
- Botón principal: fondo naranja (#FFA500), texto negro, bordes redondeados
- Hover: naranja oscuro (#E08E00) con transición suave
- Todos los CTAs de agendar llamada apuntan a: `PLACEHOLDER_GOOGLE_FORMS_URL`

## URLs y placeholders
Usar estos placeholders que el usuario sustituirá después:
- `PLACEHOLDER_GOOGLE_FORMS_URL` — Google Forms agendar llamada
- `PLACEHOLDER_YOUTUBE_URL` — Canal de YouTube
- `PLACEHOLDER_SPOTIFY_URL` — Podcast en Spotify
- `PLACEHOLDER_LINKEDIN_URL` — Perfil LinkedIn
- `PLACEHOLDER_INSTAGRAM_URL` — Perfil Instagram
- `PLACEHOLDER_WHATSAPP_NUMBER` — Número de WhatsApp (formato internacional sin +)
- `PLACEHOLDER_LEAD_MAGNET_URL` — URL de descarga del curso gratuito de IA
- `PLACEHOLDER_EMAIL` — Email de contacto

## Testimonios disponibles

### Testimonio 1 — Adrián Fernández
> "Alejandro me aportó muchísimos recursos para mejorar mi productividad, tanto en el ámbito académico como en el personal. No solo te transmite su experiencia, sino que sabe darte consejos desde el conocimiento muy útiles y que te pueden ahorrar muchas frustraciones."

### Testimonio 2 — Ángeles Moreno
- Doctoranda, Universidad de Córdoba
- (Sin texto de testimonio — usar placeholder para que el usuario lo añada)

### Testimonio 3 — Jonathan Collado
- Doctorando en Historia y Arte
- (Sin texto de testimonio — usar placeholder para que el usuario lo añada)

## Credenciales para mostrar
- Ph.D. (c) en Economía, Universidad de Verona (Italia)
- Presentación en CCP Annual Conference on Frontiers of Competition and Regulation 2025, Londres — Paper: "Pay-For-Delay: Preventing competition in pharmaceutical markets"
- Premio de Investigación a Jóvenes Investigadores, LearLab, Roma, Noviembre 2025
- Premio Innova, Universitat Rovira i Virgili
- Canal de YouTube (contenido sobre herramientas IA para investigadores)
- Podcast "Publicar o Perecer"

## SEO
- Título principal: "Alejandro Medina | Mentoría para Doctorandos e Investigadores"
- Meta description: "Acompañamiento experto para finalizar tu tesis doctoral y publicar tu artículo académico en revistas científicas. Programa de 6 meses con resultados."
- Keywords: mentoría tesis doctoral, publicar artículo académico, asesoría investigadores, tesis doctoral ayuda, mentor académico
- Open Graph tags para compartir en redes
- Idioma: español (lang="es")

## Reglas técnicas
- HTML semántico (header, nav, main, section, article, footer)
- Mobile-first responsive design
- Archivos separados: un HTML por página, un CSS global (`styles.css`), un JS global (`main.js`)
- Imágenes: usar placeholders con comentarios descriptivos
- Formularios: enlazar a servicios externos (Google Forms, MailerLite) — no backend propio
- Performance: minimizar dependencias externas, solo Google Fonts
- Accesibilidad: alt tags, contraste adecuado, focus states
- No usar frameworks CSS (Bootstrap, Tailwind). CSS puro y personalizado.
- No usar jQuery. JavaScript vanilla.

## Tono del copy
- Profesional pero humano
- Dirigido a doctorandos e investigadores hispanohablantes (España y Latinoamérica)
- Tutear al lector
- Empático con la frustración del proceso doctoral
- Confiado sin ser arrogante — dejar que las credenciales hablen
- Orientado a resultados: "publicar", "finalizar", "avanzar"
