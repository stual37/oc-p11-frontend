# Pour démarrer

Sur la page de connexion, pour se connecter, utiliser :
- username : user
- password : password 


## Récupération du projet

 Dans un terminale lancez  depuis le répertoire choisi : 

        git clone https://github.com/stual37/oc-p11-frontend.git

## Utiliser l'application en mode développemnt

Effectuez ensuite : 

        cd oc-p11-frontend
        npm install
        npm start

Vous serez en m-ode développement
Vous pourrez alors ouvrir dans un navigateur web  [http://localhost:3000](http://localhost:3000) .

## Effectuer les tests

Dans le terminal, depuis le répertoire frontend , lancez : 

        npm test

## Compiler le projet 

Dans le terminal, depuis le répertoire frontend , lancez : 

        npm run build

L'application pourras ensuite être déployé. 
Il faudra à ce moment pointé sur le répertoire `public`


## Stratégie du workflow

Le workflow comprend 5 branches :
- Master : La branche principale, elle ne doit pas être modifié directement et doit rester 'saine'.
- develop : Branche principale servant pour le développement, il faut ensuite réaliser depuis cette branche une pull request vers la branche Master afin de faire les mises à jours des parties développés.
- feature : Branche servant à développer des fonctionnalités supplémentaires, elle doit ensuite pusser vers la branche develop une fois validé
- htofix : Branche servant à corriger des bugs,
- release : Branche servant à réaliser les versions qui seront ensuites compilé pour la mise en production

 ## Intégration à la CI-CD

 Un fichier Jenkinsfile est diponible.
 Il comprend la configuration qui devra être utilisé ppur la mise en place de la CI-CD dans Jenkins.
 Pour utiliser Jenkins, il suffit de récupérer une image dans docker hub avec : 

        docker pull jenkins/jenkins

Execuer ensuite Jenkins depuis une ligne de commande avec 

        docker run jenkins/jenkins:latest

Un mot de passe pour l'utilisateur admin sera alors crée et fourni, il suffit de le copier et de le sauvegarder.
Ce mot de passe changera à chaque fois que la machine sera créée.

Dans un navigateur lancer : [http://localhost:8080/](http://localhost:8080/)

Jenjkins ser à ce moment disponible,il suffit d'entrer admin comme utilisateur et le motde passe qui a été fournis au moment du lancement de l'image docker.

Dans un premier temps, il faut installer NodeJs sur jenkins.
Pour cela il faut cliquer sur 'Administrer Jenkins', puis 'Plugoins' dans 'Plugins disponible' rechercher 'NodeJs', sélectionner et lancer son installation.

Il y a plus d'information concernant cette partie sur :  [https://plugins.jenkins.io/nodejs/](https://plugins.jenkins.io/nodejs/)

Pour utiliser ensuite la CI-CD, dans Jenkins, il faut  : 
- Depuis le tableau de bord cliquer à gauche sur "Nouveau item",
- donner unnom (ex.: frontend),
- Choisir Pipeline,
- Cocher "GitHub project", et lui aissigner le lien du projet (ici : https://github.com/stual37/oc-p11-frontend.git),
- Au niveau de Pipeline choisir "Pipeline script From SCM",
- Entrer sur SCM à nouveau l'URL entré précédement (soit : https://github.com/stual37/oc-p11-frontend.git),
- Laisser le reste par défaut,
- Sauvegarder.
Ensuite, il suffit de cliquer sur " Lancer un Build"
