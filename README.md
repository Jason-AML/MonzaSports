# 🏎️ MonzaSports

![MonzaSports Banner](https://img.shields.io/badge/MonzaSports-FF4500?style=for-the-badge&logo=car&logoColor=white)

**Plataforma web de venta de vehículos con solicitud de test drive**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-monzasport.vercel.app-blue?style=for-the-badge)](https://monzasport.vercel.app)
[![Deploy](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)

---

## 📌 Descripción

**MonzaSports** es una plataforma web para la **venta de vehículos** con una experiencia moderna y fluida. Los usuarios pueden explorar el catálogo de autos, ver detalles de cada vehículo, calcular el financiamiento y **solicitar un test drive** directamente desde la plataforma. Cuenta con autenticación de usuarios, rutas protegidas y un panel de reservaciones.

---

## ✨ Funcionalidades principales

- 🚗 **Catálogo de vehículos** — Explora la colección completa con filtros por categoría
- 🔍 **Vista de detalles** — Información completa de cada vehículo
- 🧮 **Calculadora de financiamiento** — Simula cuotas y pagos mensuales
- 📅 **Solicitud de test drive** — Agenda una prueba de manejo desde un modal interactivo
- 🔐 **Autenticación** — Registro, inicio de sesión y rutas protegidas
- 📋 **Reservaciones** — Gestiona tus test drives desde el dashboard
- 🖥️ **Dashboard** — Panel de control para usuarios autenticados
- 📱 **Diseño responsivo** — Optimizado para móvil y escritorio

---

## 🚀 Demo en vivo

👉 [https://monzasport.vercel.app](https://monzasport.vercel.app)

---

## 🛠️ Tecnologías utilizadas

| Tecnología                 | Descripción                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| ⚛️ **React 19**            | Librería principal para la interfaz de usuario                           |
| ⚡ **Vite**                | Bundler ultrarrápido con Hot Module Replacement                          |
| 🎨 **Tailwind CSS v4**     | Framework de estilos utilitarios (integrado via plugin de Vite)          |
| 🗄️ **Supabase**            | Backend as a Service: base de datos PostgreSQL, autenticación y API REST |
| 🧭 **React Router DOM v7** | Enrutamiento del lado del cliente con rutas públicas y privadas          |
| 🔔 **React Toastify**      | Notificaciones y alertas toast                                           |
| 📅 **Cally**               | Componente de calendario para agendar test drives                        |
| 🔤 **Space Grotesk**       | Tipografía principal via Fontsource                                      |
| 🔣 **Material Symbols**    | Iconografía de Google Material                                           |
| 🚀 **Vercel**              | Plataforma de despliegue y hosting                                       |
| 🔍 **ESLint**              | Linter para mantener la calidad del código                               |

---

## 📁 Estructura del proyecto

```
MonzaSports/
├── public/
└── src/
    ├── assets/                    # Imágenes y recursos estáticos
    ├── backend/
    │   └── Client.js              # Cliente de Supabase
    ├── components/
    │   ├── collection/
    │   │   └── Card.jsx           # Tarjeta de vehículo
    │   ├── financingCalculator/
    │   │   └── Calculator.jsx     # Calculadora de financiamiento
    │   ├── home/
    │   │   ├── categories/
    │   │   │   └── CategoriesSplit.jsx
    │   │   ├── hero/
    │   │   │   └── HeroVideo.jsx
    │   │   ├── news/
    │   │   └── testimonials/
    │   ├── modal/
    │   │   ├── requestTest/
    │   │   │   └── TestDriveModal.jsx  # Modal de solicitud de test drive
    │   │   └── ModalControl.jsx
    │   └── scroll/
    │       └── ScrollToTop.jsx
    ├── context/
    │   ├── AuthContext.jsx        # Contexto de autenticación
    │   └── VehicleContext.jsx     # Contexto de vehículos
    ├── hooks/
    │   └── useAuthUser.js         # Hook personalizado de autenticación
    ├── layout/
    │   ├── FloatingActionBar.jsx
    │   ├── Footer.jsx
    │   ├── Layout.jsx
    │   └── Navbar.jsx
    ├── pages/
    │   ├── Collections.jsx        # Catálogo de vehículos
    │   ├── Dashboard.jsx          # Panel de usuario
    │   ├── Details.jsx            # Detalle de vehículo
    │   ├── Home.jsx               # Página principal
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── Reservation.jsx        # Gestión de reservaciones
    ├── routes/
    │   ├── AppRoutes.jsx
    │   ├── PrivateRoute.jsx
    │   ├── PrivateRoutes.jsx
    │   └── PublicRoutes.jsx
    ├── service/
    │   ├── authService.js         # Servicios de autenticación
    │   └── vehicleService.js      # Servicios de vehículos
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

---

## ⚙️ Instalación y uso local

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- Cuenta en [Supabase](https://supabase.com) con un proyecto configurado

### Pasos

1. **Clona el repositorio**

```bash
git clone https://github.com/Jason-AML/MonzaSports.git
cd MonzaSports
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

5. **Abre en tu navegador**

```
http://localhost:5173
```

### Scripts disponibles

| Comando           | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR       |
| `npm run build`   | Genera el bundle de producción                 |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint`    | Ejecuta ESLint para revisar el código          |

---

## 🔐 Variables de entorno

| Variable                 | Descripción                          |
| ------------------------ | ------------------------------------ |
| `VITE_SUPABASE_URL`      | URL del proyecto en Supabase         |
| `VITE_SUPABASE_ANON_KEY` | Clave pública (anon key) de Supabase |

---

## 🌐 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en **Vercel** al hacer push a `main`.

Para tu propio despliegue:

1. Haz fork del repositorio
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Agrega las variables de entorno (`VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`) en la configuración del proyecto
4. ¡Despliega!

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un **fork** del proyecto
2. Crea una rama con tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Haz commit de tus cambios: `git commit -m 'feat: agrega nueva funcionalidad'`
4. Haz push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un **Pull Request**

---

## 👤 Autor

**Jason-AML**

- GitHub: [@Jason-AML](https://github.com/Jason-AML)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
