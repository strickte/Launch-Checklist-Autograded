// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  //Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const chosenPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
      );
    });

  const launchForm = document.getElementById("launchForm");
  launchForm.addEventListener("submit", function (event) {
    // <input type="text" name="copilotName" />
    event.preventDefault();
    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.querySelector('input[name="pilotName"]').value;
    const copilotName = document.querySelector(
      'input[name="copilotName"]'
    ).value;
    const cargoLevel = document.querySelector('input[name="cargoMass"]').value;
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;

    formSubmission(
      document,
      faultyItems,
      pilotName,
      copilotName,
      fuelLevel,
      cargoLevel
    );
  });
});
