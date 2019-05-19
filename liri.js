//required things
require("dotenv").config()
var Spotify = require('node-spotify-api');
var keys = require('./keys');
//global values

typeOfSearch = process.argv[2]
console.log(typeOfSearch)
searchCriteria = process.argv.slice(3).join("")
console.log(searchCriteria)

promptSelection(typeOfSearch)
// functions

function promptSelection(testingSearchType){
    switch(testingSearchType){
        case "spotify-this":
        //test spotify-this was typed
        console.log(`***************************
                    \n**Spotify-this was chosen**
                    \n***************************`)
        //if title was chosen            
        if (searchCriteria){
            //run api pull
            spotifyApi(searchCriteria)
        }
        // if title was not chosen
        else if(!searchCriteria){
            spotifyApi("The Sign Ace of Base")
            //console.log(`you suck`)
        }          
        break;
        case "concert-this":
        //spotifyApi();
        //test concert-this was typed
        console.log(`***************************
                    \n**Concert-this was chosen**
                    \n***************************`)
        break;
        case "movie-this":
        
        //test movie-this was typed
        console.log(`***************************
                    \n***movie-this was chosen***
                    \n***************************`)
        break;
        case "do-this":
        //spotifyApi();
        //test do-this was typed
        console.log(`***************************
                    \n**do-this was chosen**
                    \n***************************`)
        break;
        default:
        console.log(`*************************
                    \n**que quieres que haga?**
                    \n*************************`)
    }
}

function spotifyApi(objectToSearch){
    console.log(`\n
                ******* Searching Database *******
                \n`)
    //console.log(searchCriteria)
    var spotify = new Spotify(keys.spotify);
    spotify.search({
        type:'track',
        query: objectToSearch || "The Sign Ace of Base", function(err, data){
            if (err){
                console.log(`..............dude there was an error.........`)
                return console.log(`Error Occured: ` + err)
            }
            console.log(data.name);
        }
})
}