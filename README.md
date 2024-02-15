# Pour démarrer

## Récupération du projet

 Dans un terminale lancez  depuis le répertoire choisi : 

        git clone https://github.com/stual37/oc-p11-frontend.git

## Utiliser l'application en mode développemnt

Effectuez ensuite : 

        cd frontend
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