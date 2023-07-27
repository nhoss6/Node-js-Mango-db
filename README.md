# Node-js-Mongo-db 🚀     <a name="readme-top"></a>


## Description

une API **RESTFUL** qui permet de gérer l'inscription et la connexion des utilisateurs
L'API est un projet node fait avec le framework Express
Le projet est connecter à une base de donnée Mongodb via mongoose

Via les route il est possible de :
* Récupérer tous les utilisateurs
* Récupérer un utilisateur via son id
* La création d'utilisateur
* La connexion d'un utilisateur
* La suppréssion d'un utilisateur 


## Pré-requis 🎨

- Node 18+ / NPM 9+


## Installation

1. Clonez le projet
```sh
git clone https://github.com/nhoss6/Node-js-Mango-db/
```

2. Installation les dépendances
```bash
npm install
```


## Démarrage

1. Lancer le front de l'application
```bash
npm start
```


## Architecture 

Architecture MVC

* Un dossier router où l'on trouve les routes définit dans le fichier user.route.js
* Un dossier controller avec les différentes methodes
* Un dossier model qui contient le schéma de notre model dans la bdd
* Un dossier service
* Un dossier utils pour mettre les éléments globaux qu'on peut réutiliser dans le projet et database pour la connection à la bdd mongodb 


## Auteurs 🎭

* **REMILI Rédouane** _alias_ [@Kaitorem](https://github.com/Kaitorem)
* **DJABI Mohamed** _alias_ [@hoss6](https://github.com/nhoss6)
<p align="right">(<a href="#readme-top">retour en haut ⬆</a>)</p>