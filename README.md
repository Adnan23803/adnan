# Portfolio — Adnan Adamou

Site vitrine / portfolio statique, bilingue **FR / EN**.
HTML + CSS + JavaScript pur. Aucun backend, aucun build step.

---

## Structure

```
portfolio/
├── index.html          ← Accueil
├── about.html          ← À propos
├── projects.html       ← Projets
├── contact.html        ← Contact (formulaire Netlify Forms)
├── 404.html            ← Page d'erreur
├── css/
│   └── style.css       ← Tout le design
├── js/
│   └── main.js         ← Toggle FR/EN, nav mobile, animations
├── assets/             ← (vide — pour tes images, CV PDF, etc.)
├── netlify.toml        ← Configuration Netlify
└── README.md
```

---

## Comment éditer le site

### Modifier le texte d'une page

Chaque texte traduit existe en deux versions, une par langue :

```html
<h1>
  <span lang="fr">Bonjour</span>
  <span lang="en">Hello</span>
</h1>
```

Le toggle FR/EN affiche/masque automatiquement la bonne version. **Modifie simplement le contenu entre les `<span lang="fr">…</span>` et `<span lang="en">…</span>`.**

### Ajouter un projet

Ouvre `projects.html`, trouve la section commentée `<!-- ── DUPLIQUE CE BLOC… ── -->`, copie un bloc `.project-row` existant, puis modifie titre, description, tags, année.

### Changer les couleurs

Dans `css/style.css`, en haut, sous `:root` :

```css
--paper: #F5F1E8;       /* fond crème */
--ink: #1A1F2E;         /* texte */
--terracotta: #B85C3A;  /* accent */
```

Modifie ces 3 valeurs et tout le site suit.

### Ajouter ta photo

Place ta photo dans `assets/portrait.jpg`, puis dans `about.html` remplace :

```html
<div class="about-portrait reveal" aria-label="Adnan Adamou">
  <span class="initials">AA</span>
</div>
```

par :

```html
<div class="about-portrait reveal">
  <img src="assets/portrait.jpg" alt="Adnan Adamou" style="width:100%;height:100%;object-fit:cover;">
</div>
```

### Ajouter un CV téléchargeable

Place `assets/cv-adnan-adamou.pdf` puis ajoute un lien dans le hero ou la page À propos :

```html
<a href="assets/cv-adnan-adamou.pdf" class="btn" download>
  <span lang="fr">Télécharger le CV</span>
  <span lang="en">Download CV</span>
</a>
```

---

## Tester en local

Ouvre simplement `index.html` dans ton navigateur — ça suffit pour voir le rendu.

Pour un meilleur dev (live reload), dans VS Code installe l'extension **Live Server**, puis clic-droit sur `index.html` → *Open with Live Server*.

---

## Mettre en ligne

### Étape 1 — GitHub

1. Crée un repo sur GitHub (par ex. `portfolio` ou `adnanadamou.github.io`).
2. Dans le terminal de VS Code (depuis le dossier du site) :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/TON_REPO.git
git push -u origin main
```

### Étape 2 — Netlify (recommandé)

1. Va sur [app.netlify.com](https://app.netlify.com), connecte-toi avec GitHub.
2. **Add new site** → **Import an existing project** → choisis ton repo.
3. Build settings : **laisse vide** (publish directory = `.`). Click *Deploy*.
4. Ton site est en ligne en ~30 sec sur une URL `xxx.netlify.app`.
5. Pour un domaine perso : *Domain settings* → *Add custom domain*.

**À chaque `git push`**, Netlify redéploie automatiquement. C'est tout.

### Alternative — GitHub Pages

Si tu préfères GitHub Pages :
1. Repo → *Settings* → *Pages*
2. Source : *Deploy from branch* → branche `main` → dossier `/` (root)
3. Site disponible sur `https://TON_USERNAME.github.io/TON_REPO/`

⚠️ Avec GitHub Pages, le formulaire de contact **ne fonctionnera pas** (Netlify Forms est spécifique à Netlify). Utilise plutôt Netlify, ou remplace le formulaire par un simple lien `mailto:`.

---

## Workflow quotidien depuis VS Code

```bash
# Modifier un fichier HTML, tester en local, puis :
git add .
git commit -m "Mise à jour: nouveau projet ajouté"
git push
```

Netlify déploie automatiquement en ~30 secondes.

---

## Formulaire de contact (Netlify Forms)

Le formulaire de `contact.html` utilise **Netlify Forms** — fonctionne sans backend, gratuit jusqu'à 100 soumissions/mois.

Après le premier déploiement :
1. Netlify détecte automatiquement le formulaire.
2. Tu reçois les messages dans l'onglet **Forms** de ton dashboard Netlify.
3. Active les notifications email : *Forms* → *Notifications* → *Email notification*.

Pour désactiver le formulaire (si tu utilises GitHub Pages), supprime la section `<form>` dans `contact.html` et garde uniquement les coordonnées.

---

## SEO & métadonnées

Chaque page a déjà un `<title>`, une `<meta description>` et des balises Open Graph de base.
À personnaliser dans le `<head>` de chaque fichier HTML.

Pour ajouter une image de partage social :
1. Place `assets/og-image.jpg` (1200×630 px recommandé).
2. Ajoute dans le `<head>` : `<meta property="og:image" content="assets/og-image.jpg">`.

---

## Crédits

- Typo : [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts).
- Design & code : conçus pour Adnan Adamou.
