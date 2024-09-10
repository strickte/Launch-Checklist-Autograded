// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  //Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //add eventlistener for submit
      addDestinationInfo(pickPlanet(listedPlanets));

      /* @@@@@   What is the event listener doing here? 
@@@@@    Doing something wrong with the fetch. Console logs on lines 18 and 21 are coming up undefined.
@@@@@    Issue back with doing the refresh again. Where to put preventDefault()?
@@@@@    Broke something in scriptHelper? fails npm test for updating if fuel too low or cargo too high
Will be able to better diagnose likely when can stop the reload issue.*/
    });

  const launchForm = document.getElementById("launchForm");
  launchForm.addEventListener("submit", function (event) {
    // <input type="text" name="copilotName" />

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
      cargoLevel,
      fuelLevel
    );
    event.preventDefault();
  });
});
