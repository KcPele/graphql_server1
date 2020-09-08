const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');


const app = express();

/* mongoose.connect('mongodb+srv://kcpele:kcpele123@cluster0.v2lru.mongodb.net/test',
{ useNewUrlParser: true,
    useUnifiedTopology: true} ) 
    */
mongoose.connect('mongodb://localhost/grl_server',
{ useNewUrlParser: true,
    useUnifiedTopology: true})

mongoose.connection.once('open', () => {
    console.log("connected to database")
})

app.use('/graphql',graphqlHTTP({ 
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});