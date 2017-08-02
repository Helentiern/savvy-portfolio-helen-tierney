var story = {
    "start": {
        "prompt": "Welcome to your new adventure! Would you like to go on a plane or on a train?",
        "options": [ "plane", "train" ]
    },
    "plane": {
        "prompt": "We are heading West! Hope you brought your floaties and sunscreen we are heading to a tropical paradise! When we get there would you like to go to the beach or on a hike? (answer beach or hike)",
        "opitions": [ "beach", "hike" ]
    },
    "train": {
        "prompt": "Grab your coat and your hunger, we are heading north to live happily ever after in the land of poutine and hockey!"
    },
    "beach": {
        "prompt": "Soak up those rays and enjoy the water!"
    },
    "hike": {
        "prompt": "We are heading up the side of a volcano! Not sure if it is active or not, lets find out!"
    }
};

var response = prompt( story.start.prompt );

var outputToUser = function outputToUser( choice ){
    document.querySelector( "#output" ).textContent = story[choice].prompt;
};

var responseFromUser = function responseFromUser( choice ){
    response = prompt( story[choice].prompt );
};

var runAdventure = function runAdventure(){
    if( response === "plane" ){
        responseFromUser( "plane" );

        if( response === "hike" ){
            responseFromUser( "hike" );
        }
        else if( response === "beach" ){
            outputToUser( "beach" );
        }
        else{
            responseFromUser( "plane" );

            runAdventure();
        }
    }
    else if( response === "train" ){
        outputToUser( "train" );
    }
    else{
        responseFromUser( "intro" );

        runAdventure();
    }
};

runAdventure();
