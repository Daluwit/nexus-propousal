# ⚡ Comandos Rápidos para Publicar en GitHub

## 🎯 Copiar y Pegar (Windows PowerShell)

Ejecuta estos comandos **uno por uno** en PowerShell desde la carpeta del proyecto:

```powershell
# 1. Navegar a la carpeta del proyecto (ajusta la ruta si es diferente)
cd "C:\Users\ASUS\Downloads\PROYECTOS DEV DALUWI\NexusPropuesta"

# 2. Verificar que Git esté instalado
git --version

# 3. Inicializar el repositorio (si no está inicializado)
git init

# 4. Agregar todos los archivos
git add .

# 5. Ver qué archivos se agregarán (opcional)
git status

# 6. Hacer el commit inicial
git commit -m "Initial commit: Sistema SIAP - Sentinel propuesta comercial"

# 7. Conectar con el repositorio de GitHub
git remote add origin https://github.com/Daluwit/nexus-propousal.git

# 8. Cambiar nombre de rama a main
git branch -M main

# 9. Subir el código a GitHub
git push -u origin main
```

---

## 🔐 Si te pide autenticación:

### Opción 1: Usar GitHub Desktop (Más fácil)
1. Descargar: https://desktop.github.com/
2. Instalar y hacer login
3. File → Add Local Repository
4. Seleccionar la carpeta del proyecto
5. Publish repository

### Opción 2: Token de acceso
1. Ve a GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Marca "repo" y genera
4. Copia el token
5. Cuando Git pida contraseña, pega el token

---

## ✅ Verificar que se publicó correctamente

Abre en el navegador: https://github.com/Daluwit/nexus-propousal

Deberías ver todos tus archivos allí.

---

## 🔄 Para subir cambios futuros:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

---

## 🚨 Si hay errores:

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Daluwit/nexus-propousal.git
```

### Error: "failed to push"
```bash
git pull origin main --rebase
git push origin main
```

---

**¡Eso es todo!** 🎉

Tu proyecto estará publicado en: **https://github.com/Daluwit/nexus-propousal**

