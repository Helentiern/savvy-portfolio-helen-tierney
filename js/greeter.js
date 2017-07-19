var userName = prompt( "What's your name?" );
var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "I mean pretty please can I have your name?" );

        checkUserName();
    }
};

checkUserName();


alert( "Hello " + userName );
