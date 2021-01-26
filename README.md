# Customer Management

![](https://img.shields.io/badge/docker--engine-v20.10.12-blue.svg)
![](https://img.shields.io/badge/node.js-v15.6.0-green.svg)
![](https://img.shields.io/badge/npm-v7.4.0-red.svg)
![](https://img.shields.io/badge/nestjs--cli-v7.5.1-orange.svg)

## Using Docker Compose

To initialize the API with docker-compose run:

```sh
docker-compose up --build
```

the command will init a container with a postgres db and another with the API. ready for use. (development mode)

## Usage

#### The dev server of the API will be running on:

> http://localhost:3000

#### Using this url you will open the documentation made with OpenApi/Swagger

## Testing

Double check that you already run the command:

```sh
npm i
```

To run the tests just execute the next command:

```sh
npm run test
```

You can run it in verbose mode with the command:

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

I spent around 11 hours doing the test

## What I would have done differently with more time?

- improve unit test coverage (You can run them but is not 100% coverage).
- create e2e tests.
- create a proper CI/CD process (Github Actions).
- create API Responses (200, 201, 400, etc...) for all endpoints (Swagger).
- add transactions to optimistic locking.
- run database migrations using a dedicated docker container.
