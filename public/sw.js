self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Only handle http/https requests
  if (
    !event.request.url.startsWith("http://") &&
    !event.request.url.startsWith("https://")
  ) {
    return;
  }

  // Skip caching for range requests (video streaming, media, etc)
  if (event.request.headers.get("range")) {
    return;
  }

  event.respondWith(
    fetch(event.request).catch((error) => {
      // Return offline response if needed
      console.error("Fetch failed:", error);
    })
  );
});
