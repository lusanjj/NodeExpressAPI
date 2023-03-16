//  "type":"module",  at package.json to allow us import
import express from 'express';
//allow us to get incoming post body request
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //json -- javascript object noation:common format for sneding and requesting data to rest api

app.use('/users',usersRoutes);

app.get('/',(req,res)=> res.send("Hello"));



app.listen(PORT,() => console.log(`Server Running on port:http://localhost:${PORT}`))