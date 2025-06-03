# commande-git

Liste des commandes git

## git init
Permet d'initialiser un répertoire

## git add nomFicher
Permet d'ajouter un ficher ou des modifications

## git add .
Permet d'ajouter tout les fichers modifiers

## git commit -m
Permet d'enregister une modification
Le message est important

## git commit -am
Permet d'ajouter et d'enregister une modification
#### !! Attention il fonction que pour les brach déjà push sinon il ignore les new brach donc il faut faire un "git add ."

## git push
Permet de pousser les modification en ligne

## git push origin :ancien_nom
pour supprimer l'ancien nom à distance 

## git status
Permet de vérifier le status du répertoire
Permet de lister les modification à traiter

## git log --oneline
Permet de lister les modifications en local

## git branch feature/new-branch
Bonne convention

# git bash

## git checkout -b new-branch
Cela crée une nouvelle branche

## git chechout branch
pour changer de branche

## git branch -m newNom
Quand on veux changer le nom de notre branche
### git branch -m ancienNom newNom
Changer le nom d'une brache depuis un autre répertoire

## git pull
permet de récuperer mes modification et celles a distances

## git rebase
- Permet de revupérer les modifications de la branche mère
- Les modifications de la branche mère sont placées en dessous des modifications de la branche courante
- Les modifications de la branche courante sont placées au dessus des modications de la branche mère

## git merge branche
Permet de fusioné deux branche ensemble si on est sur la branche1 avec merge l'autre branche2 sera envoyé au dernier commit de cette branche.