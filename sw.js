// Install Event - Cache essential files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "page-crissier.html",
                "page-chavannes.html",
                "chemin-de-praz-1.html",
                "chemin-de-praz-2.html",
                "chemin-de-praz-3.html",
                "chemin-de-praz-4.html",
                "chemin-de-praz-5.html",
                "chemin-de-praz-6.html",
                "chemin-de-praz-7.html",
                "chemin-de-praz-8.html",
                "styles.css",
                "background.jpg",
                "Lausanne.jpg",
                "icons/icon-192x192.png",
                "icons/badge.png"
            ]);
        })
    );
    self.skipWaiting(); // Activate worker immediately
});

// Activate Event - Clean up old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== "pwa-cache")
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim(); // Take control of open pages
});

// Fetch Event - Serve from cache if available
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(() => caches.match("offline.html")) // Show fallback page if offline
    );
});

// Push Notification Event - Display Notifications
self.addEventListener("push", event => {
    const options = {
        body: event.data ? event.data.text() : "New notification!",
        icon: "/icons/icon-192x192.png", // Replace with your app icon
        badge: "/icons/badge.png", // Optional: A small icon
        vibrate: [200, 100, 200], // Vibration pattern
        actions: [
            { action: "open", title: "Open App" },
            { action: "close", title: "Dismiss" }
        ]
    };

    event.waitUntil(
        self.registration.showNotification("New Update!", options)
    );
});

// Notification Click Event - Open App or Close Notification
self.addEventListener("notificationclick", event => {
    event.notification.close();
    if (event.action === "open") {
        event.waitUntil(clients.openWindow("index.html"));
    }
});
