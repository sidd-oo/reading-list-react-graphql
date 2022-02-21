const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})
