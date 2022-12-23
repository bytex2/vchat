// Get elements
const signUpForm = document.querySelector("#sign-up-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");

// Listen for form submissions
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the email, password, and username
  const email = emailInput.value;
  const password = passwordInput.value;
  const username = usernameInput.value;

  // Create the user account
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // User account created successfully
      // Update the user's display name with the provided username
      user.updateProfile({ displayName: username })
        .then(() => {           // Display name updated successfully
            // Redirect the user to the messaging website
            window.location.href = "index.html";
          })
          .catch((error) => {
            // An error occurred
            console.error(error);
          });
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  });
  
