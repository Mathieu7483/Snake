# 🐍 Retro Snake JS

<p align="center"\>
<img src="https://github.com/Mathieu7483/Snake/blob/main/a-high-quality-top-down-view-of-a-digital-snake-ma.png"\>
</p>

## 📝 Description

Une implémentation classique du jeu **Snake** conçue en JavaScript pur (*Vanilla JS*). Le jeu utilise une logique de rendu dynamique via la manipulation directe du DOM pour afficher les segments du serpent et la nourriture sur une zone de jeu de **600x400 pixels**.

Le design adopte une esthétique **rétro** avec une palette de couleurs minimaliste rappelant les nuances de vert des consoles portables iconiques.

⚠️ **Note historique :** Ce projet a été réalisé il y a plus d'une vingtaine d'années. Une mise à jour utilisant les standards modernes a été effectuée (V2).

-----

## ✨ Fonctionnalités

  * ⚙️ **Moteur de jeu cyclique** : Gestion des déplacements et des collisions par intervalles de temps réguliers.
  * 📈 **Système de score** : Score dynamique qui augmente lors de la capture d'objets et diminue avec le temps pour récompenser la rapidité.
  * 🚫 **Détection de collisions** : Gestion stricte des limites du cadre et de l'auto-collision (le serpent ne doit pas se toucher).
  * 🍎 **Génération intelligente** : La nourriture apparaît aléatoirement mais jamais sur une zone occupée par le corps du serpent.

-----

## 🛠️ Prérequis

Aucun outil de compilation (comme `gcc`) ou serveur n'est nécessaire [cite: 2025-10-22].

  * 🌐 Un navigateur web récent (Chrome, Firefox, Edge, Safari).
  * ⌨️ Un clavier physique (utilisation du pavé numérique).

-----

## 🎮 Commandes et Exécution

1.  **Lancer le jeu** :
    Ouvrez le fichier `snake.html` directement dans votre navigateur. 🌍

2.  **Contrôles** :

      * **D** : Commencer ou Redémarrer la partie.
      * **8** : ⬆️ Aller vers le haut.
      * **2** : ⬇️ Aller vers le bas.
      * **4** : ⬅️ Aller vers la gauche.
      * **6** : ➡️ Aller vers la droite.

> **Note technique** : Les contrôles sont mappés sur les touches numériques du pavé directionnel.

-----

## 📂 Structure Technique

  * 🎨 **Rendu** : Génération dynamique de balises `DIV` en positionnement absolu.
  * 🧠 **Logique de mouvement** : Utilisation de tableaux (`sna_X`, `sna_Y`) pour stocker les coordonnées des segments du serpent.
  * 🔄 **Récursivité** : La fonction `sna_boule()` utilise la récursivité pour garantir un emplacement libre lors de l'apparition de la nourriture.

-----

## ✍️ Auteur

  * **Mathieu** - *Étudiant en programmation, spécialisation Machine Learning* - [👤 Mon profil Github](https://github.com/Mathieu7483)

-----

## ⚖️ Licence

Ce projet est libre d'utilisation à des fins pédagogiques. 📄
