function powerOn() {

  document.getElementById("page").style.backgroundColor = "#2563eb";

  document.getElementById("console").style.backgroundColor = "#dbeafe";

  document.getElementById("title").innerHTML = "SYSTEMS ONLINE";

  document.getElementById("message").innerHTML =
    "Power restored. Launch systems are online.";

  document.getElementById("status").innerHTML =
    "STATUS: POWER ONLINE";

  // This turns on the launch system and changes the interface.
}


function startEngine() {

  document.getElementById("display").style.backgroundColor = "#fde68a";

  document.getElementById("message").innerHTML =
    "Main engine started. Preparing for launch.";

  document.getElementById("status").innerHTML =
    "STATUS: ENGINE RUNNING";

  // This starts the rocket engine and changes the mission status.
}


function launchCheck() {

  alert("All systems ready for launch.");

  document.getElementById("title").innerHTML =
    "READY FOR LAUNCH";

  document.getElementById("display").style.backgroundColor = "#dcfce7";

  document.getElementById("message").innerHTML =
    "Launch check complete. Rocket is ready.";

  document.getElementById("status").innerHTML =
    "STATUS: READY FOR LAUNCH";

  // This uses a browser alert and completes the launch check.
}


function launchRocket() {

  document.getElementById("page").style.backgroundColor = "#ea580c";

  document.getElementById("console").style.backgroundColor = "#ffedd5";

  document.getElementById("display").style.backgroundColor = "#fed7aa";

  document.getElementById("title").innerHTML =
    "LIFTOFF!";

  document.getElementById("message").innerHTML =
    "Rocket launched successfully.";

  document.getElementById("status").innerHTML =
    "STATUS: ROCKET LAUNCHED";

  // This launches the rocket and changes the final mission status.
}


function resetMission() {

  document.getElementById("page").style.backgroundColor = "#0b132b";

  document.getElementById("console").style.backgroundColor = "#f8fafc";

  document.getElementById("display").style.backgroundColor = "#e2e8f0";

  document.getElementById("title").innerHTML =
    "MISSION STANDBY";

  document.getElementById("message").innerHTML =
    "Rocket systems are waiting for activation.";

  document.getElementById("status").innerHTML =
    "STATUS: READY";

  // This returns the launch control panel to its original state.
}


document.getElementById("powerButton").addEventListener("click", powerOn);
// This runs powerOn when POWER ON is clicked.


document.getElementById("engineButton").addEventListener("click", startEngine);
// This runs startEngine when START ENGINE is clicked.


document.getElementById("checkButton").addEventListener("click", launchCheck);
// This runs launchCheck when LAUNCH CHECK is clicked.


document.getElementById("launchButton").addEventListener("click", launchRocket);
// This runs launchRocket when LAUNCH is clicked.


document.getElementById("resetButton").addEventListener("click", resetMission);
// This runs resetMission when RESET is clicked.