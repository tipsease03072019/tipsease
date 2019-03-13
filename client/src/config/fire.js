import firebase from "firebase";
try {
    firebase.initializeApp({
        apiKey: "AIzaSyBT70-AbWgR0JxE20Xqcxofdz7VoYBW-WM",
        authDomain: "tipsease-8615e.firebaseapp.com",
        databaseURL: "https://tipsease-8615e.firebaseio.com",
        projectId: "tipsease-8615e",
        storageBucket: "tipsease-8615e.appspot.com",
        messagingSenderId: "555169907457"

    })
}catch(err){
    if(!/already exists/.test(err.message)){
        console.log("Firebase initialization error raised", err.stack);
    }
}

const fire=firebase;
export default fire;