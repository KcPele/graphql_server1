const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
 const mongoose = require('mongoose');

 mongoose.connect(
 'mongodb://localhost/grl_server'
 , {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
 });

 mongoose.connection.once('open', () => {
     console.log('connected to db')
 })

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
   graphiql: true
}))

 
app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});


/* mongoose.connect('mongodb+srv://kcpele:kcpele123@cluster0.v2lru.mongodb.net/test',
{ useNewUrlParser: true,
    useUnifiedTopology: true} ) 
    */

