# -- VEGETARIAN RECIPES --

Project designed by Dario Fresi - Full stack web developer

This is a web application entirely developed using REACT. The basic project has been created using the command

npx create-react-app vegetarian-recipes 

You can run and try the application at the following link:

https://vegetarian-recipes-df74.web.app

## ** STRUCTURE **

The project was organized in the /src folder where we can find various subfolders:

/assets for the images
/common-components for all components used more than once in the app project
/customized-hooks for the definition of customized hooks used in the app 
/pages for all pages used in the app
/store for all global variables used in the app components
/styles for all styles sheets
/utils for customized error classes definition

The /src folder also contains the App.js and App.css files, index.js and index.css files. 
Furthermore there is a config.js file where the API KEY for the access to SPOONACULAR database is stored.

### ** HOME PAGE **

![Home page](./src/assets/readme-images/home-page.png)

In the home page the only points of interactions are the link under the search bar through which the user can reach information about the app and the developer and the searchbar itself where the user can write a single key word to search or a complex string.

### ** RESULTS AND DETAILS PAGE **

![Results page](./src/assets/readme-images/results-page.png)

From the home page, after the launch of the search process the user lands to the results page where he can find the list of recipes (three recipes at a time). It's possible to interact with the buttons that switch from the current page to the next or previous one depending on which buttton will be pressed.
Furthermore the user can click on a single recipe of his interest. In this case the app will load more information about that recipe and will make the user to land to the details page as per image here below

![Details page](./src/assets/readme-images/details-page.png)

In this case the page illustrates all the details of the selected recipe and in the lower right corner of the screen a write "Nutrition Facts" invites the user to click on it in order to open a sort of pop-up that reports the nutrition facts of the selected recipe.

Furthermore both results and details pages are provided with a button that can bring the user back to the previous page of the app from which the user comes.