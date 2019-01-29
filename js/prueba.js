function oprime(marca){
  document.getElementById(marca).style.height = "60px";
  document.getElementById(marca).style.width = "70.797px";
  document.getElementById(marca).style.marginRight = "7.078px";
};

function libera(marca){
  document.getElementById(marca).style.height = "62.906px";
  document.getElementById(marca).style.width = "77.875px";
  document.getElementById(marca).style.marginRight = "0px";
};

function oprimemas(marca){
  document.getElementById(marca).style.height = "96%";
  document.getElementById(marca).style.width = "86%";
  //document.getElementById(marca).style.marginRight = "7px";
};

function liberamas(marca){
  document.getElementById(marca).style.height = "100%";
  document.getElementById(marca).style.width = "90%";
  //document.getElementById(marca).style.marginRight = "0px";
};
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var onc = document.getElementById("on");
var signo = document.getElementById("sing");
var raiz = document.getElementById("raiz");
var divide = document.getElementById("dividido");
var producto = document.getElementById("multiplica");
var resta = document.getElementById("menos");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var suma = document.getElementById("mas");

uno.addEventListener("mousedown",function(){uno.setAttribute("style","transform:scale(0.95,0.95)")});
dos.addEventListener("mousedown",function(){dos.setAttribute("style","transform:scale(0.95,0.95)")});
tres.addEventListener("mousedown",function(){tres.setAttribute("style","transform:scale(0.95,0.95)")});
cuatro.addEventListener("mousedown",function(){cuatro.setAttribute("style","transform:scale(0.95,0.95)")});
cinco.addEventListener("mousedown",function(){cinco.setAttribute("style","transform:scale(0.95,0.95)")});
seis.addEventListener("mousedown",function(){seis.setAttribute("style","transform:scale(0.95,0.95)")});
siete.addEventListener("mousedown",function(){siete.setAttribute("style","transform:scale(0.95,0.95)")});
ocho.addEventListener("mousedown",function(){ocho.setAttribute("style","transform:scale(0.95,0.95)")});
nueve.addEventListener("mousedown",function(){nueve.setAttribute("style","transform:scale(0.95,0.95)")});
cero.addEventListener("mousedown",function(){cero.setAttribute("style","transform:scale(0.95,0.95)")});
onc.addEventListener("mousedown",function(){onc.setAttribute("style","transform:scale(0.95,0.95)")});
signo.addEventListener("mousedown",function(){signo.setAttribute("style","transform:scale(0.95,0.95)")});
dos.addEventListener("mousedown",function(){dos.setAttribute("style","transform:scale(0.95,0.95)")});
raiz.addEventListener("mousedown",function(){raiz.setAttribute("style","transform:scale(0.95,0.95)")});
divide.addEventListener("mousedown",function(){divide.setAttribute("style","transform:scale(0.95,0.95)")});
producto.addEventListener("mousedown",function(){producto.setAttribute("style","transform:scale(0.95,0.95)")});
resta.addEventListener("mousedown",function(){resta.setAttribute("style","transform:scale(0.95,0.95)")});
punto.addEventListener("mousedown",function(){punto.setAttribute("style","transform:scale(0.95,0.95)")});
igual.addEventListener("mousedown",function(){igual.setAttribute("style","transform:scale(0.95,0.95)")});
mas.addEventListener("mousedown",function(){mas.setAttribute("style","transform:scale(0.95,0.95)")});

/*
    ObjTecla[asociador] = document.getElementById(asignaId);
    console.log("Paso # " + i + " Valor del ID = " + asignaId + " Valor de asociador " + asociador + " de tipo " + typeof asociador + " asigno función");
    ObjTecla[asociador].addEventListener("mousedown",function(){ObjTecla[asociador].setAttribute("style","transform:scale(0.95,0.95)")});
    ObjTecla[asociador].addEventListener("mouseup",function(){ObjTecla[asociador].setAttribute("style","transform:scale(1,1)")});
    i++
  };
}

/*  Resulto igual, creo que el problema es la asignación de un sólo objeto para todos, lo intendo con un objeto con propiedades para cada tecla.
  //var i = 0;
  for (var i = 0; i < ObjTeclas.length; ) {
    asignaId = ObjTeclas[i].id;
    ObjTecla[i] = document.getElementById(asignaId);
    console.log("Paso # " + i + "Valor del ID = " + asignaId + " de tipo " + typeof asignaId + " asigno función");
    document.getElementById(asignaId).addEventListener("mousedown",function(){document.getElementById(asignaId).setAttribute("style","transform:scale(0.95,0.95)")});

    console.log("función down asignada al Id " + asignaId);
    document.getElementById(asignaId).addEventListener("mouseup",function(){document.getElementById(asignaId).setAttribute("style","transform:scale(1,1)")});

    console.log("función up asignada al Id " + asignaId);
    console.log("Saliendo de ID = " + asignaId + " -  Continua");
    i++
  };
};

/* El bucle hace que todas las teclas activen la última sólamente se guarda el intento
var ObjTeclas = document.getElementsByClassName("tecla");

function asignar(){
  var asignaId;
  var ObjTecla;
  //var i = 0;
  for (var i = 0; i < ObjTeclas.length-1; ) {
    asignaId = ObjTeclas[i].id;
    console.log("Paso # " + i + "Valor del ID = " + asignaId + " de tipo " + typeof asignaId + " asigno función");
    document.getElementById(asignaId).onmousedown = function(){oprime(asignaId)};
    console.log("función down asignada al Id " + asignaId);
    document.getElementById(asignaId).onmouseup = function(){libera(asignaId)};
    console.log("función up asignada al Id " + asignaId);
    console.log("Saliendo de ID = " + asignaId + " -  Continua");
    i++
  };
};

*/


/*
ObjTecla = document.getElementById(asignaId);
console.log("Contenido ObjTecla =" + ObjTecla + "función común");
ObjTecla.onmousedown = function(){oprime(asignaId)};
ObjTecla.onmouseup = function(){libera(asignaId)};
console.log("Saliendo de ID =" + asignaId+" - "+ObjTecla+" Continua");
*/

/* Esto SI funcionó
var ObjTecla = document.getElementById("7");

ObjTecla.onmousedown = function(){oprime("7")};
ObjTecla.onmouseup = function(){libera("7")};
*/
