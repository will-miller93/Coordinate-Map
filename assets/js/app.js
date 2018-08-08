// initializing the google map with the function name specified in the callback of the API Link.
function initMap() {
    // creating new instance of a google map
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: {lat: 6.6666, lng: 1.6163}
    });
    // variable to use for checking for errors in marker generation
    var err = 0;

    // arrays for each
    var NEArr = [];
    var NWArr = [];
    var SEArr = [];
    var SWArr = [];
    // start of marker generation
    for (var i = 0; i < 2000; i++){
        // getting each lat and long with the RNG helper functions
        // set these to a variable to use in making the marker object.
        var randLat = getRandLat(-90, 90);
        var randLong = getRandLong(-180, 180);
        var newMarkerObj = {lat: randLat, lng: randLong};

        // Series of if statements to differentiate the markers.
        if ((randLat >= 0 && randLat <= 90) && (randLong <= 0 && randLong >= -180)){ // NE
            // declaring a variable with a value of the element with the id NECount (will be used for incrementing below)
            var NECount = document.getElementById('NECount');
            // using the above varible to increment dynamically in the legend.
            NECount.value++;
            // creating a new marker.
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // this is making the marker blue.
                draggable: false,
            });
            // pushing all of the markers with these coordinate ranges into an array for later use by the toggle functions.
            NEArr.push(marker);
        } else if ((randLat >= 0 && randLat <= 90) && (randLong >= 0 && randLong <= 180)) { // NW
            // declaring a variable with a value of the element with the id NWCount (will be used for incrementing below) 
            var NWCount = document.getElementById('NWCount');
            // using the above varible to increment dynamically in the legend.
            NWCount.value++;
            // creating a new marker.
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                draggable: false,
            });
            // pushing all of the markers with these coordinate ranges into an array for later use by the toggle functions.
            NWArr.push(marker);
        } else if ((randLat <= 0 && randLat >= -90) && (randLong <= 0 && randLong >= -180)) { // SE
            // declaring a variable with a value of the element with the id SECount (will be used for incrementing below)
            var SECount = document.getElementById('SECount');
            // using the above varible to increment dynamically in the legend.
            SECount.value++;
            // creating a new marker.
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map, 
                icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                draggable: false,
            });
            // pushing all of the markers with these coordinate ranges into an array for later use by the toggle functions.
            SEArr.push(marker);
        } else if ((randLat <= 0 && randLat >= -90) && (randLong >= 0 && randLong <= 180)) { // SW
            // declaring a variable with a value of the element with the id SWCount (will be used for incrementing below)
            var SWCount = document.getElementById('SWCount');
            // using the above varible to increment dynamically in the legend.
            SWCount.value++;
            // creating a new marker.
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                draggable: false,
            });
            // pushing all of the markers with these coordinate ranges into an array for later use by the toggle functions.
            SWArr.push(marker);
        } else {
            // if any of the coordinates fall outside of any parameter it will add the error here
            // to be console logged later.
            err++;
        };
    }
    // console log the err variable to see if any markers have not been made
    console.log(err);

    // now init the legend
    var legend = document.getElementById('legend');

    // this will float the legend in the bottom right of the map
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

    // NECheckbox click event
    $('#NECheckBox').on('click', function(){
        // console.log('clicked');
        // checking if the corresponding checkbox is checked or not.
        if (document.getElementById('NECheckBox').checked){
            // console.log('setting to map');
            // setting the map if the checkbox is now checked
            for (var i = 0; i < NEArr.length; i++) {
                NEArr[i].setMap(map);
            }
        } else {
            // console.log('setting to null');
            // now setting the map to null if checked is now not checked.
            for (var i = 0; i < NEArr.length; i++) {
                NEArr[i].setMap(null);
            }
        }
    });

    // toggle for the NW pins
    $('#NWCheckBox').on('click', function(){
        // console.log('clicked');
        if (document.getElementById('NWCheckBox').checked){
            // console.log('setting to map');
            // setting the map if the checkbox is now checked
            for (var i = 0; i < NWArr.length; i++) {
                NWArr[i].setMap(map);
            }
        } else {
            // console.log('setting to null');
            // now setting the map to null if checked is now not checked.
            for (var i = 0; i < NWArr.length; i++) {
                NWArr[i].setMap(null);
            }
        }
    });

    // toggle for the SE pins
    $('#SECheckBox').on('click', function(){
        // console.log('clicked');
        if (document.getElementById('SECheckBox').checked){
            // console.log('setting to map');
            // setting the map if the checkbox is now checked
            for (var i = 0; i < SEArr.length; i++) {
                SEArr[i].setMap(map);
            }
        } else {
            // console.log('setting to null');
            // now setting the map to null if checked is now not checked.
            for (var i = 0; i < SEArr.length; i++) {
                SEArr[i].setMap(null);
            }
        }
    });

    // toggle for the SW pins
    $('#SWCheckBox').on('click', function(){
        // console.log('clicked');
        if (document.getElementById('SWCheckBox').checked){
            // console.log('setting to map');
            // setting the map if the checkbox is now checked
            for (var i = 0; i < SWArr.length; i++) {
                SWArr[i].setMap(map);
            }
        } else {
            // console.log('setting to null');
            // now setting the map to null if checked is now not checked.
            for (var i = 0; i < SWArr.length; i++) {
                SWArr[i].setMap(null);
            }
        }
    });

    // function to reload page on reset button click
    $('#refresh').on('click', function(){
        location.reload();
    })
};

/// HELPER FUNCTIONS ///

// define RNG for latitude (this function should be defined here and then used later in the marker generation.)
function getRandLat(min, max) {
    // use the two inclusive values method for RNG so define min and max first
    // Math.ceil returns the smallest INT >= the given number.
    min = Math.ceil(min);
    // Math.floor returns the largest INT <= the given number.
    max = Math.floor(max);
    // now generate the random number between the two declared above.
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// define RNG for longitude (this function should be defined here and then used later in the marker generation.)
function getRandLong(min, max) {
    // use the two inclusive values method for RNG so define min and max first
    // Math.ceil returns the smallest INT >= the given number.
    min = Math.ceil(min);
    // Math.floor returns the largest INT <= the given number.
    max = Math.floor(max);
    // now generate the random number between the two declare variables
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

