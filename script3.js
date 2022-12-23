// Get elements
const signInForm = document.querySelector("#sign-in-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Listen for form submissions
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the email and password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // User signed in successfully
      // Redirect the user to the messaging website
      window.location.href = "index.html";
    })
    .catch((error) => {
      // An error occurred
      console.error(error);
    });
});
