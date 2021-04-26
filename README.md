# eCommerce-back-end

## My Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
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

## Completed Work
* Created initial schema to drop and create database using MYSQL
* Used Sequelize to create models and define their associations
* Created Get, Post, Put, and Delete routes to interact with correct api's using Express
* Successfully tested and proved route's effectiveness using Insomnia
* Initialized, seeded and ran server using Node.js

## Walkthrough Video
tag.get
tag.get /id : 5
tag.post
{
    "id": 9,
    "tag_name": "hop-hip culture"
}
tag.put /:id = 9
{
    "tag_name": "hip-hop culture"
}
tag.delete /:id = 9
category.get
category.get /id = 1
category.post /id = 6
{
    "id": 5,
    "category_name": "Jackets"
}
category.put /id = 6 
{
"category_name": "Coats"
}
category.delete /:id = 6

products.get
products.delete
products.get