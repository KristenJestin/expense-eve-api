![Banner](./docs/images/banner.jpg)

<div align="center">

**_API_**

</div>

## About ExpenseEve

Application allowing to record all the expenses of a person.

## Related

Here are some related projects

[Application](https://github.com/KristenJestin/expense-eve-app)

## Tech Stack

**Client:** React-Native, UI Kitten

**Server:** AdonisJS

## Features

-   Store all expenses
-   Have access to all recent expenses
-   Light/dark mode toggle

## Run Locally

Clone the project

```bash
  git clone https://github.com/KristenJestin/expense-eve-api
```

Go to the project directory

```bash
  cd expense-eve-api
```

Install dependencies

```bash
  yarn install
```

Create env file

```dosini
# .env
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=kLGVWPdNqSlE_wPm3eERVZUQ43QEjFwt

DB_CONNECTION=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=lucid
DB_PASSWORD=
DB_DB_NAME=lucid
```

Start the server

```bash
  yarn run start
```

Install the [Application part](https://github.com/KristenJestin/expense-eve-app#run-locally)

## API Reference

#### Auth

##### Login

```http
  POST /auth
```

| Body Parameter | Type     | Description                        |
| :------------- | :------- | :--------------------------------- |
| `email`        | `string` | **Required**. Email of the user    |
| `password`     | `string` | **Required**. Password of the user |

##### Logout

```http
  DELETE /auth
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

#### Expenses

##### Get all

```http
  GET /expenses
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

| Parameter | Type      | Description       |
| :-------- | :-------- | :---------------- |
| `page`    | `integer` | **Not Required**. |

#### Get item

```http
  GET /expenses/${id}
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Store item

```http
  POST /expenses
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

| Body Parameter | Type       | Description                         |
| :------------- | :--------- | :---------------------------------- |
| `title`        | `string`   | **Required**. Name of the expense   |
| `cost`         | `float`    | **Required**. Amount of the expense |
| `at`           | `datetime` | **Required**. Get the expense date  |

#### Update item

```http
  PUT /expenses/${id}
  PATCH /expenses/${id}
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

| Body Parameter | Type       | Description           |
| :------------- | :--------- | :-------------------- |
| `title`        | `string`   | Name of the expense   |
| `cost`         | `float`    | Amount of the expense |
| `at`           | `datetime` | Get the expense date  |

#### Destroy item

```http
  DELETE /expenses/${id}
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your API key |

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of item to destroy |

## Roadmap

-   Add the possibility to create "recurring" expenses. _Example: Define that on the 25th of each month, I will have a 10€ expense for my mobile plan_.

-   Add the possibility to define categories

-   Add the possibility to define tags

-   Add a summary of all the expenses of the day, week, month, year, etc

-   Add the possibility to define a list of items when creating an expense

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/KristenJestin/expense-eve-api/blob/master/LICENSE) for more information.

<hr>

<div align="center">

[@KristenJestin](https://www.github.com/KristenJestin)

</div>

<div align="center">

[![portfolio](https://img.shields.io/badge/my_portfolio-ff8226?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kristenjestin.fr)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristen-jestin)

</div>
