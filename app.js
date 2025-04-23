if ('serviceWorker' in navigator) {
  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stop Chrome from showing the prompt automatically
  e.preventDefault();

  // Save the event so we can trigger it later
  deferredPrompt = e;

  // Show your custom "Install" button or UI
  document.getElementById('installBtn').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install');
      } else {
        console.log('User dismissed the install');
      }

      deferredPrompt = null; // Reset it
    });
  }
});
  
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}
