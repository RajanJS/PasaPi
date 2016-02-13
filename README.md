# PasaPi [![Codeship Status for boennemann/badges](https://www.codeship.io/projects/2975f190-646d-0131-452c-7a6d2bba8338/status?branch=master)](https://codeship.com/projects/132656) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) <img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"> 
========================================
###### Stay Informed about Friends  
========================================

App name **PasaPi** is based on the **Newari Language** which means **Friends**. It's Simple Friends Info management application using *IONIC Framework*.

##Details

* This is a simple app to implement CRUD (Create Read Update Delete) functionality using IONIC Framework on the top of Phonegap/Cordova.
* This application is designed for Iphone, Android and Windows Phone but can also be deployed as Blackberry Application.

###The Basic Application flow is as following:

1.  Intro View (Welcome Slide)
  * Use of slidebox
  * Only show on first use
  * Click on button to navigate to home page.

2.  Home View
  * Link of Friends with details view.
    * We can search the friend in the list using search.
    * We can star the favorite friend by left slide.
    * We can delete the friend by left slide.
    * We can reorder the friend by reorder button on the header left corner. 

  * Add Friends
    * Validation to check in the fields.

  * View Schedule update
    * Can search the scheduled meetup in the list.
    * View the scheduled meetup with friends.
    * Can star and delete the meetup with left slide.

3.  Guide Slides
  * Guidelines with the application feature.

###### For live demo : [Pasapi](https://pasapi.herokuapp.com)

###### This application is based on [Ionic Framework generator](https://github.com/diegonetto/generator-ionic) 

* Yeoman generator for creating Ionic hybrid mobile applications using AngularJS and Cordova.
* lets you quickly set up a project with sensible defaults and best practices..

###### How to run this application :
* Download this applicaiton as zip.
* Make sure Node.js , npm and bower is installed.
* Then run the following commands :
```
- npm install
- bower install
- grunt serve
```

#### Note:
* The working folder is “app” not “www”.
* The **grunt serve** will automatically build the www files using all the necessary testing (including JSHint) and files minification” 

###### Author : [Rajan Maharjan](http://mrajan.com.np/)
