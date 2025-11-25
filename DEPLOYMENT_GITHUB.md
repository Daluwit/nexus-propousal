# 🚀 Guía de Publicación en GitHub

Este documento te guiará paso a paso para publicar el proyecto SIAP - Sentinel en GitHub.

## 📦 Repositorio

**URL:** https://github.com/Daluwit/nexus-propousal.git

---

## ✅ Pre-requisitos

Antes de comenzar, asegúrate de tener:

- ✅ Git instalado en tu sistema
- ✅ Cuenta de GitHub configurada
- ✅ Acceso al repositorio `Daluwit/nexus-propousal`

---

## 🔧 Pasos para Publicar

### 1. Verificar que Git esté instalado

```bash
git --version
```

Si no está instalado, descárgalo de: https://git-scm.com/

### 2. Configurar Git (si es primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 3. Inicializar el repositorio (si no está inicializado)

```bash
# Navegar a la carpeta del proyecto
cd "C:\Users\ASUS\Downloads\PROYECTOS DEV DALUWI\NexusPropuesta"

# Inicializar git
git init
```

### 4. Agregar todos los archivos

```bash
# Agregar todos los archivos
git add .

# Verificar qué archivos se agregarán
git status
```

### 5. Hacer el commit inicial

```bash
git commit -m "Initial commit: Sistema SIAP - Sentinel propuesta comercial"
```

### 6. Conectar con el repositorio remoto

```bash
git remote add origin https://github.com/Daluwit/nexus-propousal.git
```

### 7. Verificar la conexión

```bash
git remote -v
```

Deberías ver:
```
origin  https://github.com/Daluwit/nexus-propousal.git (fetch)
origin  https://github.com/Daluwit/nexus-propousal.git (push)
```

### 8. Crear la rama main y publicar

```bash
# Renombrar la rama a main (si está como master)
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

---

## 🔐 Autenticación

Si te pide autenticación, puedes usar:

### Opción 1: Personal Access Token (Recomendado)

1. Ve a GitHub.com → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos de `repo`
3. Usa el token como contraseña cuando Git lo pida

### Opción 2: GitHub CLI

```bash
# Instalar GitHub CLI
winget install --id GitHub.cli

# Autenticarte
gh auth login
```

---

## 📝 Comandos Útiles

### Ver el estado del repositorio
```bash
git status
```

### Ver el historial de commits
```bash
git log --oneline
```

### Agregar cambios adicionales
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

### Crear una nueva rama
```bash
git checkout -b nombre-rama
git push -u origin nombre-rama
```

---

## 🌐 Después de Publicar

Una vez publicado, podrás:

1. **Ver el código en línea:**  
   https://github.com/Daluwit/nexus-propousal

2. **Clonar el proyecto desde cualquier lugar:**
   ```bash
   git clone https://github.com/Daluwit/nexus-propousal.git
   ```

3. **Compartir con otros desarrolladores**

4. **Configurar GitHub Pages** (opcional):
   - Ve a Settings → Pages
   - Selecciona la rama `main`
   - Guarda cambios

---

## 🚨 Archivos que NO se subirán

Gracias al `.gitignore`, estos archivos/carpetas NO se incluirán:

- ❌ `node_modules/` - Dependencias (se instalan con `npm install`)
- ❌ `dist/` - Archivos compilados
- ❌ `.env` - Variables de entorno (secretos)
- ❌ `.cursor/` - Archivos del editor
- ❌ Logs y archivos temporales

---

## 📊 Estructura del Repositorio

```
nexus-propousal/
├── client/                 # Frontend React + TypeScript
│   ├── src/
│   │   ├── pages/         # Página SIAP
│   │   ├── components/    # Navbar y componentes UI
│   │   └── lib/           # Utilidades
│   └── public/            # Assets estáticos
├── server/                # Backend Express
├── shared/                # Código compartido
├── README.md              # Documentación principal
├── package.json           # Dependencias
└── .gitignore             # Archivos ignorados

```

---

## 🎯 Próximos Pasos Después de Publicar

### 1. Configurar Deploy Automático (Vercel/Netlify)

**Vercel (Recomendado):**
1. Ve a https://vercel.com
2. Importa el repositorio de GitHub
3. Vercel detectará automáticamente la configuración
4. Deploy automático en cada push

**Netlify:**
1. Ve a https://netlify.com
2. "New site from Git"
3. Conecta con GitHub
4. Selecciona el repositorio

### 2. Agregar Variables de Entorno

Si necesitas configurar variables de entorno en producción:

```bash
# Crear archivo .env.example (este SÍ se sube a git)
DATABASE_URL=postgresql://...
PORT=5000
```

### 3. Agregar README Badges

El README ya incluye badges de GitHub y Licencia.

---

## 🐛 Solución de Problemas

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Daluwit/nexus-propousal.git
```

### Error: "failed to push some refs"
```bash
# Primero haz pull para sincronizar
git pull origin main --rebase

# Luego push
git push origin main
```

### Archivos grandes no se suben
Git tiene límite de 100MB por archivo. Para archivos grandes, usa Git LFS:
```bash
git lfs install
git lfs track "*.pdf"
git add .gitattributes
```

---

## 📞 Contacto y Soporte

- **Repositorio:** https://github.com/Daluwit/nexus-propousal
- **Issues:** https://github.com/Daluwit/nexus-propousal/issues

---

## ✅ Checklist Final

Antes de hacer push, verifica:

- [ ] Logo `nexus-logo.png` agregado en `client/public/`
- [ ] Variables de entorno en `.env` (NO se suben)
- [ ] Compilación sin errores: `npm run build`
- [ ] Tests pasando (si existen)
- [ ] README actualizado
- [ ] `.gitignore` configurado

---

**¡Listo para publicar!** 🚀

Ejecuta los comandos del paso 3 al 8 y tu proyecto estará en GitHub.

