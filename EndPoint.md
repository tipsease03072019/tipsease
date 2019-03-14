# Endpoints
`https://tipsease.herokuapp.com/`

# Users
#### Get Users 
```
axios
    .get("https://tipsease.herokuapp.com/api/users", headersObject)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));
```
Successful Return
```
{
    "id": "1",
    "username": "employee",
    "email": "employee@email.com",
    "img_url": "https://www.fillmurray.com/640/360",
    "account_type": "Employee",
    "created_at": "2019-03-11 23:33:02"
}
```
----
#### Register
```
const newUser = {
    username: "", //(Unique) required
    uid:"", (unique) required
    account_type: "", // required (Customer or Employee)
    email: "", // (Unique) optional
    img_url: "" // optional,
};

axios
    .post("https://tipsease.herokuapp.com/api/users/register", newUser)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });
```
Successful Return
```
{
    id: 1,
    message: "Registered",
}
```
---Obsolete because of firebase
<!-- #### Login
```
const creds = {
    username: "USERNAME",
    password: "PASSWORD",
}

axios
    .post("https://tipsease.herokuapp.com/api/login", creds)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });
```
Successful Return
```
{
    message: "Logged In",
    id: "USER ID",
    token: "TOKEN"
}
``` --> Obsolete because of firebase
---
#### Users by ID
```
const headersObj = {
  headers: {
    token: firebase idtoken
  }
};

axios
  .get("https://tipsease.herokuapp.com/users/:uid", headersObj)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  });
```
Successful Return
```
{
    "id": "ID",
    "username": "USERNAME",
    "email": "EMAIL",
    "img_url": "IMAGE URL",
}
```
---
#### Update User Info
```
const headersObj = {
  headers: {
    token: firebase idtoken
  },
  changes: {
    username: "USERNAME",
    password: "PASSWORD",
    email: "EMAIL",
    img_url: "IMAGE URL"
  }
}

axios
  .put("https://tipsease.herokuapp.com/users/:uid", headersObj)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => console.log(err));
```