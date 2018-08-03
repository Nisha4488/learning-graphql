var express = require('express')
var express_graphql = require('express-graphql')
var {buildSchema} = require('graphql')

// GraphQL schema: defines how client can access the data
var schema =buildSchema(`
  type Query {
    message: String
  }
  `)

// Root Resolver post every call made by client the query is executed

var root ={
   message:()=>'Hello World'
 }

//create an express server and a GraphQL endpoint

var app =express()
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true //you can directly write the query in user interfacde
}))

app.listen(4000, ()=>console.log('Express GraphQL Server Now Running On localhost:4000/graphql'))
