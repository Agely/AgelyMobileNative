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

//quando o documento for carregado
	$(document).ready(function(){

	//verifica se o lembrar está on
	if(localStorage.getItem('lembrar')=='on'){

		//autopreenche os campos do formulário
		$('#dominio').val(localStorage.getItem('dominio'));
		$('#usuario').val(localStorage.getItem('usuario'));
		$('#senha').val(localStorage.getItem('senha'));
	}
});

//quando o formulário for dado submit
$('#form_login').submit(function(event){

	//verifica se o lembrar está on
	if($('#lembrar').val()=='on'){

		//preenche as variáveis de sessão javascript com os valores dos campos html
		localStorage.setItem('dominio', $('#dominio').val());
		localStorage.setItem('usuario', $('#usuario').val());
		localStorage.setItem('senha', $('#senha').val());
		localStorage.setItem('lembrar', $('#lembrar').val());
	}else{

		//limpa a sessão javascript por completo
		localStorage.clear();
	}
	testeAjax();
});

function testeAjax(){
	alert('url: "http://sistema.agely.com.br/mobile_teste/mobile?dominio='+localStorage.getItem("dominio")+'&usuario='+localStorage.getItem("usuario")+'&senha='+localStorage.getItem("senha"));
	jQuery.ajax({  
		type: "GET",  
		url: "http://sistema.agely.com.br/mobile_teste/mobile?dominio=grupoduzani&usuario=francisco&senha=123",
		//url: "http://127.0.0.1:8888/mobile?dominio="+localStorage.getItem('dominio')+"&usuario="+localStorage.getItem('usuario')+"&senha="+localStorage.getItem('senha'), 
		//url: "http://sistema.agely.com.br/mobile_teste/mobile?dominio="+localStorage.getItem('dominio')+"&usuario="+localStorage.getItem('usuario')+"&senha="+localStorage.getItem('senha'), 
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