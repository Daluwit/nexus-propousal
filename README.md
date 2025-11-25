# Sistema SIAP - Sentinel

**Propuesta Comercial y Técnica**  
Sistema Inteligente de Auditoría Preventiva y Orquestación de Facturación

[![GitHub](https://img.shields.io/badge/GitHub-Daluwit%2Fnexus--propousal-blue?logo=github)](https://github.com/Daluwit/nexus-propousal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🔗 **Repositorio:** https://github.com/Daluwit/nexus-propousal.git

---

## 📋 Descripción

Este es un sitio web profesional de propuesta comercial para **SIAP (Sentinel)**, un sistema tecnológico diseñado para optimizar el ciclo de facturación hospitalaria y reducir glosas del SOAT mediante validación automática e inteligencia artificial.

### El Problema que Resuelve

Las clínicas enfrentan un desafío crítico: **20%-40% de devoluciones (glosas)** del SOAT en su facturación mensual, equivalente a aproximadamente **$400.000.000 COP retenidos mensualmente**.

**Causa raíz:** La aseguradora usa IA para auditar, mientras las clínicas usan procesos manuales propensos al error humano.

### La Solución

**Sentinel** es una arquitectura de software intermedia que:
- ✅ Valida automáticamente el 100% de las historias clínicas
- ✅ Detecta 15 tipos de errores críticos en tiempo real
- ✅ Ensambla automáticamente la facturación
- ✅ Garantiza cumplimiento de reglas del SOAT

---

## 💰 Valor de la Propuesta

### Implementación (Pago Único)
**$55.000.000 COP + IVA**

Incluye:
- Ingeniería inversa y conexión a Base de Datos
- Desarrollo de 15 reglas de validación del SOAT
- Dashboard de Control para Facturación
- Configuración del RPA (Robot de ensamblaje)
- Capacitación al personal

### Suscripción Mensual (SaaS)
**$7.500.000 COP + IVA / mes**

Incluye:
- Actualización continua de reglas del SOAT
- Monitoreo de infraestructura 24/7
- Soporte técnico prioritario
- Hosting en la nube

### ROI Estimado
- 📉 Reducción de glosas del 20% al 5% en 3 meses
- 💵 Recuperación de **$320.000.000 COP mensuales**
- ⏱️ Ahorro de 80 horas/hombre en ensamblaje

---

## 🎯 Características del Sistema

### 1. Motor de Validación Preventiva
Algoritmo que revisa en tiempo real buscando:
- Errores de lateralidad (Izquierda vs. Derecha)
- Tiempos quirúrgicos imposibles
- Duplicidad de textos (Copy-Paste)
- Incoherencia de insumos
- Y 11 tipos más de errores críticos

### 2. Dashboard de Semaforización
Interfaz intuitiva con sistema de alertas:
- 🟢 **Verde:** Historias listas para cobrar
- 🔴 **Rojo:** Historias que requieren corrección

### 3. Ensamblador Automático (RPA)
- Elimina el uso manual de PDF24
- Descarga automática de soportes del correo
- Generación automática de PDF de historia
- Unión automática de factura en paquete digital estandarizado

---

## 📅 Cronograma de Implementación

**Tiempo Total: 6 Semanas**

| Fase | Duración | Entregables |
|------|----------|-------------|
| **Fase 1** | Semanas 1-2 | Conexión a datos y diagnóstico (reporta errores) |
| **Fase 2** | Semanas 3-4 | Dashboard y validadores operativos |
| **Fase 3** | Semanas 5-6 | Automatización completa y puesta en marcha |

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** con TypeScript
- **Vite** para build optimizado
- **Tailwind CSS** para estilos
- **shadcn/ui** componentes de UI
- **Framer Motion** para animaciones

### Backend
- **Express.js** con Node.js
- **PostgreSQL** con Drizzle ORM
- **TypeScript** para type-safety

### Características del Sitio
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves al scroll
- ✅ Navegación sticky inteligente
- ✅ Tabla comparativa de ROI
- ✅ Secciones interactivas con acordeones

---

## 🛠️ Instalación y Uso

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Daluwit/nexus-propousal.git

# Navegar al directorio
cd nexus-propousal

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# El sitio estará disponible en:
# http://localhost:5000
```

### Build para Producción

```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 📁 Estructura del Proyecto

```
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── siap.tsx          # Propuesta principal
│   │   │   └── not-found.tsx     # 404
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Navegación principal
│   │   │   └── ui/               # Componentes shadcn/ui
│   │   ├── lib/
│   │   │   └── utils.ts          # Utilidades
│   │   └── App.tsx               # Router principal
│   ├── public/
│   │   ├── favicon.png
│   │   └── logo.svg
│   └── index.html
├── server/
│   ├── index.ts                  # Servidor Express
│   └── routes.ts                 # Rutas API
└── package.json
```

---

## 🎨 Diseño y Branding

### Paleta de Colores
- **Azul Profundo:** `#082053` (Headers, footer)
- **Azul Medio:** `#306ab0` (Elementos interactivos)
- **Verde Éxito:** `#16a34a` (CTAs, métricas positivas)
- **Rojo Alerta:** `#dc2626` (Problemas, glosas)
- **Beige/Crema:** `#faf6f1` (Fondos)
- **Azul Pastel:** `#dee9f6` (Secciones alternadas)

### Tipografía
- **Familia:** Parkinsans (Google Fonts)
- **Títulos:** 700-800 weight
- **Cuerpo:** 400-500 weight

---

## 📞 Personalización

### Actualizar Datos de Contacto

Editar en `client/src/pages/siap.tsx`:

```typescript
// Línea ~1328 - Botón principal de CTA
onClick={() => window.open("https://wa.me/TU_NUMERO", "_blank")}

// Personalizar texto del botón
ctaText="Tu Texto Aquí"
```

### Modificar Contenido

Todas las secciones son editables directamente en `client/src/pages/siap.tsx`:
- Resumen ejecutivo
- Diagnóstico financiero
- Componentes de solución
- Precios y ofertas
- Cronograma

---

## 🚢 Deploy

### Vercel (Recomendado)

```bash
# Build optimizado para Vercel
npm run build:vercel

# O conectar directamente el repo a Vercel
```

El archivo `vercel.json` ya está configurado.

### Otras Plataformas

```bash
# Build general
npm run build

# Los archivos estarán en /dist
```

---

## 📝 Secciones del Sitio

1. **Portada** - Presentación impactante con gradiente
2. **Tabla de Contenido** - Navegación rápida
3. **Resumen Ejecutivo** - El problema y la solución
4. **Diagnóstico** - Dolor financiero detallado
5. **Solución Sentinel** - Arquitectura técnica
6. **Análisis ROI** - Tabla comparativa de resultados
7. **Oferta Económica** - Pricing detallado (Setup + SaaS)
8. **Cronograma** - Timeline de implementación
9. **CTA Final** - Llamado a acción

---

## 🔐 Confidencialidad

Este documento es una propuesta comercial confidencial. Incluye disclaimer de confidencialidad en footer.

---

## 📄 Licencia

MIT

---

## 👨‍💻 Soporte

Para preguntas sobre este proyecto o personalización adicional, contactar al desarrollador.

---

**© 2024 - Sistema SIAP "Sentinel"**  
*Propuesta Comercial y Técnica*

