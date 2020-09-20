'use strict';

const superagent = require('superagent');

const CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
const TOKEN_SERVER = process.env.TOKEN_SERVER;
const REDIRECT_URI = process.env.REDIRECT_URI;
const STATE = process.env.STATE;
// const REMOTE_API = process.env.REMOTE_API;
module.exports = async (req, res, next) => {

  // Get the code
  let code = req.query.code;
  console.log('(1) CODE:', code)

  // Exchange the code for a token
  let remoteToken = await exchangeCodeForToken(code);
  console.log('(2)', remoteToken)

  // Get user info from GitHub
  // let remoteUser = await getRemoteUser(remoteToken);
  // console.log('(3)', remoteUser);
  // Connect that with our database

  // let localUser = await getLocalUser(remoteUser.login)
  // console.log('(4)', localUser);

  next();
}


/*
vfoLbxFPEbMxDD9a

AUTH0_CLIENT_SECRET=UrXL2FkIkWm9gIBfRyxuFVp2_sQMw1udfTp6fx3KEI2xUvPX46It78XeHs6n1P0j
AUTH0_CLIENT_ID=9B1QmVWu54txcQa88zEMwZl0Q6jjfs1C
AUTH0_DOMAIN=lab-12a.us.auth0.com
AUTH0_CLIENT_SECRET=UrXL2FkIkWm9gIBfRyxuFVp2_sQMw1udfTp6fx3KEI2xUvPX46It78XeHs6n1P0j
SESSION_SECRET=secretShoes
TOKEN_SERVER=https://lab-12a.us.auth0.com/oauth/token
*/

async function exchangeCodeForToken(code) {

  let tokenResponse = await superagent.post('https://lab-12a.us.auth0.com/oauth/token')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      redirect_uri: REDIRECT_URI,
    });

  let access_token = tokenResponse.body.access_token;

  return access_token;

}

async function getRemoteUser(token) {

  let userResponse = await superagent.get(REMOTE_API)
    .set('user-agent', 'express-server')
    .set('Authorization', `token ${token}`)

  let user = userResponse.body;

  return user;
}

