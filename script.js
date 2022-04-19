// Write your JavaScript code here!

window.addEventListener("load", function () {

    // You could opt to move the pickPlanet function declaration into script.js to complete
    // the section on selecting a random planet! Up to you...
    function pickPlanet(planets) {

    }

    // fetch planet json data from handlers.education.launchcode.org/static/planets.json
    fetch("handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json(function (jsonArray) {
            console.log(jsonArray);
            // We should code write the rest of this step for displaying randomly
            // selected planet JSON data in this scope, as this is the only spot
            // in which we have access to our array of planet json!
            // 1. Select random planet object from jsonArray
            // 2. Display the random planet's data in the missionTarget div in index.html
            // Here is the HTML formatting for our mission target div.
            /*
                         <h2>Mission Destination</h2>
                         <ol>
                             <li>Name: </li>
                             <li>Diameter: </li>
                             <li>Star: ${star}</li>
                             <li>Distance from Earth: </li>
                             <li>Number of Moons: </li>
                         </ol>
                         <img src="">
            */
        })
    })

    // select our form HTML element
    // document.querySelector('form') --> this will return our form element from index.html
    // isNaN(1) returns false
    // isNaN("abc") returns true ---> Number("abc") returns NaN, therefore isNaN("abc") returns true
    // isNaN("1") returns false ---> Number("1") returns 1, therefore isNaN("1") returns false

    // using some these ideas, we need to validate our form inputs.
    // What does it mean for our form to be valid?
    // Condition 1: no fields can be left empty/all fields are required!
    // Condition 2: The inputted values for pilot/copilot names should be strings (NOT numbers)
    // Condition 3: The inputted values for fuelLevel/cargoMass should be numbers 
    // If we don't meet one of these conditions, we should send an alert notifying the user
    // about their invalid form input.

    // If we meet all three of these conditions, our form is valid!
    // Now we know we are working valid data, so we now need to use this valid data to update
    // the user interface accordingly, using the DOM.

    // Do we have enough fuel to launch? Is the total cargo mass too high to launch?
    // If we don't enough fuel or we too much cargo, then we are not ready to launch.
    // Based on each different condition, the HTML needs to be updated accordingly!
});