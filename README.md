# tipsease

Pitch: Service workers need a way to collect tips directly, rather than through their employers. This app will allow payment processing directly to service workers as a tip.

MVP Features Breakdown: Login Page - After a user logs in, they'll be directed to a home page.  
Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.  
Home Page - Contains a list of Service workers, (Restaurant servers, Bellhops, Valet Attendants etc.) laid out in a grid format. Service  
Worker Page - Loads information about the worker, thumbnail photo, how long they've been at their current job in years/months, Name, and a tagline to help you remember who they are. Action items found on page are Add Tip.

Stretch: Implement a payment feature that actually allows money exchange with a service like, paypal or stripe or venmo.

# Endpoints

https://tipsease.herokuapp.com/

## // Users //

## Get Users x

```
axios
    .get("https://tipsease.herokuapp.com/api/users")
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));

-Returned
[
    {
        "id": "1",
        "username": "employee",
        "email": "employee@email.com",
        "img_url": "https://www.fillmurray.com/640/360",
        "account_type": "Employee",
        "created_at": "2019-03-11 23:33:02"
    }
]
```

## // Register x

```
const newUser = {
    username: "", // (Unique) required
    account_type: "", // required (Customer or Employee)
};

axios
    .post("https://tipsease.herokuapp.com/api/users/register", newUser)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });

-Returned

{
    "ids": [
    4
    ],
    "message": "Registered",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NTIzMzg2NDUsImV4cCI6MTU1MjQyNTA0NX0.wDHsSTyHq2Uzi0x8PyJUi7iGA37stGH2-S9OyArsKb4"
}
```

<!-- ## // Login

```
const creds = {
    username: "" // required
    password: "" // required
};

axios
    .post("https://tipsease.herokuapp.com/api/login", creds)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });

-Returned

[
    {
        message: "Logged In";
        id: "",
        token: ""
    }
]
``` -->

## // Users by ID

```
const headers = {
    token: ""
};

axios
    .get(`https://tipsease.herokuapp.com/api/users/${uid}`, headers)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });

-Returned

[
    {
        "id": "",
        "username": "",
        "email": "",
        "img_url": ""
    }
]
```

## Update User Info

```
const headersObj = {
    headers: {
        Token: ""
    },
    data: {
        username: "",
        password: "",
        email: "",
        img_url: ""
    }
}

axios
    .put(`https://tipsease.herokuapp.com/api/users/${uid}`, headersObj)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));

-Returned

{
    users {
        "username": "",
        "password": "",
        "email":"",
        "img_url": ""
    }
}
```

## Delete User by ID

```
const headers = {
    token: "",
}

axios
    .delete(`https://tipsease.herokuapp.com/api/users/${uid}`, headers)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));

-Returned

{
    "User Deleted: [
    {
    "username": "",
    "password": "",
    "email":"",
    "img_url": ""
    }
    ],
    "message": "User was successfully deleted."
}
```

## Transactions

```
# Get Transactions by ID

const headers = {
    token: ""
}

axios
    .get(`https://tipsease.herokuapp.com/api/transactions/${uid}`, headers)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));

-Returned

[
    {
    "id": 6,
    "users_id": 5,
    "user_balance": 0,
    "tip": 10,
    "created_at": "2019-03-12 21:14:07"
    }
]
```

# Create Transaction / Update Employee Balance

```
const data = {
    "uid": 5,
	"tip": 10
}

axios
    .post(`https://tipsease.herokuapp.com/api/transactions/${uid}`, data)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err));

-Returned

1

```
