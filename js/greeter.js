var userName = prompt( "What's your name?" );
var titleElement = document.querySelector( "h1" );
var titleText = titleElement.textContent;

var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "I mean pretty please can I have your name?" );

        checkUserName();
    }
};

checkUserName();


titleElement.textContent = titleText + ", " + userName;
