in lambda folder:

- mkdir routing
- cd folder name
- [git init] in terminal. make sure it says not a git repo
- [npm init -y] in terminal
- go to vs code
- [touch index.js] commands in terminal to make the index.js file you see here basically just creates a new file in vs code
- [npm i nodemon -D] -> install nodemon as dev time dependency in terminal
- add server dependency in package.json. call it server then do [npm run server] in terminal
- [npx gitignore node] in terminal to create ignore file to ignore node mods
- [npm install express] in terminal when you start writing your index.js
  steps

endpoint (url + http method) === function

POST /api/movies (body: movie) === postApiMovies(movie)

| non REST         | REST                   |
| :--------------- | :--------------------- |
| /createMovie     | POST /api/movies       |
| /removeMovie/:id | DELETE /api/movies/:id |

Other Approaches to building Web APIs

- GraphQL
- gRPC
- RPC
- SOAP

Query String

https://www.google.com
/search
? beginning of query string
q=mdn+http+query+string key/value pair separated by =
& key/value pair separator
oq=mdn+http+query+string
&
aqs=chrome..69i57.5023j0j4
&
sourceid=chrome
&
ie=UTF-8
