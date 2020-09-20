'use strict';
let URL = 'https://lab-12a.us.auth0.com/authorize';

let options = {
  client_id: '9B1QmVWu54txcQa88zEMwZl0Q6jjfs1C',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/callback',
  state: 'whatever',
};


let QueryString = Object.keys(options).map((key) => {
  return `${key}=` + encodeURIComponent(options[key]);
}).join('&');

let authURL = `${URL}?${QueryString}`;

let link = document.getElementById('auth0');
link.setAttribute('href', authURL);
console.log(link);

