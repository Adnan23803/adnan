Correctifs SEO possibles au site adnandata.com, classés par priorité : 

## 1. Rendre les pages anglaises réellement statiques — priorité critique

Aujourd’hui, les URL `/en/...` servent les fichiers français par réécriture Netlify, puis JavaScript :

- change la langue visible ;
- modifie le canonical ;
- adapte le titre et la description.

Google peut exécuter JavaScript, mais recommande le rendu statique ou côté serveur lorsque les informations importantes dépendent du JavaScript. Dans la réponse HTML initiale d’une page anglaise, Google reçoit encore temporairement :

- `<html lang="fr">` ;
- le canonical français ;
- le titre français ;
- les deux langues dans le contenu.

La solution SEO robuste consiste à créer de vrais fichiers anglais :

```text
/en/index.html
/en/projects.html
/en/articles.html
/en/articles/odk-build.html
/en/projets/tableau-bord-power-bi-dhis2.html
```

Chaque fichier doit contenir uniquement l’anglais, avec son propre canonical auto-référent et ses `hreflang` réciproques. C’est le correctif le plus important actuellement. [Recommandations Google pour les sites multilingues](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), [SEO JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## 2. Raccourcir plusieurs titres et descriptions

Plusieurs articles ont des titres particulièrement longs :

- ODK Build : 71 caractères.
- XLSForm/Kobo : 85 caractères.
- Sphinx V5 : 88 caractères.
- Étude SIG : 75 caractères.

Les descriptions d’ODK et Sphinx atteignent respectivement environ 199 et 214 caractères. Google n’impose pas une longueur stricte, mais les textes trop longs seront souvent tronqués ou réécrits.

Exemples recommandés :

```html
<title>ODK Build : créer un XLSForm sans coder | Adnan Adamou</title>
```

```html
<title>Le Sphinx V5 Plus² : guide des enquêtes statistiques</title>
```

```html
<meta name="description"
      content="Découvrez comment concevoir un questionnaire, analyser les réponses et produire des rapports avec Le Sphinx V5 Plus².">
```

Chaque titre doit rester unique, descriptif et dans la langue principale de sa page. [Bonnes pratiques Google pour les titres](https://developers.google.com/search/docs/appearance/title-link), [recommandations pour les descriptions](https://developers.google.com/search/docs/appearance/snippet).

## 3. Compléter les données structurées

Le balisage existant est utile, mais plusieurs améliorations sont nécessaires :

- Transformer `portfolio.html` en véritable `ProfilePage` avec `mainEntity: Person`.
- Ajouter `datePublished`, `dateModified`, `image` et `mainEntityOfPage` aux articles et études de cas.
- Ajouter un `BreadcrumbList` aux articles et études de cas.
- Ajouter un fil d’Ariane visible dans les pages, par exemple :

```text
Accueil → Projets → Tableau de bord Power BI et DHIS2
```

- Ajouter `VideoObject` aux tutoriels importants.
- Relier tous les articles au même auteur avec un identifiant stable, par exemple `https://www.adnandata.com/portfolio.html#person`.
- Tester chaque type avec le Rich Results Test.

Google peut utiliser les données structurées pour mieux comprendre les pages et produire des résultats enrichis, sans toutefois les garantir. [Données structurées Google](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page?hl=fr).

## 4. Créer des pages individuelles pour les meilleurs tutoriels vidéo

La page `videos.html` contient actuellement des liens vers des playlists YouTube. Elle peut être indexée, mais elle a peu de chances de positionner le site sur chaque sujet précis.

Il faudrait créer des pages telles que :

```text
/tutoriels/kobotoolbox-debutant.html
/tutoriels/xlsform-logique-saut.html
/tutoriels/odk-build-formulaire.html
/tutoriels/qgis-cartographie-vectorielle.html
```

Chaque page devrait contenir :

- Une vidéo principale intégrée.
- Un résumé détaillé.
- Les étapes du tutoriel.
- Une transcription ou un contenu textuel original.
- Les outils et prérequis.
- Des liens vers les articles et études de cas associés.
- Un balisage `VideoObject`.

Cela créerait des pages capables de répondre à des recherches comme « créer un formulaire KoboToolbox » plutôt qu’une seule page générale sur les tutoriels. [Bonnes pratiques Google pour les vidéos](https://developers.google.com/search/docs/appearance/video).

## 5. Créer de véritables images éditoriales et sociales

Toutes les pages générales et plusieurs études de cas utilisent actuellement le même logo carré comme `og:image`. Il faudrait produire une image propre à chaque contenu :

- Format social : 1200 × 630 px.
- Titre court et lisible.
- Visuel lié au sujet.
- Déclinaisons 16:9, 4:3 et 1:1 pour les contenus majeurs.
- Nom descriptif, par exemple `tableau-bord-power-bi-dhis2.webp`.
- Formats WebP ou AVIF, avec fallback si nécessaire.

Les études de cas gagneraient notamment à présenter de vraies captures anonymisées : architecture du pipeline, formulaire, tableau de bord ou carte. [Bonnes pratiques Google Images](https://developers.google.com/search/docs/appearance/google-images).

## 6. Nettoyer et automatiser le sitemap

Le sitemap est valide, mais Google ignore les valeurs `priority` et `changefreq`. Elles peuvent être supprimées pour simplifier le fichier. En revanche, `lastmod` doit correspondre à une modification réelle et significative de chaque page. [Recommandations Google sur `lastmod`](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping).

Le processus de publication devrait automatiquement :

1. Ajouter la nouvelle URL française.
2. Ajouter sa version anglaise réelle.
3. Renseigner la véritable date de modification.
4. Mettre à jour la navigation et le maillage interne.
5. Exclure les modèles et brouillons en `noindex`.

## 7. Renforcer le maillage interne

Chaque article devrait pointer vers :

- Un autre article complémentaire.
- Un tutoriel.
- Une étude de cas.
- Une page d’expertise ou de service.
- Le contact.

Chaque étude de cas devrait également proposer :

```text
Étude précédente ← Toutes les réalisations → Étude suivante
```

Les ancres doivent être descriptives :

```html
<a href="...">Voir le système KoboToolbox déployé dans quatre pays</a>
```

plutôt que simplement « En savoir plus ».

## 8. Mesurer et corriger les Core Web Vitals

Les optimisations ajoutées sont utiles, mais il faut maintenant mesurer le site déployé avec Search Console et PageSpeed Insights.

Objectifs recommandés par Google :

- LCP inférieur à 2,5 secondes.
- INP inférieur à 200 ms.
- CLS inférieur à 0,1.

Les prochains gains probables concernent :

- Conversion de `photo.jpg` en WebP/AVIF.
- Création d’un petit avatar local plutôt que charger la photo de 276 Ko.
- Dimensions explicites sur toutes les miniatures YouTube.
- Chargement différé de l’iframe Google Forms.
- Auto-hébergement éventuel des polices.
- Miniatures locales optimisées pour les tutoriels.

[Core Web Vitals selon Google](https://developers.google.com/search/docs/appearance/core-web-vitals).

## 9. Vérifier toutes les variantes du domaine

Il faut s’assurer que chaque variante redirige en `301` vers une seule origine :

```text
http://adnandata.com
https://adnandata.com
http://www.adnandata.com
https://adnan-data.netlify.app
```

Destination souhaitée :

```text
https://www.adnandata.com
```

Sinon Google peut découvrir plusieurs copies du même site. Il faut contrôler les redirections dans Netlify et déclarer une propriété de domaine dans Search Console.

## 10. Mettre en place le suivi Search Console

Après déploiement :

- Soumettre le sitemap.
- Inspecter `/`, `/en/`, un article et une étude de cas.
- Comparer le HTML brut et le HTML rendu.
- Surveiller « Explorée, actuellement non indexée ».
- Vérifier les pages sélectionnées comme canonical par Google.
- Contrôler les erreurs `hreflang`.
- Tester les résultats enrichis.
- Suivre les requêtes, impressions, CTR et positions par page.

Ordre recommandé : pages anglaises statiques, métadonnées, données structurées, pages vidéo, images éditoriales, puis Core Web Vitals et suivi Search Console.