```
                      /^--^\     /^--^\     /^--^\
                      \____/     \____/     \____/
                     /      \   /      \   /      \
                    |        | |        | |        |
                     \__  __/   \__  __/   \__  __/
|^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
| | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
########################/ /######\ \###########/ /#######################
| | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
```

# Bienvenue dans ton test technique

Si tu lis ça c'est que tu as eu l'excellent réflexe de lire le README. Tu viens de sauver au moins trois chatons.

## Les commandes indispensables

* `npm install` les quelques dépendances qui vont bien (normalement elles sont déjà installées, sinon tu as le droit de te plaindre).
* `npm test` tester c'est douter... J'ai un doute : tous les tests passent ?
* `npm run-sript docu` un coup de JsDoc, ça vous dit ?
* `npm start` les choses sérieuses : on démarre le serveur sur le port 8080. L'API devient accessible sur [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

## Organisation du code

* **frontApp** contient juste de quoi s'amuser avec l'API REST (pas d'intérêt pour le moment).
* **jsDoc** contient la JsDoc, pour le remplir, rien de plus simple, il suffit de taper `npm run-script docu`.
* **test** contient les tests, répartis en tests unitaires et en tests de l'API HTTP. Si tu es familier de la syntaxe Mocha, tu pourras facilement lire le comportement attendu de la classe métier `FilteringRule`.
* *filtering-rule.js* voilà la classe métier : elle représente une règle de filtrage sur un firewall, mais en mode ultra-simple, juste pour l'exercice.
* *index.js* là on gère le serveur http, mais aussi la collection des règles de filtrage.
* *package.json* si tu as le moindre doute sur les commandes ou les dépendances...

```
frontApp
    |_index.html
    |_ app.js
    |_angular.js
jsdoc
    |_ ...
    |_ ... lot of stuff
test
    |_unit
    |   |_filtering-rule-spec.js
    |_api
        |_filtering-rules-spec.js
filtering-rule.js
index.js
package.json
```