# Retro Snake JS
<p align="center"\>
<img src="https://github.com/Mathieu7483/Snake/blob/main/a-high-quality-top-down-view-of-a-digital-snake-ma.png"\>
</p>

---

## Description

Une implémentation classique du jeu **Snake** conçue en JavaScript pur (*Vanilla JS*). Le jeu utilise une logique de rendu dynamique via la manipulation directe du DOM pour afficher les segments du serpent et la nourriture sur une zone de jeu de 600x400 pixels.

Le design adopte une esthétique **rétro** avec une palette de couleurs minimaliste (nuances de vert "Game Boy").

ce projet a été réalisé il y a plus d'une vingtaine d'années et les langages sont depreciés. Une MAJ avec HTML5 et Javascript ES6 sera réalisée ulterieurement

---

## Fonctionnalités

  * **Moteur de jeu cyclique** : Gestion des déplacements et des collisions par intervalles de temps.
  * **Système de score** : Score dynamique qui augmente lors de la capture d'objets et diminue légèrement avec le temps pour encourager la rapidité.
  * **Détection de collisions** : Le jeu se termine si le serpent touche les bords du cadre ou son propre corps.
  * **Génération de nourriture intelligente** : Les nouveaux éléments n'apparaissent jamais sur le corps actuel du serpent.

---

## Prérequis

Aucun outil de compilation ou serveur complexe n'est nécessaire.

  * Un navigateur web récent (Chrome, Firefox, Edge, Safari).
  * Un clavier physique pour les contrôles.

---

## Commandes et Exécution

1.  **Lancer le jeu** :
    Ouvrez le fichier `snake.html` directement dans votre navigateur.

2.  **Contrôles** :

      * **D** : Commencer ou Redémarrer la partie.
      * **8** : Aller vers le haut.
      * **2** : Aller vers le bas.
      * **4** : Aller vers la gauche.
      * **6** : Aller vers la droite.

> **Note technique** : Les contrôles utilisent les touches numériques (pavé numérique) comme défini dans la fonction `getKey`.

---

## Structure Technique

  * **Rendu** : Utilisation de balises `DIV` en positionnement absolu générées par le script.
  * **Logique de mouvement** : Utilisation de tableaux (`sna_X`, `sna_Y`) pour stocker les coordonnées de chaque segment du serpent.
  * **Récursivité** : La fonction `sna_boule()` utilise la récursivité pour garantir un emplacement libre lors de l'apparition de la nourriture.

---

## Auteur

## ✍️ Auteur

  * **Mathieu** - *Étudiant en programmation* - [Mathieu GODALIER](https://github.com/Mathieu7483)

---

## Licence

Ce projet est libre d'utilisation à des fins pédagogiques.

-----
