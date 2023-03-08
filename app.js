var deferredPrompt;

if ("serviceWorker" in navigator) {
  // You can also define the scope of the sw like this register("./sw.js", { scope: "/help/" }), to just a page, but for this you would have to place your sw.js at the route.
  // And you can't do like other way around. (ki sw.js /help/ mein pada hai, and you want to control all the pages, not possible)
  navigator.serviceWorker.register("./sw.js").then(() => {
    console.log("Service is registered");
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  console.log("beforeinstallprompt fired...");
  e.preventDefault();
  deferredPrompt = e;
  return false;
});
