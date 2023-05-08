# Commerce Backend
[![License Badge](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Contact](#Contact)

## Description
This is an application using MySQL to create a database so that the database can be viewed using various requests in Insomnia Core. The database follows a format similar to online commerce databases.

## Installation
To install the dependencies required for the application, run the following line in the terminal.

```
npm install
```

## Usage
Clone the repository to your local computer. Open the MySQL workbench and copy the contents of the schema.sql folder into it and execute it to create the database. Create a .env file to input the DB_name, DB_user, and DB_password for the sequelize connection. Open the integrated terminal on the server.js file and run the following commands in the order they are presented: "npm install" to install dependencies, "npm run seed" to seed the database, and "node server.js" to start the server.

Once the server has been started, open Insomnia Core to begin working with the database. Routes are set up for the categories, products, and tags of the commerce database to get all information, get by a specific ID, create a new category/product/tag, update a category/product/tag by its id, or to delete a category/product/tag by its id. For example, a route to input on Insomnia core to get a list of all categories would be http://localhost:3001/api/categories. An example of correct JSON formatting for post requests can be found in each of the route.js files.

A video showing a full walkthrough of the application can be found [here](https://drive.google.com/file/d/15IR_6a2aTrvNVctWPm-KYDzFaaDBB89o/view?usp=sharing)

## Testing
To test the application, run the following line in the terminal.

```
npm test
```

## Contribution
N/A

## Contact
If you have questions, contact the author of the repository, Annie14254, at annieyashley@gmail.com.

