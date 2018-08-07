// initializing the google map with the function name specified in the callback of the API Link.
function initMap() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: {lat: 33.7490, lng: -84.3880}
    })

}

// create new markers.
    // you will need to create 2000 of them.
    // they should all be randomly generated.

// increment in legend
    // the legend should auto increment based on what hemisphere the coordinates are in.

// toggle to see results.
    // toggle the checkbox next to each hemisphere in  the legend to either not see or see pins for that hemisphere

// button tp refresh results. 
    // maybe just refresh the page?

// needed
// 1. RNG function
    // you will probably need to create new objects with the results.
    // then display those objects.
    // you will also need some sort of validation for the RNG to make sure they are coordinates.
// 2. Marker generation function
    // this could probably go inside the RNG function or the RNG inside this function.
    // the incrementer might also need to go in here.
    // same with the hemisphere locator etc...
// 3. if statements to decide what hemisphere the RNG is in.
// 4. refresh the page button.
// 5. toggle visability function.
// 6. incrementing function.


/// you will also need to include a legend in the html.
/// in this legend will need to be the four hemispheres.
/// each hemisphere will need to have its own color. (just use the ones in the example.)