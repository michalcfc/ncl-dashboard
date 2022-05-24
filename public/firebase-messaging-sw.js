//INCLUDE LIBS
import firebase from "firebase/compat";

importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


//REGISTER SW
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
        console.log('Service worker registration failed, error:', err);
    });
}

//UNIQUE MS ID
firebase.initializeApp({
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
})

const initMessaging = firebase.messaging()