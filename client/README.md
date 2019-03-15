## Getting started

You can view a live demo over at https://tips-ease.netlify.com/

To get the frontend running locally:

- Clone this repo
- `yarn install` to install all req’d dependencies
- `yarn start` to start the local server (this project uses create-react-app)

### Making requests to the backend API

For convenience, we have a live API server running at https://tipsease.herokuapp.com/api/for the application to make requests against. You can view [the API spec here](https://github.com/tipsease03072019/tipsease/blob/master/EndPoint.md) which contains all routes & responses for the server.

## Functionality overview

The application is a site to send tips to servers without employeer interaction called Tipsease. It uses a custom API for all requests. User can visit the site and send some money over to maksthedev to show how much you like our app.

**General functionality:**

- Authenticate users via Firebase with Email and Google Options
- CRUD Users
- CR** Transactions

**The general page breakdown looks like this:**

- Sign in/Sign up page (URL: /login )
   - Use Firebase and Cookies
- Send a tip (URL: / )
- Wallet Page and Transaction History (URL: /wallet )
   - See recent Transactions