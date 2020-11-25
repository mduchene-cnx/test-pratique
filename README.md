# Test pratique de Connexence

Notre client (fictif), une société de protection des animaux, nous a demandé d'ajouter des fonctionnalités à son application web.

Actuellement, la page peut afficher une liste de chattons. Afin de faciliter leur travail, ils souhaiteraient pouvoir ajouter les nouveaux chattons dans la liste.

# Critères

Le formulaire est déjà présent et fonctionnel dans la page, votre tâche consiste alors à développer le service web pour accueillir les chattons!

Le serveur web contenu dans ce répertoire est développé avec les technologies suivantes:

- Spring Boot
- Maven
- H2 (Base de données en mémoire)
- Vue.JS
- Axios 

Il faudra donc maintenir ces technologies et simplement ajouter le service web et les champs nécessaires pour répondre au critère.

Pour répondre aux demandes du client, il faudrait remplir les points suivants:

- Ajouter un service web pour l'ajout de nouveaux chattons;
- Ajouter un champ en base de données dans lequel on pourra stocker une description du chatton;
- Valider la saisie des champs au niveau de l'API REST, et retourner un statut 400 si les valeurs ne conviennent pas;
- Ne pas autoriser les chattons de plus de 15 ans;
- Ne pas autoriser les chattons sans nom (le champ 'nom' doit être renseigné)

# Précisions

Pour ce test, tous les travaux 'frontend' sont déjà effectués. Ne pas modifier les fichiers de ce volet (soit index.html, main.js et style.css).

Aucunes restrictions sur les ressources (en ligne ou hors ligne) que l'on peut utiliser.

*Le résultat de vos travaux doit être remis sous la forme d'un répertoire git hébergé sur github afin que nous puissions valider.*

La pondération se fera en fonction des points suivants, dans cet ordre:

- Respect des critères;
- Qualité du code;
- Rapidité d'exécution
