# Blog — Mode d'emploi

## 📁 Fichiers à intégrer dans ton site

```
ton-site/
├── blog.html                              ← Page d'index du blog
├── css/
│   └── style.css                          ← AJOUTER le contenu de blog-styles.css à la fin
└── blog/
    └── articles/
        ├── article-template.html          ← Modèle vierge à copier
        └── exemple-article.html           ← Renommer le template à chaque nouvel article
```

## 🚀 Installation (une seule fois)

1. **Copie `blog.html`** à la racine de ton dossier site
2. **Crée le dossier `blog/articles/`** et place-y `article-template.html`
3. **Ouvre `css/style.css`** et colle tout le contenu de `blog-styles.css` à la fin
4. **Ajoute "Blog" dans la navigation** de chaque page existante (index, about, projects, contact) :

   Dans la `<ul class="nav-links">`, ajoute cette ligne avant le `<li class="lang-toggle-wrapper">` :

   ```html
   <li><a href="blog.html"><span lang="fr">Blog</span><span lang="en">Blog</span></a></li>
   ```

5. **Renomme `article-template.html` en `exemple-article.html`** (c'est l'article référencé dans la 1ère carte de `blog.html`)

## ✍️ Publier un nouvel article

À chaque fois que tu veux publier :

### 1. Crée le fichier de l'article

- Copie `article-template.html`
- Renomme-le avec un nom URL-friendly : `2026-06-10-titre-court.html`
  *(pas d'accents, pas d'espaces, des tirets pour séparer)*

### 2. Modifie le contenu

Dans le fichier, cherche les commentaires `✏️` et modifie :
- Le `<title>` et les `<meta>` du `<head>`
- La catégorie + date + temps de lecture en haut
- Le `<h1>` titre principal
- Le `<p class="subtitle">` sous-titre
- Le contenu de l'article entre `<article class="article-body">`
- Les tags en bas
- Les URLs de partage social
- La navigation précédent/suivant

⚠️ **Les deux versions FR et EN sont obligatoires** pour que le toggle de langue fonctionne.

### 3. Ajoute la carte sur la page d'index

Ouvre `blog.html`, et **en haut de `.blog-list`**, ajoute un nouveau bloc `<a class="blog-card">` (copie un existant).

⚠️ Le plus récent doit toujours être **en premier**.

### 4. Push et c'est en ligne

```bash
git add .
git commit -m "Nouvel article : [titre court]"
git push
```

Netlify déploie en 30 secondes.

## 📝 Aide à la rédaction

### Structure type d'un article réussi

1. **Chapô** (`<p class="lead-paragraph">`) : 1-2 phrases qui posent le sujet
2. **Sections** (`<h2>`) : 3 à 6 sections principales
3. **Sous-sections** (`<h3>`) : pour aérer les longues sections
4. **Listes** : pour énumérer (3-7 éléments idéalement)
5. **Citation** (`<blockquote>`) : une idée clé à mettre en valeur
6. **Image** (`<figure>`) : 1-3 visuels pertinents (captures d'écran, schémas)
7. **Conclusion** : 1-2 paragraphes qui synthétisent et invitent à l'action

### Balises utiles à connaître

```html
<p class="lead-paragraph">Paragraphe d'introduction en italique.</p>
<p>Paragraphe normal.</p>
<h2>Titre de section</h2>
<h3>Sous-titre</h3>
<strong>texte en gras</strong>
<em>texte en italique</em>
<code>code en ligne</code>
<pre><code>bloc de code multi-lignes</code></pre>
<blockquote>Citation mise en avant</blockquote>
<ul><li>élément</li></ul>
<ol><li>élément numéroté</li></ol>
<a href="https://...">lien</a>
<hr> (séparateur "···")
<figure>
  <img src="../../assets/images/mon-image.jpg" alt="Description">
  <figcaption>Légende de l'image</figcaption>
</figure>
```

### Longueur recommandée

- **Article court** : 800-1200 mots (≈ 5 min de lecture)
- **Article standard** : 1500-2500 mots (≈ 10 min)
- **Article approfondi** : 3000-5000 mots (≈ 20 min)

## 🎯 Idées d'articles pour démarrer

Vu ton expertise, voici quelques sujets qui pourraient bien performer :

1. *"Du Kobo à Power BI : monter une chaîne automatisée sans coder"*
2. *"5 erreurs à éviter avec XLSForm"*
3. *"DHIS2 vs. KoboToolbox : lequel choisir pour quel usage"*
4. *"Cartographie humanitaire : démarrer avec QGIS en 30 minutes"*
5. *"Analyse statistique avec Le Sphinx : 5 tests essentiels"*
6. *"Retour d'expérience : déploiement d'enquête multi-pays au Sahel"*
7. *"Comment former une équipe d'enquêteurs en 2 jours"*

## 🔍 Référencement (SEO)

Pour chaque article, optimise dans le `<head>` :

- `<title>` : 50-60 caractères, avec mot-clé principal au début
- `<meta name="description">` : 150-160 caractères, 1 phrase percutante
- `<meta property="og:image">` : ajoute une image de partage (1200×630 px)

N'oublie pas d'ajouter chaque nouvel article à ton `sitemap.xml` :

```xml
<url>
  <loc>https://www.adnandata.com/blog/articles/exemple-article.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

Et de demander l'indexation sur Google Search Console après chaque publication.
