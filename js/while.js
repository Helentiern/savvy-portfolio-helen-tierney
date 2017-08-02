
var testNumber = 345;
var themePicker = prompt( "What color would you like?" );
var headerSize = {
    "margin": "20px",
    "font-size": "100px"
};
var itemColorli;
var itemColor = function itemColor(){
    itemColorli = prompt( "What is your other favorite color?" );

    $( "li" )
        .css( "color", itemColorli );
};

$( "h1" )
    .animate( headerSize, 1000, "swing", itemColor )
    .css( "color", themePicker );

var appendFizzBuzz = function appendFizzBuzz( testNumber ){
    var $ol = $( "ol" );

    while( testNumber > 0 ){
        if( testNumber % 3 === 0 && testNumber % 5 === 0 ){
            $ol.append( "<li>FizzBuzz</li>" );
        }
        else if( testNumber % 3 === 0 ){
            $ol.append( "<li>Fizz</li>" );
        }
        else if( testNumber % 5 === 0 ){
            $ol.append( "<li>Buzz</li>" );
        }
        else{
            $ol.append( "<li>" + testNumber + "</li>" );
        }
        testNumber--;
    }
};
