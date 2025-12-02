# Lácteos El Torito - Empresa Láctea de Santa Cruz de Turrialba

## 🥛 Descripción

Lácteos El Torito es una empresa familiar fundada en 2012, dedicada a la producción y comercialización de productos lácteos artesanales en Santa Cruz de Turrialba, Costa Rica. Este repositorio contiene el código fuente del sitio web corporativo.

## 🚀 Características

- Diseño responsive y moderno
- Optimización de rendimiento con Astro
- Animaciones fluidas y transiciones
- Integración de formulario de contacto con Mailgun
- Optimización de imágenes con Cloudinary
- Soporte completo de TypeScript
- Diseño accesible y semántico

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación
- [Mailgun](https://www.mailgun.com/) - Servicio de correo electrónico
- [Cloudinary](https://cloudinary.com/) - CDN de imágenes

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/yourusername/el-torito-dairy-products.git
cd el-torito-dairy-products
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:
Crear archivo `.env` con:

```env
PUBLIC_MAILGUN_API_KEY=tu_api_key
PUBLIC_MAILGUN_DOMAIN=tu_dominio
```

4. Iniciar servidor de desarrollo:

```bash
npm run dev
```

## 📁 Estructura del Proyecto

```txt
src/
├── assets/     # Iconos y recursos estáticos
├── components/ # Componentes reutilizables
├── config/     # Configuraciones
├── layouts/    # Plantillas base
├── pages/      # Rutas y páginas
├── scripts/    # Scripts del cliente
├── sections/   # Secciones de páginas
├── types/      # Definiciones TypeScript
└── utils/      # Funciones utilitarias
```

## 🌟 Características Principales

### Componentes Clave

- `Banner.astro`: Sección hero con fondo dinámico
- `Products.astro`: Catálogo de productos
- `Contact.astro`: Formulario de contacto
- `Testimonies.astro`: Testimonios de clientes
- `FAQ.astro`: Preguntas frecuentes

### Diseño Responsive

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### Rendimiento

- Optimización de imágenes
- Mínimo JavaScript
- Carga diferida de recursos
- Puntuación alta en Lighthouse

## 📱 PWA

El sitio implementa características de Progressive Web App:

- Instalable
- Funciona offline
- Experiencia nativa

## 🤝 Contribuir

1. Fork del repositorio
2. Crear rama de feature: `git checkout -b feature/NuevaCaracteristica`
3. Commit cambios: `git commit -m 'Añade nueva característica'`
4. Push a la rama: `git push origin feature/NuevaCaracteristica`
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📧 Contacto

- Email: <lacteoseltorito@gmail.com>
- WhatsApp: +506 8412 6988
- [Facebook](https://www.facebook.com/LacteosElTorito)
- [Instagram](https://www.instagram.com/lacteoseltorito)
