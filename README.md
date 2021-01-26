# Customer Management

![](https://img.shields.io/badge/docker--engine-v20.10.12-blue.svg)
![](https://img.shields.io/badge/node.js-v15.6.0-green.svg)
![](https://img.shields.io/badge/npm-v7.4.0-red.svg)
![](https://img.shields.io/badge/nestjs--cli-v7.5.1-orange.svg)

## Getting started

fetch source code:

```sh
git clone https://github.com/cavargas40/customer-management.git
cd customer-management
```

For this demo project I added to the repository the `.env` file. for production apps that is not a good practice.

## Using Docker Compose

To initialize the API with docker-compose run:

```sh
docker-compose up --build
```

the command will start two containers a postgres db and the API ready for use. (development mode)

## Starting the server manually

You will need postgres installed in your system or you can run a Docker container with the command:

```sh
docker run --name pg-db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=customer-management -e POSTGRES_USER=admin -d postgres
```

to start the server manually please make sure you have installed `Node.js >= v14.15.4` and `npm >= 6.14.10`.

```sh
npm i -g @nestjs/cli
npm i
```
open the `.env` file and replace the var `DB_HOST` to use the value `localhost`.

```sh
npm run start:dev
```

my personal recommendation is to install docker with compose and run the first option.

## Usage

#### The dev server of the API will be running on:

> http://localhost:3000

#### Using this url you will open the documentation made with OpenApi/Swagger
![propeller-head-swagger-1](https://user-images.githubusercontent.com/430514/105805185-7abac080-5f6f-11eb-8add-be7684d44c7d.png)
![propeller-head-swagger-2](https://user-images.githubusercontent.com/430514/105805517-249a4d00-5f70-11eb-83dd-5f9c464aee37.png)
![propeller-head-swagger-3](https://user-images.githubusercontent.com/430514/105805520-26641080-5f70-11eb-9a6f-bb8f536a878a.png)

## Testing

Double check that you already run the command:

```sh
npm i
```

To run the test suites just execute the next command:

```sh
npm run test
```

You can run it in verbose mode to check details with the command:

```sh
npm run test:verbose
```

To run test coverage run the next command:

```sh
npm run test:cov
```

## Implemented Technologies:

- [Docker Compose](https://docs.docker.com/compose/) (DB - API)
- API: [Nest.js](https://nestjs.com/)
- DB: [Postgres v13.1](https://www.postgresql.org/)
- ORM: [TypeORM](https://typeorm.io/#/)
- Documentation: [Swagger - OpenApi](https://swagger.io/)
- Optimistic Locking: made with subscribers of TypeORM

## Time Spent:

I spent around 11 hours doing this test. I like it!

## What I would have done differently with more time?

- improve unit test coverage (It is not 100% coverage).
- create e2e tests.
- create a proper CI/CD process.
- create API Responses (200, 201, 400, etc...) for all endpoints (Swagger).
- add transactions to optimistic locking.
- run database migrations using a dedicated docker container.

## Author
> Carlos Andres Vargas Lopez | <https://www.cavargas.com/> | <cavargas40@gmail.com>