# Calculateur IMC

Une application web complète pour calculer et suivre son Indice de Masse Corporelle (IMC).

## Technologies utilisées

- Frontend : React, Tailwind CSS, ShadCN UI
- Backend : Node.js, Express
- Base de données : PostgreSQL, Prisma
- Déploiement : Vercel (frontend), Heroku (backend), Supabase (base de données)

## Installation locale

1. Cloner le repository :
```bash
git clone https://github.com/eloisd/imc-calculator
cd imc-calculator
```

2. Installer les dépendances :
```bash
# Backend
npm install

# Frontend
cd frontend
npm install
```

3. Configuration :
- Copier `.env.example` vers `.env`
- Remplir les variables d'environnement nécessaires

4. Initialiser la base de données :
```bash
npx prisma generate
npx prisma migrate dev
```

5. Lancer l'application en développement :
```bash
# Backend (depuis la racine)
npm run dev

# Frontend (depuis /frontend)
npm run dev
```

## Déploiement

### Frontend (Vercel)

1. Installer Vercel CLI :
```bash
npm install -g vercel
```

2. Déployer :
```bash
vercel deploy
```

### Backend (Heroku)

1. Installer Heroku CLI
2. Se connecter à Heroku :
```bash
heroku login
```

3. Créer l'application :
```bash
heroku create imc-calculator-api
```

4. Configurer les variables d'environnement :
```bash
heroku config:set DATABASE_URL="votre-url-supabase"
heroku config:set NODE_ENV="production"
```

5. Déployer :
```bash
git push heroku main
```

### Base de données (Supabase)

1. Créer un projet sur Supabase
2. Obtenir l'URL de connexion
3. Mettre à jour `DATABASE_URL` dans Heroku

## Structure du projet

```
imc-calculator/
├── frontend/           # Application React
│   ├── src/
│   └── package.json
├── src/               # Backend Express
│   └── server.js
├── prisma/           # Schémas et migrations
│   └── schema.prisma
├── package.json
└── README.md
```

## API Endpoints

- `POST /api/imc` : Enregistre un nouveau calcul d'IMC
- `GET /api/imc/:userId` : Récupère l'historique d'un utilisateur
- `GET /api/imc/stats/:userId` : Récupère les statistiques d'un utilisateur

## Tests

```bash
# Exécuter les tests
npm test
```

## Licence

MIT
