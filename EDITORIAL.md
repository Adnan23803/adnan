# Processus éditorial

## Piliers de contenu

1. Collecte mobile : KoboToolbox, ODK et XLSForm.
2. Analyse et pilotage : Power BI, DHIS2, Excel et SPSS.
3. Cartographie : QGIS, données ouvertes et télédétection.
4. Qualité et automatisation : API, Power Query, Make et Apps Script.

## Cycle recommandé

- Semaine 1 : publier un guide répondant à une question précise.
- Semaine 2 : publier un retour d’expérience ou une étude de cas.
- Semaine 3 : transformer un tutoriel vidéo en article illustré.
- Semaine 4 : actualiser un ancien contenu et renforcer son maillage interne.

## Checklist avant publication

- Un seul sujet principal et une intention de recherche identifiable.
- Titre unique, description de 140 à 160 caractères et URL courte.
- Un seul `h1`, puis une hiérarchie logique de `h2` et `h3`.
- Introduction qui répond immédiatement à la question.
- Exemples issus de l’expérience réelle, sans données confidentielles.
- Liens vers au moins un article, un tutoriel, une étude de cas et le contact.
- Images locales compressées, avec dimensions et texte alternatif.
- Métadonnées Open Graph, canonical, `hreflang` et JSON-LD `BlogPosting`.
- JSON-LD complet : `datePublished`, `dateModified`, `image`, `mainEntityOfPage`,
  `BreadcrumbList`, et auteur relié à `https://www.adnandata.com/portfolio.html#person`.
- Fil d'Ariane visible (`<nav class="breadcrumb">`) en haut de l'article.
- Bloc « Pour aller plus loin » : un article, un tutoriel, une étude de cas, le contact.
- Navigation précédent/suivant mise à jour dans les articles voisins — pas de `href="#"`.
- Ajout de la fiche dans `articles.html` et dans `tools/en-meta.json`.
- En-tête et pied laissés tels quels entre les marqueurs `<!-- #partial:… -->` :
  ils sont réinjectés depuis `tools/partials/` à chaque build.
- `node tools/build.js` lancé, puis `en/` et `sitemap.xml` commités avec la source.
- Test FR et EN avec Live Server, puis test des URL `/en/` sur Netlify.

## Idées prioritaires

- Concevoir un questionnaire KoboToolbox hors connexion.
- Connecter KoboToolbox à Power BI sans export manuel.
- Dix contrôles XLSForm pour améliorer la qualité des données.
- Construire un tableau de bord humanitaire réellement actionnable.
- Cartographier une zone d’intervention avec QGIS et OpenStreetMap.
