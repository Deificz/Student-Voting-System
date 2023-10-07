
# Online Student Voting System

An Online Student Voting System that serves as a full-stack passion project.







## Authors


- [@Aeron Brylle Lazo](https://github.com/Deificz) - Frontend Lead
- [@Mandy Llagas](https://github.com/msllagas) - Backend Lead


## Tech Stack
**Server:** Spring Boot, MySQL

**Client:** React.js, TailwindCSS, Vite.js

**Design/Diagram Tool:** Figma, Draw.io

**Task Manager:** Todoist

# How to contribute?

 
Go to https://github.com/Deificz/Student-Voting-System
Click on fork. This will automatically create your own project in your own GitHub account.
Click on your forked project then click on code
Clone the project via HTTPS by copying the GitHub-provided link
Open your terminal and run
$ git clone https://github.com/<yourgithubusername>/Student-Voting-System.git

This will automatically create a folder that contains the project

## Guide for the frontend
 
Go to the projects folder and you will see backend and frontend folder
Navigate to frontend folder and run the following command:
$ npm install

This will install all dependencies associated with the project

 
After installing all dependencies, you can now start the project via:
$ npm run dev


## Guide for the backend
 
Go to the projects folder and you will see backend and frontend folder
Open the backend folder in your idea preferably IntelliJ IDEA Community Edition
Before running the backend, please make sure that you already have MySQL Server installed in your machine. You can also install MySQL Workbench to easily access databases
In your MySQL, create a schema "voting_system"
From the backend folder, navigate to src > main > resources. Open the file application. properties in a text editor
Please edit the following based in your MySQL configuration
spring.datasource.username=<username>
spring.datasource.password=<password>
 
Once done, run the backend by running the command "./mvnw spring-boot:run"
Once backend has completely started without errors, open your MySQL Workbench and open the SQL files located in same directory as the application.properties
Open the init.sql and data.sql file in your workbench
Execute the init.sql file first before executing data.sql

Note: This guide assumed that you already have node.js and git version control already installed in your machine. Latest version is recommended. 


# Demo

https://github.com/Deificz/Student-Voting-System/assets/99456747/f6fc49fb-1169-4d33-a45a-a76eba597591
