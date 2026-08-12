# Portfolio — Adnan Adamou

Site vitrine statique, bilingue **FR / EN**.  
Stack : HTML + CSS + JavaScript pur. Aucun framework, aucune dépendance.

Une seule étape de génération : `node tools/build.js` produit les pages anglaises
statiques dans `/en/` et reconstruit `sitemap.xml`. À lancer avant chaque commit.

Live : [adnan-data.netlify.app](https://www.adnandata.com)

---

## Structure

```
site/
├── index.html        ← Accueil                      ┐
├── portfolio.html    ← Profil                       │
├── projects.html     ← Projets & services           │ sources bilingues
├── articles.html     ← Blog                         │ (éditables à la main)
├── videos.html       ← Tutoriels YouTube            │
├── articles/         ← Articles de blog             │
├── projets/          ← Études de cas                ┘
├── en/               ← ⚠️ GÉNÉRÉ — ne jamais éditer à la main
├── 404.html          ← Page d'erreur personnalisée
├── sitemap.xml       ← ⚠️ GÉNÉRÉ par tools/build.js
├── css/
│   └── style.css     ← Design system complet
├── js/
│   └── main.js       ← Bascule FR/EN, nav mobile, animations
├── tools/
│   ├── build.js      ← Injection en-tête/pied + générateur /en/ + sitemap
│   ├── en-meta.json  ← Titres et descriptions anglais, une entrée par page
│   └── partials/     ← Source unique de l'en-tête et du pied de page
│       ├── header.html
│       └── footer.html
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

## En-tête et pied de page partagés

L'en-tête et le pied ne sont écrits qu'une fois, dans `tools/partials/`. Chaque page
délimite la zone correspondante par des marqueurs :

```html
<!-- #partial:header — généré depuis tools/partials/header.html, ne pas éditer ici -->
<header class="site-header"> … </header>
<!-- /partial:header -->
```

`node tools/build.js` réécrit tout ce qui se trouve entre les deux marqueurs. **Éditer
une page entre ces marqueurs ne sert à rien : la modification sera écrasée au build
suivant.** Pour changer la navigation ou le pied, modifier le partiel puis relancer le build.

- `{{base}}` dans un partiel est remplacé par `../` pour les pages de sous-dossier
  (`articles/`, `projets/`) et par une chaîne vide pour les pages de premier niveau.
- Une page sans marqueur est laissée intacte. C'est le cas de `404.html`, qui garde
  volontairement un en-tête minimal et pas de pied.
- Les fichiers ne sont réécrits que si leur contenu change réellement, afin de ne pas
  fausser les `lastmod` du sitemap.
- `articles/article-template.html` porte les mêmes marqueurs : tout nouvel article
  copié depuis ce gabarit hérite donc automatiquement de la version à jour.

## Système bilingue

Les fichiers à la racine sont la **source bilingue** : chaque texte traduit y est écrit
deux fois, une fois par langue.

```html
<span lang="fr">Bonjour</span>
<span lang="en">Hello</span>
```

Sur la page française, le CSS masque la langue inactive via la classe `lang-fr` du `<body>`.

Pour l'anglais, `tools/build.js` génère de **vraies pages statiques** dans `/en/` :
le contenu `lang="fr"` est supprimé du fichier, les balises `lang="en"` sont déballées,
et le `<title>`, la description, le canonical, les `hreflang` et le JSON-LD sont
réécrits en anglais. Google reçoit ainsi de l'anglais dès la réponse HTML initiale,
sans dépendre de JavaScript.

`js/main.js` ne modifie **jamais** les métadonnées : le toggle de langue se contente
de naviguer entre `/page.html` et `/en/page.html`.

### Ajouter ou modifier une page

1. Éditer le fichier français à la racine (ou dans `articles/`, `projets/`).
2. Ajouter son entrée dans `tools/en-meta.json` (titre, description, fil d'Ariane anglais)
   si la page est nouvelle — le build échoue si une page déclarée est absente.
3. Si la page introduit un nouveau libellé français dans un `aria-label`, `alt` ou `title`,
   l'ajouter à la table `attributes` de `tools/en-meta.json`. Ces attributs ne peuvent pas
   être portés par un élément `lang=`, ils ne sont donc traduits que par cette table.
4. Lancer `node tools/build.js`.
5. Commiter les sources **et** les fichiers générés (`en/`, `sitemap.xml`).

> En cas de modification de `css/style.css` ou `js/main.js`, penser à incrémenter le
> `?v=` dans **toutes** les pages, sinon les visiteurs de retour gardent l'ancienne version
> en cache.

> Le `lastmod` du sitemap vient de la date du dernier commit git, ou du mtime du fichier
> s'il a des modifications non commitées. Il reflète donc une vraie modification.

---

## Développement local

Ouvre `index.html` dans un navigateur, ou utilise l'extension **Live Server** de VS Code
(`index.html` → clic droit → *Open with Live Server*).

Pour prévisualiser l'anglais, lance d'abord `node tools/build.js`, puis ouvre `/en/index.html`.

---

## Déploiement

Le site est hébergé sur **Netlify** avec déploiement continu depuis GitHub.  
Chaque `git push` sur `main` déclenche un redéploiement automatique (~30 secondes).

Le formulaire de contact est intégré via **Google Forms** (embed iframe) — aucun backend requis.

---

## Crédits

- Typographies : [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts.
- Icônes : Unicode / CSS pur.
