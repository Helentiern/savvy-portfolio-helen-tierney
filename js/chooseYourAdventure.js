var story = {
    "start": {
        "intro": "Welcome to your new adventure! Would you like to go on a plane or on a train?"
    },
    "plane": "We are heading West! Hope you brought your floaties and sunscreen we are heading to a tropical paradise! When we get there would you like to go to the beach or on a hike? (answer beach or hike)",
    "train": "Grab your coat and your hunger, we are heading north to live happily ever after in the land of poutine and hockey!",
    "beach": "Soak up those rays and enjoy the water!",
    "hike": "We are heading up the side of a volcano! Not sure if it is active or not, lets find out!"
};

var intro = prompt( story.start.intro );
var island;

if( intro === "plane" ){
    island = prompt( story.plane );

    if( island === "hike" ){
        prompt( story.hike );
    }
    else if( island === "beach" ){
        document.querySelector( "#output" ).textContent = story.beach;
    }
}
else if( intro === "train" ){
    document.querySelector( "#output" ).textContent = story.train;
}
