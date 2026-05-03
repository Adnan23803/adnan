# Portfolio — Adnan Adamou

Site vitrine statique, bilingue **FR / EN**.  
Stack : HTML + CSS + JavaScript pur. Aucun framework, aucun build step.

Live : [adnan-data.netlify.app](https://www.adnandata.com)

---

## Structure

```
site/
├── index.html        ← Accueil
├── projects.html     ← Projets & services
├── videos.html       ← Tutoriels YouTube (Data Solution)
├── contact.html      ← À propos + formulaire de contact
├── 404.html          ← Page d'erreur personnalisée
├── css/
│   └── style.css     ← Design system complet
├── js/
│   └── main.js       ← Bascule FR/EN, nav mobile, animations
├── images/           ← Logo, photo
├── netlify.toml      ← Configuration Netlify
└── .vscode/
    └── settings.json ← Live Server : fichier de démarrage
```

---

## Design system

Variables CSS définies dans `:root` de `style.css` :

```css
--paper: #F5F1E8;          /* fond crème */
--paper-soft: #EFEAE0;     /* fond alternatif */
--ink: #1A1F2E;            /* texte principal */
--ink-soft: #4A4F5C;       /* texte secondaire */
--terracotta: #B85C3A;     /* couleur d'accent */
--serif: 'Fraunces';       /* titres */
--sans: 'Manrope';         /* corps de texte */
```

---

## Système bilingue

Chaque texte traduit est écrit deux fois, une fois par langue :

```html
<span lang="fr">Bonjour</span>
<span lang="en">Hello</span>
```

Le CSS masque automatiquement la langue inactive selon la classe `lang-fr` ou `lang-en` portée par `<body>`. Le toggle dans la navigation bascule entre les deux et enregistre le choix dans `localStorage`.

---

## Développement local

Ouvre `index.html` dans un navigateur, ou utilise l'extension **Live Server** de VS Code (`index.html` → clic droit → *Open with Live Server*).

---

## Déploiement

Le site est hébergé sur **Netlify** avec déploiement continu depuis GitHub.  
Chaque `git push` sur `main` déclenche un redéploiement automatique (~30 secondes).

Le formulaire de contact est intégré via **Google Forms** (embed iframe) — aucun backend requis.

---

## Crédits

- Typographies : [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts.
- Icônes : Unicode / CSS pur.
