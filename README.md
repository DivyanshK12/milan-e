# Enhanced Mess App
This is a minimum viable version of an enhanced mess app to have better mess auth, mess usage rates across meals and halls and better food feedback pipeline.

# Local Setup
1. Clone repo, install npm packages
2. Create a .env file in the root directory and add the following variables :
    * MONGODB_URI=
    * AUTH0_SECRET=''
    * AUTH0_BASE_URL='http://localhost:3000'
    * AUTH0_ISSUER_BASE_URL=''
    * AUTH0_CLIENT_ID=''
    * AUTH0_CLIENT_SECRET=''

All variables from Auth0 provider can be obtained from setup desribed here : https://github.com/auth0/nextjs-auth0
MongoDB URI can be obtained from MongoDB Atlas. This procedure is described in the README-NextJS.md file in the root directory.
This file was auto generated from project setup, as mentioned in the README-NextJS.md file.

# Current Limitations 
1. User needs to manually switch Halls each time barcode is generated. Button generation per meal is not tested out yet.
2. Current visualizations for ratings are not very intuitive. Need to work on that to show better insights depending on specific meal and hall.
3. Pulls menu data from Dashboard's API. This is an external dependecy and has not been updated so is unviable for immediate deployment
4. The current plots are not made from src data. They are made from a static file. This is a temporary solution and needs to be moved. 

/demo/count and /demo/rating are being used in place of /api/count and /api/rating for now
# Future Scope 
1. Hope to eliminate need for carrying ID cards to mess. This system can be made to be more secure than just ID card number very easily
2. Better Feedback visualizations, possibly per item instead of a meal as a whole would help caterers to make better decisions
3. With information about the nutrition content of various items, can help students track their own consumption to be healthier

# Attributions
* Project Boilerplate : https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
* Auth0 Integration setup : https://github.com/auth0/nextjs-auth0
* CSS : https://tailwindcss.com/ , Table Component : https://flowbite.com/docs/components/tables/
* Switch component : https://upmostly.com/tutorials/build-a-react-switch-toggle-component
* Barcode generation : https://dev.to/hackmamba/create-a-restaurant-barcode-menu-in-nextjs-1i67
* Deployment : https://vercel.com/, app available at : https://milan-e.vercel.app/
* Plots using : https://plotly.com/javascript/react/ , demo referred : https://github.com/aulneau/next.js-with-react-plotly.js
