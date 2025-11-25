# 🎨 Instrucciones para Cargar el Logo NEXUS vanta

## 📁 Ubicación del Archivo

Debes guardar tu logo PNG con el siguiente nombre y ubicación:

```
client/public/nexus-logo.png
```

## ✅ Pasos para Agregar el Logo

### 1. Preparar el Archivo
- **Formato:** PNG (con fondo transparente recomendado)
- **Nombre del archivo:** `nexus-logo.png`
- **Resolución recomendada:** Mínimo 300x300px para calidad HD

### 2. Guardar en la Carpeta Correcta

```
NexusPropuesta/
└── client/
    └── public/
        ├── favicon.png
        ├── logo.svg (viejo - puedes eliminarlo)
        └── nexus-logo.png  ← AQUÍ va tu nuevo logo
```

### 3. Verificar

Una vez guardado, el logo aparecerá automáticamente en:
- ✅ Navbar superior (desktop y móvil)
- ✅ Menú lateral móvil
- ✅ Con tamaños optimizados para cada pantalla

## 📐 Tamaños Configurados

El logo se mostrará con los siguientes tamaños:

### Desktop
- **Altura:** 56px (14 en escala Tailwind)
- **Ancho:** Automático (mantiene proporciones)

### Tablet
- **Altura:** 48px (12 en escala Tailwind)
- **Ancho:** Automático

### Móvil
- **Altura:** 40px (10 en escala Tailwind)
- **Ancho:** Automático

### Menú Lateral Móvil
- **Altura:** 48px (12 en escala Tailwind)
- **Ancho:** Automático

## 🎨 Características del Logo en el Navbar

- ✨ **Sombra sutil** cuando el navbar está transparente
- 🔄 **Transición suave** al hacer scroll
- 👆 **Clickeable** - regresa al inicio de la página
- 📱 **Responsive** - se adapta a todos los tamaños de pantalla
- 🎯 **Centrado verticalmente** con los botones de navegación

## 🖼️ Recomendaciones de Diseño

### Para Mejor Visualización:

1. **Fondo Transparente (PNG):** 
   - El logo se verá mejor sobre los diferentes fondos del sitio

2. **Dimensiones del Archivo:**
   - **Mínimo:** 300 x 300 px
   - **Recomendado:** 500 x 500 px
   - **Máximo:** 1000 x 1000 px

3. **Tamaño del Archivo:**
   - Optimizar a menos de 200KB para carga rápida
   - Usar herramientas como TinyPNG o Squoosh.app

4. **Colores:**
   - El logo azul de NEXUS vanta funcionará perfecto
   - Se verá bien tanto en fondo claro como oscuro

## ⚠️ Troubleshooting

### Si el logo no aparece:

1. **Verificar el nombre del archivo:**
   ```
   ❌ nexus_logo.png
   ❌ NEXUS-logo.png
   ❌ nexuslogo.png
   ✅ nexus-logo.png  (correcto)
   ```

2. **Verificar la ruta:**
   ```
   ❌ public/nexus-logo.png
   ❌ client/nexus-logo.png
   ❌ src/nexus-logo.png
   ✅ client/public/nexus-logo.png  (correcto)
   ```

3. **Limpiar caché del navegador:**
   ```bash
   # Detener el servidor
   Ctrl + C
   
   # Reiniciar
   npm run dev
   
   # Refrescar navegador con Ctrl + Shift + R
   ```

4. **Verificar permisos del archivo:**
   - El archivo debe ser legible
   - No debe estar corrupto

## 🚀 Después de Agregar el Logo

1. **Reinicia el servidor de desarrollo** (si está corriendo):
   ```bash
   # Detener con Ctrl + C
   # Iniciar nuevamente
   npm run dev
   ```

2. **Abre el navegador:**
   ```
   http://localhost:5000
   ```

3. **Verifica que el logo aparezca:**
   - ✅ En la esquina superior izquierda
   - ✅ Se mantiene visible al hacer scroll
   - ✅ Aparece en el menú móvil

## 📝 Archivo Antiguo

Puedes eliminar el archivo viejo si existe:
```bash
# Opcional - eliminar logo anterior
rm client/public/logo.svg
```

## 💡 Tip Pro

Si quieres usar una versión específica para modo claro/oscuro, házmelo saber y puedo configurar dos versiones del logo que cambien automáticamente.

---

**¿Necesitas ayuda?** Si el logo no se muestra correctamente, verifica los pasos anteriores o déjame saber y te ayudo a solucionarlo.

