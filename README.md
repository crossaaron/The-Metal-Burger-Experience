# The Metal Burger Experience
Single Page Front-End / Back-End sql database application

## Link 
https://protected-hamlet-76552.herokuapp.com/

### Overview

A burger order logger utilizing MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design pattern; Node and MySQL  query and route data  and Handlebars templates and generates the HTML.

### App

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

## Instructions

#### DB Setup

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.


#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.


### Screen Shots of Functionality

#### Database Setup and Logging Posts Correctly

![alt text](/public/assets/img/ss1.png)


![alt text](/public/assets/img/ss2.png)

#### View of Page

    - Fixed PUT route.  Added DELETE route

![alt text](/public/assets/img/ss3.png)

    - Logs the burger info to the console

![alt text](/public/assets/img/ss4.png)


### Hosting on Heroku

Hosted on heroku at https://protected-hamlet-76552.herokuapp.com/ if you'd like to check it out

