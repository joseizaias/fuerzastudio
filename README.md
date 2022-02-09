# Backend Challenge - Fuerza-Studio

<p align="center">The project is a simple challenge to test your skills in building APIs using the Node.js framework.</p>

## To install the application.

## Prerequisites:
- install NodeJS version 16
## Install the app
- Download the ZIP file from Github on a folder.
- Put the files in a folder and execute => npm install
## To run the app
- To run the app, go to the app folder and execute: => npm run prod
## To test the app
- To test the app, go to the app folder and execute: => npm test

## @Swagger Documentation
- After the app is running, access the url below in a browser.
=> http://localhost:5000/api/swagger/

## Routes in the app

- Get the JWT Token (GET) - We need the token to autenticate in routes: POST, PUT e DELETE. 
- It is necessary to add 'Authorization' in Headers with the Bearer token that was generated here.
http://localhost:5000/api/login

- Create a new post
http://localhost:5000/api/posts (POST) 

- List all posts. It is possible to specifiy 'page' and 'limit'
http://localhost:5000/api/posts (GET)

- List the page number 1 with 2 items
http://localhost:5000/api/posts/?page=1&limit=2 (GET)

- List a post with a specific id.
http://localhost:5000/api/posts/id: (GET)

- Update a post of a specific id
http://localhost:5000/api/posts/id: (PUT)

- Delete a post of a specific id
http://localhost:5000/api/posts/id: (DELETE)

## Database
- I used mongoDB Atlas.
