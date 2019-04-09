import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from "./graphql/";
import db from './db';

const app = express();
const PORT = process.env.PORT || 4000;

db();

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  }),
);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

