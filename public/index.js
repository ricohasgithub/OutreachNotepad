
// User status variables
const loggedin = false;

// Html DOM elements

// Main document body div
let main = document.getElementById("main-body");

// Event Listener for DOM intro text append
document.addEventListener('DOMContentLoaded', function() {
  console.log("Method Called");
  if (!loggedin) {
    // If the has not loggedin yet, append message stating that the user must first sign in
    let logPrompt = document.createElement("H1");
    let logPromptText = document.createTextNode("Please Log in to Continue");

    logPrompt.appendChild(logPromptText);

    // Add css
    logPrompt.style.margin = '300px 435px';
    logPrompt.style.align = 'center';

    main.appendChild(logPrompt);
    console.log("Appended Child");
  } else {
    // User has signed in already, append with profile page and stats

  }
}, false);
