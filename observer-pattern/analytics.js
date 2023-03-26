import Observer from "./observer";

function sendToGoogleAnalytics(data) {
  console.log("Sent to Google analytics: ", data);
}

function sendToCustomAnalytics(data) {
  console.log("Sent to custom analytics: ", data);
}

function sendToEmail(data) {
  console.log("Sent to email: ", data);
}

Observer.subcribe(sendToGoogleAnalytics);
Observer.subcribe(sendToCustomAnalytics);
Observer.subcribe(sendToEmail);
