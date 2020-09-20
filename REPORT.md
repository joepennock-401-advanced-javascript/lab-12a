# OAuth Comparative Analysis

## OAuth Provider Name 

Auth0

### Research Conducted By: 

- Peng Chen
- Sarah Michelle Shatto
- Edgar Romero
- Joe Pennock

### Overall Score and Comments
#### Score (Out of 10): 4
#### General Comments
Describe the stack (front-end only? full stack?), database, efficiency, etc. Describe the general usability and learnability

Full stack process. Authentication is handled on the server side. Response is sent to the front end where user does sign in process.



#### Pros

* Versatile, can be used with any other provider, and multiple auth providers at the same time.
* Can be fairly simple when using 3rd party libraries, such as Passort.js.

#### Cons

* Documentation can be a bit confusing. 
* Without using 3rd party libraries, the 'hard way' is very hard and long.

### Ratings and Reviews
#### Documentation

![img](https://images.ctfassets.net/cdy7uua7fh8z/2nbNztohyR7uMcZmnUt0VU/2c017d2a2a2cdd80f097554d33ff72dd/auth-sequence-auth-code.png)

1. The user clicks Login within the regular web application.

2. Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint).

3. Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

4. The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the regular web application.

5. Your Auth0 Authorization Server redirects the user back to the application with an authorization code, which is good for one use.

6. Auth0's SDK sends this code to the Auth0 Authorization Server (/oauth/token endpoint) along with the application's Client ID and Client Secret.

7. Your Auth0 Authorization Server verifies the code, Client ID, and Client Secret.

8. Your Auth0 Authorization Server responds with an ID Token and Access Token (and optionally, a Refresh Token).

9. Your application can use the Access Token to call an API to access information about the user.

10. The API responds with requested data.

#### Systems Requirements

Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at AWS/Heroku?  Does it require a certain database?

Auth0 can be used with any various database types and can, if desired, be set up with a hosting platform like AWS or Heroku.

#### Ramp-Up Projections

How long would/should it take a team of mid-junior developers to become productive?

With basic knowledge of working with oauth frameworks, a team of mid-level junior developers should be able to get basic user signup/signin working within 2-3 hours.

#### Community Support and Adoption levels

How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community?  Is there an active community of developers supporting and growing it?


### Links and Resources

* [framework](https://auth0.com/)
* [docs](https://auth0.com/docs/)
* [examples/tutorials](https://github.com/auth0-samples/auth0-nodejs-webapp-sample/tree/master/01-Login)

### Code Demos

We were't able to get a working application up and running.
* [live/running application](http://xyz.com)
* [code repository](https://github.com/joepennock-401-advanced-javascript/lab-12a)

### Operating Instructions

The authentation part is not working right now. It alwasy return 'unauthorized'

<!-- If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it. -->