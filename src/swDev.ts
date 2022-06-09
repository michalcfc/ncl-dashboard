export default function swDev() {
  const swUrl = '/service-worker.js';
  navigator.serviceWorker.register(swUrl)
    .then((response) => {
      console.warn('response', response);
    });
}
