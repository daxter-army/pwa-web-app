// Everytime sw.js is updated, a new sw is installed in the browser

// New SW are not installed, if your application is not active (i.e there is no open tabs of your application)
// Because there might be scenarios in which there can be breaking changes in your application.
// Therefore, new SW is only installed, when your app becomes active
self.addEventListener("install", (event) => {
  console.log("[Service worker]: Installing sw ...", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service worker]: Activating sw ...", event);

  // Well after installing SW must also be activated automaticallty, but it can fail to do so,
  // This line assures us that the installed SW has been activated also.
  return self.clients.claim();
});

// This event fires when any JS file via <script> tag, CSS file via <link> tag or image via <img> tag is loaded
// This also fires when you manually use fetch() in your app
self.addEventListener("fetch", (event) => {
  console.log("[Service worker]: Fetching something ...", event);

  return event.respondWith(fetch(event.request));
});
