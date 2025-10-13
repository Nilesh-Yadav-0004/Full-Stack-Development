// importing json-server library
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("DataBase.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});
// npx json-server --watch db.json --port 3001