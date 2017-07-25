var userName = prompt( "What's your name?" );
var titleElement = document.querySelector( "h1" );
var context = document.querySelector( "p" );
var titleText = titleElement.textContent;
var backgroundColor = prompt( "What is your favorite primary color?" );

var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "I mean pretty please can I have your name?" );

        checkUserName();
    }
};

checkUserName();

titleElement.textContent = titleText + ", " + userName;

var setTextBySelector = function setTextBySelector( selector, banana ){
    var element = document.querySelector( selector );

    if( element ){
        element.textContent = banana;
    }
};

setTextBySelector( "li", "Here it is!" );

var fizzBuzzer = function fizzBuzzer( divisor ){

};
