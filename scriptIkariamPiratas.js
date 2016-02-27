/*
* Instrucciones:
* Abrir la ventana de Piratas
* Abrir en el navegador la herramienta de desarrollador con F12.
* Click en Console
* Pegar este código en la consola
* Darle a intro
* Mantener el navegador, la ventana de Piratas y la consola abiertos
* Se irá mostrando en una nueva ventana las veces que se a clicado y los puntos conseguidos
* Para ver la info tienes que tener los popups activos
* Puntos free!!
*/
var botonPiratas= document.getElementsByClassName("button"); 
var contador=0; 
var inicial = 0;
var win = window.open("", "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");
win.document.write("<html><body><h1>Info</h1><div id='info'></div></body></html>");
window.setInterval(function(){
	contador++;
	inicial+=115;
	botonPiratas[0].click(); 
	win.document.getElementById("info").innerHTML = "clicado: "+contador+" veces. conseguido: "+inicial;
}, 405000);