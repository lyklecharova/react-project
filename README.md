# react-project-recipes

Softuni React Project - Project Defense
Single Page Application (SPA) created for recipes using React for the Frontend (FE) and softuni-practice-server for the Backend (BE).
######################################################################################

# General Requirements:

    * The main part includes a dashboard for creating recipes.
    * A guest should have access:
     Home page,
     Dashboard page (with no access to Edit and Delete buttons, only able to read content),
     Login and Register pages.
    * A logged-in user (author) should have access to the Create Recipes, Profile, and Logout pages.
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
