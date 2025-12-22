# LIMS

## Description


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
# !! WORKS ONLY IF IT CAN CONNECT TO A MYSQL DB !!
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as
possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

## MySQL Setup

get db running locally:
```bash
podman pull docker.io/library/mysql:latest
podman run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
podman exec -it mysql-container /bin/bash
```

connect to mysql from within container:
```bash
mysql -h localhost -p
```

create db and table:
```bash
create database test;
use test;
create table user (id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(50), lastName VARCHAR(50), age INT);
```

## Resources


Nestjs Unit Testing:
  https://docs.nestjs.com/fundamentals/testing

MySQL with typeorm:
  https://typeorm.io/docs/drivers/mysql/

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join
them, please [read more here](https://docs.nestjs.com/support).

## based on NestJS-MySQL-TypeORM Project (https://github.com/lilflvme/nestjs-typeorm-mysql)

- This is a sample project built using NestJS, a popular Node.js framework, to interact with a MySQL database using the TypeORM ORM
  library. The project is designed to provide a basic CRUD (Create, Read, Update, Delete) API for managing users, with endpoints for
  retrieving user data, creating new users, updating existing users, and deleting users.

- The project uses NestJS's modular architecture to separate concerns and maintain code organization. The app module is responsible for
  bootstrapping the application, while the user module handles user-related functionality. The controller and service files within the user
  module implement the CRUD operations, while the entity files define the database schema using TypeORM's decorators.

- TypeORM is used to handle the database interactions, providing an object-relational mapping layer that allows developers to work with the
  database using TypeScript classes and objects. This makes it easy to write type-safe, maintainable code that interacts with the database.

- The project also includes unit tests to ensure that the functionality is working as intended. These tests use the Jest testing framework,
  which is integrated with NestJS out of the box.

- Overall, this project is a great starting point for anyone looking to build a Node.js application with a MySQL database and TypeORM. It
  provides a solid foundation for building more complex applications and can be easily extended with additional modules and
  functionality. The project is hosted on GitHub, making it easy for other developers to fork and contribute.
