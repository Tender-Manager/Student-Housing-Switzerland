// Import Firebase Messaging
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js");

// ✅ Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAK716HaIO4bwBC-3ZNqNQ20Oa0pfCv5Hs",
    authDomain: "student-housing-switzerland.firebaseapp.com",
    projectId: "student-housing-switzerland",
    storageBucket: "student-housing-switzerland.firebasestorage.app",
    messagingSenderId: "926144922705",
    appId: "1:926144922705:web:c1e03148bf1b334e9ea470",
    measurementId: "G-WXCXZVNPHM"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Initialize Firebase Messaging
const messaging = firebase.messaging();

// ✅ Handle Background Messages
messaging.onBackgroundMessage((payload) => {
    console.log("📩 Received background message: ", payload);

    const notificationTitle = payload.notification?.title || "New Notification";
    const notificationOptions = {
        body: payload.notification?.body || "You have a new message",
        icon: "/icons/icon-192x192.png",
        click_action: "https://student-housing-switzerland.web.app"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// ✅ Handle Notification Clicks
self.addEventListener("notificationclick", function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow("https://student-housing-switzerland.web.app"));
});
