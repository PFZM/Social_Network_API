# README - Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Link to see the deployed application:

[YouTube video](https://youtu.be/ou4tpGU7xIQ)

## Description

This is an API for social network web application where users can share their thoughts, react to friend's thoughts and create a friend lists. The application is build with Node.Js and uses [Express.js](https://www.npmjs.com/package/express) for routing, a MongoDB database and the [Mongoose](https://www.npmjs.com/package/mongoose) ODM.

## Table of contents:

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Questions](#questions)

## Installation

1. Fork repository
2. Clone repository to local environment.
3. Node.js must be installed.
4. To install all the dependencies (express, mongoose and date-fns) use the following command:

```bash
npm install
```

## Usage

The application is invoked by using the following command (on the directory containing this project):

```bash
npm run start
```

Using insomnia or your browser you can test the REST API using the following routes:

User Routes:

Get all users: `GET /api/users`  
Create a user: `POST /api/users`  
Get user by ID: `GET /api/users/:id`  
Update a user: `PUT /api/users/:id`  
Delete a user: `DELETE /api/users/:id`  
Add a friend: `PUT /api/users/:userId/friends/:friendId`  
Delete a friend: `DELETE /api/users/:userId/friends/:friendId`

Thought Routes

Get all thoughts: `GET /api/thoughts`  
Create a thought: `POST /api/thoughts`  
Get thought by ID: `GET /api/thoughts/:id`  
Update a thought: `PUT /api/thoughts/:id`  
Delete a thought: `DELETE /api/thoughts/:id`

Reaction Routes

Add a reaction: `PUT /api/thoughts/:id/reactions`  
Delete a reaction: `DELETE /api/thoughts/:id/reactions`

## License

This project is covered under the MIT license.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a code of conduct, please follow it in all your interactions with the project.
Contributions follow the [Contributor Convenant](http://contributor-covenant.org/version/1/4/).

## Questions

[GitHub profile](http://github.com/PFZM)

[Contact Me - Email](mailto:pfzm@hotmail.com)
