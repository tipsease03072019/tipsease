# tipsease

Pitch: Service workers need a way to collect tips directly, rather than through their employers. This app will allow payment processing directly to service workers as a tip.

MVP Features Breakdown: Login Page - After a user logs in, they'll be directed to a home page.  
Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.  
Home Page - Contains a list of Service workers, (Restaurant servers, Bellhops, Valet Attendants etc.) laid out in a grid format. Service  
Worker Page - Loads information about the worker, thumbnail photo, how long they've been at their current job in years/months, Name, and a tagline to help you remember who they are. Action items found on page are Add Tip.

Stretch: Implement a payment feature that actually allows money exchange with a service like, paypal or stripe or venmo.

## Endpoints

https://tipsease.herokuapp.com/

// List of Employees //
(user does not have to be logged in or register to send tips to employees)

const headersObj = {
headers: { authorization: token }
};

axios
.get("https://tipsease.herokuapp.com/employees", headersObject)
.then(response => {
console.log(response.data)
})
.catch(err => console.log(err));

-returned
[
{
"id": "",
"username": ""
}
]

// Customer //

// Register
const newUser = {
username: "", // (Unique) required
password: "", // required
account_type: "", // required (Customer or Employee)
email: "", // (Unique) optional
img_url: "" // optional,
};

axios
.post("https://tipsease.herokuapp.com/auth/register", newUser)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
{
"ids": [
4
],
"message": "Registered",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NTIzMzg2NDUsImV4cCI6MTU1MjQyNTA0NX0.wDHsSTyHq2Uzi0x8PyJUi7iGA37stGH2-S9OyArsKb4"
}

// Login
const creds = {
username: "" // required
password: "" // required
};

axios
.post("https://tipsease.herokuapp.com/auth/register", creds)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
[
{
message: "Logged In";
id: "",
token: ""
}
]

// Customer by ID

const headersObj = {
headers: {
authorization: token
}
};

axios
.get("https://tipsease.herokuapp.com/${}", headersObj)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
[
{
"id": "",
"username": "",
"email": "",
"img_url": ""
}
]

/////////

// Employee //

// Register
const newUser = {
username: "", // (Unique) required
password: "", // required
account_type: "", // required (Customer or Employee)
email: "", // (Unique) optional
img_url: "" // optional
};

axios
.post("https://tipsease.herokuapp.com/auth/register", newUser)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
[
{
id: "",
token: ""
}
]

// Login
const creds = {
username: "" // required
password: "" // required
};

axios
.post("https://tipsease.herokuapp.com/auth/register", creds)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
[
{
message: "Logged In";
token: ""
}
]

// Employee by ID

const headersObj = {
headers: {
authorization: token
}
};

axios
.get("https://tipsease.herokuapp.com/${}", headersObj)
.then(res => {
console.log(res.data)
})
.catch(err => {
console.log(err)
});

-returned
[
{
"id": "",
"username": "",
"email": "",
"img_url": ""
}
]
