Set-Content -Path 'c:\Users\hibat\Desktop\vsc\README.md' -Value @'
# Application d'inscription et de connexion

Petit projet front-end en HTML, CSS et JavaScript qui permet à un utilisateur de s'inscrire et de se connecter en utilisant le stockage local du navigateur (`localStorage`).

## Contenu du projet

- `index.html` : page d'inscription avec un formulaire pour le nom, l'email et le mot de passe.
- `style.css` : styles de la page d'inscription.
- `style.js` : logique JavaScript pour sauvegarder les informations utilisateurs dans `localStorage` lors de l'inscription.
- `login.html` : page de connexion avec un formulaire pour l'email et le mot de passe.
- `login.css` : styles de la page de connexion.
- `login.js` : script de connexion qui contient une logique similaire à celle présente dans `login.html`.

## Fonctionnalités

- Inscription d'un nouvel utilisateur.
- Stockage des comptes dans `localStorage` sous la clé `users`.
- Connexion en comparant l'email et le mot de passe saisis avec les données stockées.
- En cas de succès, redirection vers `home.html` (fichier à ajouter si nécessaire).

## Utilisation

1. Ouvrir `index.html` dans un navigateur.
2. Remplir le formulaire d'inscription et cliquer sur **s'inscrire**.
3. Ouvrir `login.html` ou cliquer sur le lien de connexion.
4. Saisir l'email et le mot de passe créés précédemment.
5. Cliquer sur **Se connecter**.

## À noter

- Le projet utilise uniquement le front-end : pas de base de données ni de serveur.
- Les données sont conservées localement dans le navigateur et peuvent être supprimées en vidant le stockage local.
- `home.html` n'est pas présent dans le dépôt actuel ; il est mentionné comme cible de redirection après connexion.

## Améliorations possibles

- Ajouter une page `home.html` pour l'utilisateur connecté.
- Renforcer la validation des champs (format d'email, longueur du mot de passe, etc.).
- Crypter les mots de passe avant stockage (ex. hash côté client ou serveur).
- Remplacer `localStorage` par un backend pour un vrai système d'authentification.
'@