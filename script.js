function activateSystem() {

  document.getElementById("page").style.backgroundColor = "#2563eb";

  document.getElementById("console").style.backgroundColor = "#fef3c7";

  document.getElementById("title").innerHTML = "SYSTEM ACTIVE";

  document.getElementById("status").innerHTML = "STATUS: SYSTEM IS RUNNING";

  // This changes the page into active mode.
}


function receiveSignal() {

  document.getElementById("message").innerHTML = "Incoming signal received.";

  document.getElementById("status").innerHTML = "STATUS: SIGNAL RECEIVED";

  // This changes the message and status.
}


function systemCheck() {

  alert("System check complete.");

  document.getElementById("status").innerHTML = "STATUS: SYSTEM CHECK COMPLETE";

  // This uses a browser alert and updates the status.
}


function resetSystem() {

  document.getElementById("page").style.backgroundColor = "#111827";

  document.getElementById("console").style.backgroundColor = "white";

  document.getElementById("title").innerHTML = "SYSTEM STANDBY";

  document.getElementById("message").innerHTML = "Waiting for user input.";

  document.getElementById("status").innerHTML = "STATUS: READY";

  // This returns the interface to its original state.
}


document.getElementById("activateButton").addEventListener("click", activateSystem);
// This runs activateSystem when the button is clicked.

document.getElementById("signalButton").addEventListener("click", receiveSignal);
// This runs receiveSignal when the button is clicked.

document.getElementById("checkButton").addEventListener("click", systemCheck);
// This runs systemCheck when the button is clicked.

document.getElementById("resetButton").addEventListener("click", resetSystem);
// This runs resetSystem when the button is clicked.