import 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();

const url: string = 'https://api.themoviedb.org/3/authentication';

const options: object = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
}

fetch(url ,options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch((err) => console.error(`ERROR: ${err}`))