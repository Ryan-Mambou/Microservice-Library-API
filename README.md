# Microservice-Library-API

Ce projet est une API utilisant une architecture de microservices, avec des services dédiés pour les livres, les clients et les commandes.

## Prérequis

1.  **Créer des terminaux dédiés**  
    Sur votre IDE, ouvrez **trois terminaux** distincts pour lancer les différents services.

2.  **Naviguer dans les dossiers des services**  
    Exécutez les commandes suivantes dans chaque terminal :

    ```
    cd books

    ```

    ```
    cd customers

    ```

    ```
    cd orders

    ```

3.  **Installation des dépendances**
    Dans chacun des dossiers de service, exécutez la commande suivante pour installer les dépendances nécessaires :

        ```
        npm install

        ```

4.  **Lancer les services**
    Pour démarrer chaque service en mode développement, exécutez la commande suivante dans chaque terminal :

        ```
        npm run start:dev

        ```

5.  **Configuration des variables d'environnement**
    Créez un fichier `.env` à la racine de chaque projet et ajoutez-y les variables d'environnement suivantes :

```
RABBITMQ_URL=
DATABASE_HOST=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_PORT=
```

6. **Configuration des bases de données**

   1. Créez trois bases de données dans votre gestionnaire de bases de données :

- book
- customer
- order

  2. Remplacez les noms des bases de données dans la variable DATABASE_NAME des fichiers `.env` respectifs pour chaque service.

_Exemple :_
Pour le service books, le fichier `.env` pourrait ressembler à ceci :

```
RABBITMQ_URL=amqp://localhost
DATABASE_HOST=localhost
DATABASE_USERNAME=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=book
DATABASE_PORT=5432
```

Répétez cette étape pour chaque service avec les noms de base de données appropriés (`customer` et `order`).
