Aquí tienes un **README.md** profesional, conciso y estructurado para que cualquier colaborador (o tú mismo en el futuro) pueda levantar el proyecto desde cero sin complicaciones.

---

# 🚀 Gym App - Fullstack Project

Aplicación móvil de entrenamiento y nutrición desarrollada con **React Native (Expo)** y **Django REST Framework**, con integración de IA para reconocimiento de máquinas.

## 🛠️ Stack Tecnológico
* **Backend:** Python (Django + DRF)
* **Frontend:** React Native (Expo)
* **Entorno:** Miniconda / Conda
* **Base de Datos:** SQLite (Desarrollo) / PostgreSQL (Producción sugerida)

---

## ⚙️ Configuración del Backend (Django)

1.  **Clonar y entrar a la carpeta:**
    ```bash
    cd backend
    ```

2.  **Recrear el entorno de Conda:**
    Utiliza el archivo `environment.yml` para instalar todas las dependencias:
    ```bash
    conda env create -f environment.yml
    conda activate GymApp
    ```

3.  **Migraciones y Servidor:**
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```
    *El servidor correrá en: `http://127.0.0.1:8000`*

---

## 📱 Configuración del Frontend (React Native)

1.  **Entrar a la carpeta y instalar dependencias:**
    ```bash
    cd ../frontend
    npm install
    ```

2.  **Configurar IP del Backend:**
    Crea un archivo de configuración o actualiza tu base API con la **IP local de tu PC** (no uses `localhost` si pruebas en dispositivo físico).

3.  **Iniciar Expo:**
    ```bash
    npx expo start
    ```
    *Escanea el código QR con la app **Expo Go** en tu celular.*

---

## 📋 Estructura del Proyecto
* `/backend`: Lógica de API, autenticación, gestión de rutinas y procesamiento de IA.
* `/frontend`: Pantallas de usuario, temporizadores de entrenamiento y visualización de macros.