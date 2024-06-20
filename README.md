# TODO PURRSUIT
Capstone Group Project
<p>(<a href="https://www.youtube.com/watch?v=pn2WgOb1ijk&t=1s"> Video Demo Link </a>)</p>

## Summary
What appears to be a simple to-do list actually leads into the story line of a character and their missing pet cat. TODO PURRSUIT is a game that follows a cat named Todo who must navigate mazes and riddles to escape from the cat-napper. After the initial story sequence, users will be redirected to the start screen where they can log in after clicking the "FIND TODO" button. New users can also sign up for an account.

Once logging in, users will begin the game. The user will play through three maze levels that increase in difficulty. The final level allows the cat character to jump with the space bar and move around with the arrow keys to reach the guard dog who presents a riddle that must be solved to escape. A pause/instruction menu can be summoned by hitting the 'p' key. Future updates of the game will include additional maze levels, storylines, and a boss battle between the kitten and cat-napper.

Our team has also included a "Store" page that offers different merchandise such as a shirt, hoodie, and tote bag. If users are not interested in buying merch, they have the opportunity to donate to three different charity organizations for cats: Alley Cat Allies, Alley Cat Rescue, and ASPCA. The payment methods have been implemented using Stripe Payment Processing and are currently in a Test Mode.


## Technologies Used

This group project is a full-stack React application. We use a variety of React hooks including useState, useEffect, and useHistory. We used useState to keep track of the state of various items whether they were number values, strings, or booleans and to update their state with a different value. The useEffect hook was used to handle key presses that move the cat character or summon the pause menu. To navigate to different routes, we implemented the useHistory hook from the React Router library which allows users to go back and forth between pages by storing the paths in its history. From the React Router Library, we also use Switch, Route, and Link which assist in rendering routes that allow the user to navigate to the specified components rather than communicating with the server. We also installed an npm package called React Router DOM to aid in using React Router. Our navbar was created with the help of react-pro-sidebar, and npm installation package, which enabled us to have a sidebar instead of the typical navbar across the top of the page.

To build the backend, our team implemented node.js and express.js. Express.js helped by using routes, middleware functions, and organization of data in javascript to easily create a functional server-side framework. Our team use elephantSQL to create databases to hold information for the project. We also created our own RESTful API by building GET, POST, PATCH, and DELETE endpoints. In order to access postgreSQL in node.js, we implemented pg-promise. This PostgreSQL library allows us to use SQL commands within our javascript code to use our stored data. Within our endpoints, we used the bcrypt installation package to assist with password protection. Bcrypt salts, hashes, and then securely stores our encrypted passwords into our elephantSQL database. Lastly, we installed Winston to log endpoint calls and any errors within those calls so we can track specific information that may give insight to the issue and our solution.

## Swagger Documentation
Our team created an API that retrieves login information and players' scores from databases created through elephantSQL. We used Swagger, an API documentation tool that simplifies the descriptions and consumption of REST APIs, to document each of our endpoints for our login database and our score-tracking database. 

To view Swagger Documentation, please follow these steps:
- [Clone this repo](https://github.com/Hoang-J/todo-purrsuit-swagger)
- `npm i` which will install all necessary dependencies
- `npm start` which will bring you to `http://localhost:4242/api-docs/` on your browser to view the Swagger page

Below are some screenshots of the documentation:

## Screenshots of Swagger Documentation
### Login Server
|   |  |
| ----------- | ----------- |
| GET | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-login-get.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-login-get-response.png" width="500" height="300"> |
| POST | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-login-post.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-login-post-response.png" width="500" height="300"> |

### Scoreboard Server
|   |  |
| ----------- | ----------- |
| GET | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-get.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-get-response.png" width="500" height="300"> |
| POST | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-post.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-post-response.png" width="500" height="300"> |
| PATCH | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-patch.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-patch-response.png" width="500" height="300"> |
| DELETE | <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-delete.png" width="500" height="300"> <img src="./capstone-project/src/images/readmeImages/swagger/swagger-score-delete-response.png" width="500" height="300"> |

## Screenshots of Project
### To-Do
<img src="./capstone-project/src/images/readmeImages/todo.png" width="500" height="300">

### Start Screen
<img src="./capstone-project/src/images/readmeImages/start.png" width="500" height="300">

### Login
<img src="./capstone-project/src/images/readmeImages/login.png" width="500" height="300">

### Sign-Up
<img src="./capstone-project/src/images/readmeImages/signup.png" width="500" height="300">

### Story
<img src="./capstone-project/src/images/readmeImages/level.png" width="500" height="300">

### Maze
<img src="./capstone-project/src/images/readmeImages/maze.png" width="500" height="300">

### Game
<img src="./capstone-project/src/images/readmeImages/finallevel.png" width="500" height="300">

### Store
<img src="./capstone-project/src/images/readmeImages/store.png" width="500" height="300">


## Team Members

### Justin Adams
<img src="./capstone-project/src/images/readmeImages/justin.jpeg" width="150" border-radius=50px>

### Jessie Hoang
<img src="./capstone-project/src/images/readmeImages/jessie.jpeg" width="150">

### Joel Luke
<img src="./capstone-project/src/images/readmeImages/joel.jpeg" width="150">

### Nicolas Lozoya
<img src="./capstone-project/src/images/readmeImages/nick.jpeg" width="150">

#### Additional Notes:
*Level backgrounds and character art credited to: @bananahkim*
