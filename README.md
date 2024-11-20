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

## Endpoints

Pour créer un `order`, vous pouvez utiliser l'endpoint suivant :

```
POST http://localhost:3001/order

```

Vous devez fournir les données suivantes dans le corps de la requête :

```json
{
  "bookId": "id du livre",
  "customerId": "id du client",
  "quantity": 2,
  "totalPrice": 4000
}
```

Note:

- Vous devez ajouter manuellement des livres et des clients à les bases de données `book` et `customer` respectivement.
  ` Vous collectez ensuite les IDs des livres et des clients crees pour les utiliser dans le corps de la requête.
- Le paramètre bookId correspond à l'ID du livre que vous souhaitez commander, le paramètre customerId correspond à l'ID du client pour lequel vous passez la commande, et les paramètres quantity et totalPrice indiquent la quantité et le prix total du livre commandé

Pour supprimer une commande, vous pouvez utiliser l'endpoint suivant :

```
DELETE http://localhost:3001/order/:id

```

Notez que le paramètre `id` correspond à l'ID de la commande que vous souhaitez supprimer.
