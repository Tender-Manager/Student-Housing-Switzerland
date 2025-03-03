importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging.js");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK716HaIO4bwBC-3ZNqNQ20Oa0pfCv5Hs",
    authDomain: "student-housing-switzerland.firebaseapp.com",
    projectId: "student-housing-switzerland",
    storageBucket: "student-housing-switzerland.firebasestorage.app",
    messagingSenderId: "926144922705",
    appId: "1:926144922705:web:c1e03148bf1b334e9ea470",
    measurementId: "G-WXCXZVNPHM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background Message Handler
messaging.onBackgroundMessage((payload) => {
    console.log("[Firebase Messaging] Received background message: ", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icons/icon-192x192.png"
    });
});
