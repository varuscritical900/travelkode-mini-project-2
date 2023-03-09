# Getting Started with Create React App

# Steps in Creating this app(CRUD-JsonServer)
1. create react app 
run this code on terminal "npm init react-app filename"
2. remove files you don't need for the project for example tha logo, app.css etc...
3. setup folder manangement 
->components{
    ->sematics (nav, footer or other semantics)
    ->page (reusable components for diff pages)
    ->routes(react routing function)
} 
-> database{
    json file
}
-> utilities{
    reusable functions
}
-> controller{
    file for CRUD
} 
-> assets{
    ->img
    ->vid
    ->css/sass
}
4. lets install dependencies
npm install --save @fortawesome/fontawesome-free bootstrap json-server react-router-dom axios 
5. test installed dependencies for example try to import bootstrap and fontawesome then test if working
6. test json-server 
add script to the packagejson "json-server --watch src/database/db.json --host 127.0.0.1 --port 8080"

7. Create pages 
8. Create routes and assign the path using react-router-dom  
9. add nav to connect the pages (use Link/ import Link to connect the routes)
10. Create Controller using Axios Perform CRUD functions
11. Test your JsonServer using Postman try to perform CRUD and see how/what are the requirements in the diff http request(get, put, delete, searching using param,)
12. Continue Creating Axios Request base on Postman Request
13. export the axios functions and Create Components Pages and How Records will be display, Added, Deleted, Viewed