// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEvT0hAxeHV27Rdis7tj-LW8TNj2YiepU",
  authDomain: "vchat-656c9.firebaseapp.com",
  databaseURL: "https://vchat-656c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vchat-656c9",
  storageBucket: "vchat-656c9.appspot.com",
  messagingSenderId: "508673232455",
  appId: "1:508673232455:web:59022333537bf556b9ab62",
  measurementId: "G-80E441BJRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = firebase.database();
const messagesRef = database.ref("messages");

// Get elements
const messageInput = document.querySelector("#message-input");
const messageForm = document.querySelector("#message-form");
const messagesContainer = document.querySelector("#messages");

// Listen for new messages
messagesRef.once("value", (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const message = childSnapshot.val();

    // Create the message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Add the sender
    const senderElement = document.createElement("div");
    senderElement.classList.add("message-sender");
    senderElement.textContent = message.sender;
    messageElement.appendChild(senderElement);

    // Add the message text
    const textElement = document.createElement("div");
    textElement.classList.add("message-text");
    textElement.textContent = message.text;
    messageElement.appendChild(textElement);

    // Add the message to the container
    messagesContainer.appendChild(messageElement);
  });
});

// Listen for new messages
messagesRef.once("value", (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const message = childSnapshot.val();

    // Create the message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Add the sender
    const senderElement = document.createElement("div");
    senderElement.classList.add("message-sender");
    senderElement.textContent = message.sender;
    messageElement.appendChild(senderElement);

    // Add the message text
    const textElement = document.createElement("div");
    textElement.classList.add("message-text");
    textElement.textContent = message.text;
    messageElement.appendChild(textElement);

    // Add the message to the container
    messagesContainer.appendChild(messageElement);
  });
});

