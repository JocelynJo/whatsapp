var botonEnviar=document.querySelector('.icon-mic');
botonEnviar.setAttribute("type","button");


botonEnviar.addEventListener('click', function(){
 	var mensaje= document.getElementById("mensajes").value;
	if (mensaje.length==0||mensaje==null){
		return false;
	}else{
		var contieneTodo=document.getElementById("chat");//papas de todos
		var boxContiene=document.createElement('div');
		boxContiene.classList.add("w-message","w-message-out");
		var boxTexto=document.createElement('div');
		boxTexto.classList.add("w-message-text");
		var contieneMenj=document.createElement('p');
		var nodoMensaje=document.createTextNode(mensaje);
	
		var divHora=document.createElement('div');
		var hora=document.createTextNode("14:45");
		divHora.appendChild(hora);
		divHora.classList.add("time");
		contieneMenj.appendChild(nodoMensaje);
		divHora.appendChild(hora);
		boxTexto.appendChild(contieneMenj);
		boxTexto.appendChild(divHora);
		boxContiene.appendChild(boxTexto);
		contieneTodo.appendChild(boxContiene);

	}

})
/*function hora(){
	var fechaHoy = new Date();
	var seg = Math.round(fechaHoy/1000);
    var min=Math.floor(seg/60);
    var seg2=seg%60;
    var hrs=Math.floor(min/60);
    var min2=min%60;
    var hrs2=hrs%24;
  
   	console.log(hrs2+':'+min2);
   	setTimeout(hora(),refresh);
    
}*/


function cambiar(){
	var cabecera=document.getElementById('avatar-cabecera');
	var img=document.getElementById('avatar-cabecera').firstChild;

}











