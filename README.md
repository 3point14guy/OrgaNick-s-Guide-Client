Welcome to the OrgaNick's Guide!
https://3point14guy.github.io/OrgaNick-s-Guide-Client/

This app helps organic vegetable growers find methods for treating agricultural pests with organic solutions.

In this first release, users can select the vegetables that they are growing and add them to their own garden list and enter comments about horticultural practices.

Additional releases will display the common insect pests that target the vegetables in the database and show options for organically treating those pests.

The idea for this app came form the absence of a simple resource that can be used in the field real time to help manage pests on crops.

The project started with users stories of what most growers would find useful in the app:

https://user-images.githubusercontent.com/28842407/29714055-52571974-896f-11e7-9f81-cc53743f63f1.png

I then thought about what resources the app should have and what their relationships might look like.  I mapped this out in this ERD:

https://user-images.githubusercontent.com/28842407/29714072-64fc5ee0-896f-11e7-8bb5-0d0e07e84bde.jpg

The next part of the planning stage involved sketching out ideas for the app wireframe.  The final design I settled on looks like this:

https://user-images.githubusercontent.com/28842407/29714068-5d47d0f8-896f-11e7-8ccc-4fd3a86c0677.jpg

I began the actual coding part of the project by putting together some starter code for user authorization on the client side and on the api side and then slowly built out both from there.  I used Ruby on Rails for building my api and the github repository for it can be found here: https://github.com/3point14guy/OrgaNicks-Guide-Api and it can be found deployed here: https://boiling-dawn-26598.herokuapp.com

I started with generating the Vegetables table and testing it's CRUD actions. Once I got the cURL requests working on the back end, then I went and built the code for the CRUD actions on the front and used Handlebars to output the data. A similar process was followed for all subsequent tables; gardens, pests, and dinner_and_diners (which is a join table that show the relationship between pests and plants).  Each table only starts with a small data set as I had to build these myself in the week I had to complete this project.  I inputed the data I researched into a seed file to load locally and on the deployed site at Heroku. When I found myself getting stuck too long on any particular error, I would take a break to work on HTML and styling.

This is an exciting project for me as I know first hand of the need for this kind of app by a large number of organic grower's, particularly back yard gardeners who don't have training or substantial knowledge in pest management.  This app also has a lot of room for expansion and can branch out into other areas of organic growing.
