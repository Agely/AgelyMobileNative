var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/*ZONA JQUERY*/

$(document).ready(function() {
    
	//alert("teste do ready");
});

function testeAjax(){
	
	jQuery.ajax({  
		type: "POST",  
		url: "http://sistema.agely.com.br/mobile_teste/mobile?tela=login", 
		beforeSend: function() {
		
			$("#recebe_ajax").html("recebendo...");
		},success: function( data ){
			
			$("#recebe_ajax").html(data);	
		},complete: function (transport) { 
			
			sessionStorage.setItem('trava_pesquisa',0);
			if (transport.status != 200){
			
				alert("Tente de novo!");
			}
		}   
	});
}