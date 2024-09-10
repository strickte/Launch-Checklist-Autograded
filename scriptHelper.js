// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML += `<div>
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: {name}</li>
        <li>Diameter: {diameter}</li>
        <li>Star: {star}</li>
        <li>Distance from Earth: {distance}</li>
        <li>Number of Moons: {moons}</li>
      </ol>
      <img src={imageUrl} />;
    </div>`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput) === true) {
    return "Not a Number";
  }
  if (isNaN(testInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log(pilot);
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Pilot and Copilot fields require a name!");
  } else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Fuel and Cargo fields require a number!");
  } else {
    document.getElementById("launchStatus").innerHTML =
      "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById(
      "pilotStatus"
    ).innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
      list.style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("fuelLevel").innerHTML =
        "Fuel level too low for launch";
    }

    if (cargoLevel > 10000) {
      list.style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("cargoMass").innerHTML =
        "Cargo mass too high for launch";
    }
  }
}

async function myFetch(url) {
  let planetsReturned;
  planetsReturned = await fetch(url).then(function (response) {
    response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
