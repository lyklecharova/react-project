# react-project-recipes

Softuni React Project - Project Defense
Single Page Application (SPA) created for recipes using React for the Frontend (FE) and softuni-practice-server for the Backend (BE).

<h1 align="center" id="title">LK</h1>

<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/home-page.png" alt="home-image" width="960"></p>

<p id="description">The project enables users to create recipes, with only the authors having the rights to edit and delete them, while others can only read. Authenticated users can comment, with only the owners of the comments having the ability to delete them. In an inactive state, users can only view the details of the recipes and their comments.</p>

<h2>Project Screenshots:</h2>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/footer-page.png" alt="footer-page-project-screenshot" width="960" height="540/"></p>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/login-page.png" alt="login-page-project-screenshot" width="960" height="540/"></p>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/register-page.png" alt="register-page-project-screenshot" width="960" height="540/"></p>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/dashboard-page.png" alt="dashboard-page-project-screenshot" width="960" height="540/"></p>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/latest-recipe.png" alt="latest-recipe-page-project-screenshot" width="960" height="540/"></p>
<p align="center"><img src="https://github.com/lyklecharova/react-project/blob/main/fe/client/public/image/readmeImages/error-page.png" alt="error-page-project-screenshot" width="960" height="540/"></p>

<h2>💻 Built with</h2>

Technologies used in the project:
<ul>
<li>HTML, CSS and JavaScript
<li>React</li>
<li>Using Font Awesome for icons</li>
</ul>

# General Requirements:

    * The main part includes a dashboard for creating recipes.
    * A guest should have access:
     Home page,
     Dashboard page (with no access to Edit and Delete buttons, only able to read content),
     Login and Register pages.
    * A logged-in user (author) should have access to the Create Recipes and Logout pages.
            * A logged-in user (author) has access to Edit and Delete buttons.

######################################################################################

# Run application:

      * Open terminal "client" and run:
        * `cd fe/client` -> `npm create vite .` (current folder)
        *`npm install` (or `npm i`)
        * `npm run dev`
        *  Which opens the app at http://localhost:5173 in your browser.

######################################################################################

# Run REST_API server:

    * Open terminal "server" and run:
        * `cd fe/server` -> `node server.js`
        * server is listening at http://localhost:3030
