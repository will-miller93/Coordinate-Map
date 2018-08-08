// initializing the google map with the function name specified in the callback of the API Link.
function initMap() {
    // creating new instance of a google map
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: {lat: 33.7490, lng: -84.3880}
    });
    // test coordinates for making marker
    // var ATL = {lat: 33.7490, lng: -84.3880};
    // creating a new marker with the coordinates set above.
    // var marker = new google.maps.Marker({
    //     position: ATL, map: map
    // });
    // variables to increment with
    var NE = 0;
    var NW = 0;
    var SE = 0;
    var SW = 0;
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

        // if you put the new google.maps.Marker function here then it will create all 2000 markers.
        // so now for the if statement to make the colored markers.
        if ((randLat >= 0 && randLat <= 90) && (randLong <= 0 && randLong >= -180)){ // NE
            var NECount = document.getElementById('NECount');
            NECount.value++;
            NE++;
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                draggable: false,
            });
            NEArr.push(marker);
        } else if ((randLat >= 0 && randLat <= 90) && (randLong >= 0 && randLong <= 180)) { // NW
            var NWCount = document.getElementById('NWCount');
            NWCount.value++;
            NW++;
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                draggable: false,
            });
            NWArr.push(marker);
        } else if ((randLat <= 0 && randLat >= -90) && (randLong <= 0 && randLong >= -180)) { // SE
            var SECount = document.getElementById('SECount');
            SECount.value++;
            SE++;
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map, 
                icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                draggable: false,
            });
            SEArr.push(marker);
        } else if ((randLat <= 0 && randLat >= -90) && (randLong >= 0 && randLong <= 180)) { // SW
            var SWCount = document.getElementById('SWCount');
            SWCount.value++;
            SW++;
            var marker = new google.maps.Marker({
                position: newMarkerObj,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                draggable: false,
            });
            SWArr.push(marker);
        } else {
            err++;
        };
    }
    // console log the incrementing variables here to make sure there are 2000...
    console.log(NE);
    console.log(NW);
    console.log(SE);
    console.log(SW);
    console.log(err);

    // now init the legend
    var legend = document.getElementById('legend');

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

    // NECheckbox click event
    $('#NECheckBox').on('click', function(){
        console.log('clicked');
        if (document.getElementById('NECheckBox').checked){
            console.log('setting to map');
            for (var i = 0; i < NEArr.length; i++) {
                NEArr[i].setMap(map);
            }
        } else {
            console.log('setting to null');
            for (var i = 0; i < NEArr.length; i++) {
                NEArr[i].setMap(null);
            }
        }
    });

    // toggle for the NW pins
    $('#NWCheckBox').on('click', function(){
        console.log('clicked');
        if (document.getElementById('NWCheckBox').checked){
            console.log('setting to map');
            for (var i = 0; i < NWArr.length; i++) {
                NWArr[i].setMap(map);
            }
        } else {
            console.log('setting to null');
            for (var i = 0; i < NWArr.length; i++) {
                NWArr[i].setMap(null);
            }
        }
    });

    // toggle for the SE pins
    $('#SECheckBox').on('click', function(){
        console.log('clicked');
        if (document.getElementById('SECheckBox').checked){
            console.log('setting to map');
            for (var i = 0; i < SEArr.length; i++) {
                SEArr[i].setMap(map);
            }
        } else {
            console.log('setting to null');
            for (var i = 0; i < SEArr.length; i++) {
                SEArr[i].setMap(null);
            }
        }
    });

    // toggle for the SW pins
    $('#SWCheckBox').on('click', function(){
        console.log('clicked');
        if (document.getElementById('SWCheckBox').checked){
            console.log('setting to map');
            for (var i = 0; i < SWArr.length; i++) {
                SWArr[i].setMap(map);
            }
        } else {
            console.log('setting to null');
            for (var i = 0; i < SWArr.length; i++) {
                SWArr[i].setMap(null);
            }
        }
    });
};

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

// refresh results function
    // reload page on click.


///// TO DO /////
// 1. add the legend to the HTML
// 2. generate one marker on the Map

/// In Legend ///
// 1. tags for each of the hemispheres.
// 2. checkboxes next to all of them
// 3. Colors for each the NE, NW, SE, SW
// 4. incrementer for each region
// 5. Button for refresh.

/// IN JS ///
// 1. marker generator function ((DONE))
// 2. marker coloring (give each marker an id or class based on the region. then in CSS color by that ID) ((DONE))
// 3. Legend incrementing.
