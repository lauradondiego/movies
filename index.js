// console.log("run this with node");
// type in your terminal node index.js and you will see the console log
const server = require("./server.js");
// import { server } from './server.js'
// const { server } = require('./server.js');

const port = 8000;
server.listen(port, () => console.log(`\n API on port ${port} \n`));
