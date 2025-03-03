// Import Firebase
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js");

// Firebase configuration (Use the same config as in `index.html`)
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

// Handle background messages
messaging.onBackgroundMessage(payload => {
    console.log("Received background message: ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/icons/icon-192x192.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
