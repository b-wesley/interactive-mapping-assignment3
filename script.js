mapboxgl.accessToken = "https://github.com/b-wesley/interactive-mapping-assignment3/security/secret-scanning/unblock-secret/3CSGxN1TnFNAWLXSWHifQ3rn4Az"

/*
setting boilerplate map stuff
*/

const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    config: {
        basemap: {
        lightPreset: 'night',
        showPlaceLabels: false,
        showPointOfInterestLabels: false,
        showRoadLabels: false,
        show3dObjects: false,
        show3dTrees: false,
        show3dLandmarks: false,
        showLandmarkIconLabels: false,
        theme: "faded"
        }
  },
    projection: 'globe', // display the map as a globe
    zoom: 12, // initial zoom level, 0 is the world view, higher values zoom in
    center: [-73.98839, 40.73639] // center the map on this longitude and latitude
});

map.addControl(new mapboxgl.NavigationControl());

/* loading data
*/

const venues = [
  {
    "Venue": "Forest Hills",
    "Rating": "3 Stars",
    "artist": "King Gizzard",
    "Notes": "Been here many times and every time the sound quality is a little bit worse.",
    "lon_lat": [
      -73.84993,
      40.71972
    ]
  },
  {
    "Venue": "Purgatory",
    "Rating": 10000,
    "artist": "Ski Club",
    "Notes": "Best DIY venue in NYC, best queer bar in NYC.",
    "lon_lat": [
      -73.90575,
      40.68721
    ]
  },
  {
    "Venue": "Irving Plaza",
    "Rating": "Forgettable",
    "artist": "Sunny Day Real Estate + Pool Kids",
    "Notes": "One of the venues of all time",
    "lon_lat": [
      -73.98828,
      40.7349
    ]
  },
  {
    "Venue": "Bowery Ballroom",
    "Rating": "1 thumbs up",
    "artist": "They are Gutting a Body of Water, warmachine",
    "Notes": "It took me way too long to figure out where the stairs to go from the bar to the venue are",
    "lon_lat": [
      -73.99334,
      40.72039
    ]
  },
  {
    "Venue": "Caffeine Underground (RIP)",
    "Rating": "Flawless",
    "artist": "My old band",
    "Notes": "The best shitty little DIY venue/coffee shop. RIP :(",
    "lon_lat": [
      -73.91454,
      40.69219
    ]
  },
  {
    "Venue": "Warsaw",
    "Rating": 8,
    "artist": "Cap'n Jazz",
    "Notes": "Standard venue. Standard vibes.",
    "lon_lat": [
      -73.94846,
      40.72241
    ]
  },
  {
    "Venue": "Brooklyn Paramount",
    "Rating": 8,
    "artist": "Joyce Manor",
    "Notes": "Beautiful ornate ceilings. Lovely spacious lounges + lobbies. Too many ads.",
    "lon_lat": [
      -73.98119,
      40.69012
    ]
  },
  {
    "Venue": "The Broadway",
    "Rating": "Two thumbs up",
    "artist": "Winona Forever",
    "Notes": "Classic dive bar venue.",
    "lon_lat": [
      -73.92485,
      40.69086
    ]
  },
  {
    "Venue": "Brooklyn Made",
    "Rating": "Sad it's gone :/",
    "artist": "Covet",
    "Notes": "Had a realy groovy background behind the stage",
    "lon_lat": [
      -73.92217,
      40.70706
    ]
  },
  {
    "Venue": "Pete's Candy Store",
    "Rating": 1,
    "artist": "My old band",
    "Notes": "Terrible crowd. Minuscule stage. Decent grilled cheese. Most generous drink ticket + food policy for bands I've ever seen.",
    "lon_lat": [
      -73.95018,
      40.71808
    ]
  },
  {
    "Venue": "TV Eye",
    "Rating": 10.1,
    "artist": "Some goth band that sounded exactly like The Cure",
    "Notes": "A beacon of hope in this cruel, dark world.",
    "lon_lat": [
      -73.90525,
      40.69786
    ]
  },
  {
    "Venue": "Market Hotel",
    "Rating": 9.4,
    "artist": "Giraffes? Giraffes!, Tagabow, No Vacation",
    "Notes": "The first place I ever went to in Brooklyn. Great view of trains behind the stage. S-tier goth night. Never seen the water cooler empty.",
    "lon_lat": [
      -73.9347,
      40.69688
    ]
  },
  {
    "Venue": "Knockdown Center",
    "Rating": 7,
    "artist": "Feeble Little Horse",
    "Notes": "Really nifty place. Kinda pricy drinks.",
    "lon_lat": [
      -73.91385,
      40.7152
    ]
  },
  {
    "Venue": "Elsewhere",
    "Rating": 6.5,
    "artist": "Origami Angel, Pool Kids, some producer from the 90s",
    "Notes": "Expensive coat check. Expensive beer. Ok sound.",
    "lon_lat": [
      -73.92322,
      40.70947
    ]
  },
  {
    "Venue": "Arlene's Grocery",
    "Rating": 8.2,
    "artist": "Various Artists",
    "Notes": "Nice Standard Spot for Nice Standard Local Music",
    "lon_lat": [
      -73.98839,
      40.7213
    ]
  },
  {
    "Venue": "Piano's",
    "Rating": 3,
    "artist": "My friend's old band I forget what they were called",
    "Notes": "Only go there if your friend is playing there.",
    "lon_lat": [
      -73.9877,
      40.72103
    ]
  },
  {
    "Venue": "Baby's All Right",
    "Rating": "idk",
    "artist": "Tried to see Algernon Cadwallader but didn't get off the waitlist :(",
    "Notes": "Legendary spot. If it goes under I'll cry",
    "lon_lat": [
      -73.96342,
      40.71001
    ]
  },
  {
    "Venue": "Ornithology",
    "Rating": 7,
    "artist": "Jazz",
    "Notes": "Good jazz. Worst bartenders I've ever encountered. Crowd can be annoying tbh, I saw a saxophonist shush a group of French tourists there once",
    "lon_lat": [
      -73.93207,
      40.69544
    ]
  },
  {
    "Venue": "Bar Freda",
    "Rating": "10/10",
    "artist": "Me",
    "Notes": "Played my first show there. Solid dive bar.",
    "lon_lat": [
      -73.90526,
      40.70155
    ]
  },
  {
    "Venue": "Brooklyn Steel",
    "Rating": "Pretty Decent",
    "artist": "Psychedelic Porn Crumpets",
    "Notes": "It's a venue.",
    "lon_lat": [
      -73.93879,
      40.71936
    ]
  }
];

/* jquery didn't quite work for me so I just hard-coded the json in above
const venues = $.getJSON("venues.json", function() {
    console.log("success");
});
*/


venues.forEach((venue) =>{
    const popup_html = `<h1>${venue.Venue}</h1>
                        <h3>Overall Rating: ${venue.Rating}</h3>
                        <h3>Band Seen: ${venue.artist}</h3>
                        <h3>Description: ${venue.Notes}</h3>
                        `
    const marker = new mapboxgl.Marker()
                        .setLngLat(venue.lon_lat)
                        .setPopup(
                            new mapboxgl.Popup()
                            .setHTML(popup_html)
                        )
                         .addTo(map);
                        

}

)
