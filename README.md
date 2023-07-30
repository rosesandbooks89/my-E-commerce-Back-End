# my-E-commerce-Back-End

## Description
This is a back end for an e-commerce site. It uses Express.js API and Sequelize to interact with a MySQL database.

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Struggles and Sources](#struggles-and-sources)
* [Link to Recordings](#link-to-recordings)
* [Questions](#questions)

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database 
```

## Installation
1. Clone this repository.
2. Open the command line, navigate to the root directory of this repository, and run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root directory of this repository. Inside the `.env` file, add the following code and replace the values with your MySQL username and password:
```
DB_USER='your MySQL username'
DB_PW='your MySQL password'
```
4. Open the command line, navigate to the root directory of this repository, and run `mysql -u root -p` to open the MySQL shell.
5. Run `source db/schema.sql` to create the database.
6. Run `quit` to exit the MySQL shell.
7. Run `node seeds/index.js` to seed the database.
8. Run `nodemon server.js` to start the server.

## Usage
1. Open Insomnia Core.
2. Test the API GET routes for categories, products, and tags by navigating to `http://localhost:3001/api/categories`, `http://localhost:3001/api/products`, and `http://localhost:3001/api/tags`, respectively.
3. Test the API POST, PUT, and DELETE routes for categories, products, and tags by navigating to `http://localhost:3001/api/categories`, `http://localhost:3001/api/products`, and `http://localhost:3001/api/tags`, respectively, and selecting the appropriate request type from the dropdown menu.

## License
This project currently does not have any licenses.

##

## Struggles and Sources
During this project, I struggled with the following issues:
* I had trouble with the `PUT` routes for categories, products, and tags. I was able to get the `PUT` route for categories to work, but I was not able to get the `PUT` routes for products and tags to work. I tried to troubleshoot the issue by comparing my code to the code in the [module 13 activities](


* [Sequelize Documentation](https://sequelize.org/master/)
* [Express.js Documentation](https://expressjs.com/)
* [MySQL Documentation](https://dev.mysql.com/doc/)
* [dotenv Documentation](https://www.npmjs.com/package/dotenv)
* [Insomnia Documentation](https://support.insomnia.rest/)
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [npm Documentation](https://docs.npmjs.com/)
* [Shields.io](https://shields.io/)
* [MySQL Workbench Documentation](https://dev.mysql.com/doc/workbench/en/)
* [MySQL Tutorial](https://www.mysqltutorial.org/)
* [MySQL Tutorial: How To Create a New User and Grant Permissions in MySQL](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql)
* [MySQL Tutorial: How To Import and Export Databases and Reset a Root Password in MySQL](https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-and-reset-a-root-password-in-mysql)
* [MySQL Tutorial: How To Install MySQL on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
* [MySQL Tutorial: How To Use MySQL Views to Simplify Complex Queries](https://www.digitalocean.com/community/tutorials/how-to-use-mysql-views-to-simplify-complex-queries)
* [MySQL Tutorial: How To Use MySQL Workbench to Create a Database](https://www.digitalocean.com/community/tutorials/how-to-use-mysql-workbench-to-create-a-database)
* [MySQL Tutorial: How To Write Comments in SQL](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-sql)
