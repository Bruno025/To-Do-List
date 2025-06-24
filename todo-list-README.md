# 📝 To-Do List – Projet JavaScript + PostgreSQL

Ce projet est une application web simple de gestion de tâches (To-Do List) développée en **HTML/CSS/JavaScript** pour le frontend et **Node.js + Express + PostgreSQL** pour le backend.

---

## 🔧 Fonctionnalités

- ✅ Ajouter une tâche
- ✅ Afficher toutes les tâches
- ✅ Marquer une tâche comme terminée / non terminée
- ✅ Supprimer une tâche
- ✅ Persistance des données avec PostgreSQL

---

## 📁 Structure du projet

```
todo-list/
├── backend/
│   ├── app.js           ← Serveur Express
│   ├── .env             ← Configuration PostgreSQL
│   └── package.json     ← Dépendances (express, pg, dotenv, cors)
│
├── frontend/
│   ├── index.html       ← Interface utilisateur
│   ├── script.js        ← Logique JS (fetch vers API)
│   └── style.css        ← Design simple et responsive
│
└── create_table.sql     ← Script SQL pour créer la table `tasks`
```

---

## ▶️ Démarrage rapide

### 1. Installer les dépendances (dans /backend)

```bash
npm install
```

### 2. Configurer PostgreSQL

Crée une base de données `todo-list`, puis exécute dans pgAdmin ou psql :

```sql
-- contenu de create_table.sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    is_done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configurer les variables d’environnement

Crée un fichier `.env` dans `/backend` :

```
DATABASE_URL=postgresql://postgres:VOTRE_MDP@localhost:5432/todo-list
PORT=3000
```

> Remplacez `VOTRE_MDP` par le mot de passe PostgreSQL que vous avez choisi.

### 4. Lancer le serveur

```bash
node app.js
```

Visitez [http://localhost:3000](http://localhost:3000)

---

## 🌐 Utilisation de l’interface

- Ouvrez `frontend/index.html` dans votre navigateur
- Ajoutez, cochez ou supprimez des tâches
- Toutes les actions interagissent avec la base de données via l’API Express

---

## 📦 Technologies utilisées

- **Frontend** : HTML, CSS, Vanilla JS (fetch API)
- **Backend** : Node.js, Express.js, pg, dotenv, cors
- **Base de données** : PostgreSQL

---

## 📄 Licence

Projet personnel pour apprentissage – libre d’utilisation et de modification.
