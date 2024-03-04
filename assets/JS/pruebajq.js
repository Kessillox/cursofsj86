$( document ).ready(function() {
    console.log( "ready!" );

    //Efectos
    $( "#color-shift" ).on( "click", function() {
        $( "h1" ).fadeToggle( "slow", "linear" );
        
    //Color   
        $("p").css({"background-color": "green"});
        $("#div1").css({"background-color":"blue"});
    
    //Animación    
    $("#boton1").click(function(){
        $( "#div1" ).animate({
        height: "toggle"
        }, 1000, function() {
            });
        } );
    });
});