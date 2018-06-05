'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Creating schema
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello ugly world!'
  }
};

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.use('/graphql/v1', graphqlHTTP({
  schema,
  rootValue: root,
  graphql: true
}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
