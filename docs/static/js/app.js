if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/abstract-algebra/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}