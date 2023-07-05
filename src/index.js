/**
 * to run "dev" in script of package.json, $'use npm run dev'
 */


const express=require('express');

const {ServerConfig/**,Logger*/}=require('./config');   //we don't need to specify whole path in index.js file
const apiRoutes = require('./routes');

const app = express();

// app.use(express.json());//express bhaiya please read request in json
// app.use(express.urlencoded({extended:true}));


app.use('/api',apiRoutes);//any url starting with /api will be redirected to routes folder

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server",{msg:"something"});
});