
var colector = "0";
var operacion = "";
var operador0 = 0;
var operador1 = 0;
var resultado = 0;

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
var reciproco = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var divide = document.getElementById("dividido");
var producto = document.getElementById("por");
var resta = document.getElementById("menos");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var suma = document.getElementById("mas");

uno.addEventListener("mousedown",function(){uno.setAttribute("style","transform:scale(0.95,0.95)")});
uno.addEventListener("mouseup",function(){uno.setAttribute("style","transform:scale(1,1)")});
uno.addEventListener("click",function(){ingresa(uno)});
dos.addEventListener("mousedown",function(){dos.setAttribute("style","transform:scale(0.95,0.95)")});
dos.addEventListener("mouseup",function(){dos.setAttribute("style","transform:scale(1,1)")});
dos.addEventListener("click",function(){ingresa(dos)});
tres.addEventListener("mousedown",function(){tres.setAttribute("style","transform:scale(0.95,0.95)")});
tres.addEventListener("mouseup",function(){tres.setAttribute("style","transform:scale(1,1)")});
tres.addEventListener("click",function(){ingresa(tres)});
cuatro.addEventListener("mousedown",function(){cuatro.setAttribute("style","transform:scale(0.95,0.95)")});
cuatro.addEventListener("mouseup",function(){cuatro.setAttribute("style","transform:scale(1,1)")});
cuatro.addEventListener("click",function(){ingresa(cuatro)});
cinco.addEventListener("mousedown",function(){cinco.setAttribute("style","transform:scale(0.95,0.95)")});
cinco.addEventListener("mouseup",function(){cinco.setAttribute("style","transform:scale(1,1)")});
cinco.addEventListener("click",function(){ingresa(cinco)});
seis.addEventListener("mousedown",function(){seis.setAttribute("style","transform:scale(0.95,0.95)")});
seis.addEventListener("mouseup",function(){seis.setAttribute("style","transform:scale(1,1)")});
seis.addEventListener("click",function(){ingresa(seis)});
siete.addEventListener("mousedown",function(){siete.setAttribute("style","transform:scale(0.95,0.95)")});
siete.addEventListener("mouseup",function(){siete.setAttribute("style","transform:scale(1,1)")});
siete.addEventListener("click",function(){ingresa(siete)});
ocho.addEventListener("mousedown",function(){ocho.setAttribute("style","transform:scale(0.95,0.95)")});
ocho.addEventListener("mouseup",function(){ocho.setAttribute("style","transform:scale(1,1)")});
ocho.addEventListener("click",function(){ingresa(ocho)});
nueve.addEventListener("mousedown",function(){nueve.setAttribute("style","transform:scale(0.95,0.95)")});
nueve.addEventListener("mouseup",function(){nueve.setAttribute("style","transform:scale(1,1)")});
nueve.addEventListener("click",function(){ingresa(nueve)});
cero.addEventListener("mousedown",function(){cero.setAttribute("style","transform:scale(0.95,0.95)")});
cero.addEventListener("mouseup",function(){cero.setAttribute("style","transform:scale(1,1)")});
cero.addEventListener("click",function(){ingresa(cero)});
onc.addEventListener("mousedown",function(){onc.setAttribute("style","transform:scale(0.95,0.95)")});
onc.addEventListener("mouseup",function(){onc.setAttribute("style","transform:scale(1,1)")});
onc.addEventListener("click",function(){reestablece()});
reciproco.addEventListener("mousedown",function(){reciproco.setAttribute("style","transform:scale(0.95,0.95)")});
reciproco.addEventListener("mouseup",function(){reciproco.setAttribute("style","transform:scale(1,1)")});
reciproco.addEventListener("click",function(){cambiar()});
raiz.addEventListener("mousedown",function(){raiz.setAttribute("style","transform:scale(0.95,0.95)")});
raiz.addEventListener("mouseup",function(){raiz.setAttribute("style","transform:scale(1,1)")});
divide.addEventListener("mousedown",function(){divide.setAttribute("style","transform:scale(0.95,0.95)")});
divide.addEventListener("mouseup",function(){divide.setAttribute("style","transform:scale(1,1)")});
divide.addEventListener("click",function(){division()});
producto.addEventListener("mousedown",function(){producto.setAttribute("style","transform:scale(0.95,0.95)")});
producto.addEventListener("mouseup",function(){producto.setAttribute("style","transform:scale(1,1)")});
producto.addEventListener("click",function(){multiplicacion()});
resta.addEventListener("mousedown",function(){resta.setAttribute("style","transform:scale(0.95,0.95)")});
resta.addEventListener("mouseup",function(){resta.setAttribute("style","transform:scale(1,1)")});
resta.addEventListener("click",function(){sustraccion()});
punto.addEventListener("mousedown",function(){punto.setAttribute("style","transform:scale(0.95,0.95)")});
punto.addEventListener("mouseup",function(){punto.setAttribute("style","transform:scale(1,1)")});
punto.addEventListener("click",function(){decimal()});
igual.addEventListener("mousedown",function(){igual.setAttribute("style","transform:scale(0.95,0.95)")});
igual.addEventListener("mouseup",function(){igual.setAttribute("style","transform:scale(1,1)")});
mas.addEventListener("mousedown",function(){mas.setAttribute("style","transform:scale(0.95,0.95)")});
mas.addEventListener("mouseup",function(){mas.setAttribute("style","transform:scale(1,1)")});
mas.addEventListener("click",function(){adicion()});

function despliega(x){
  document.getElementById("display").innerHTML = x
};

function resetea(){
  document.getElementById("display").innerHTML = 0
};

function reestablece(){
  colector = "0";
  operacion = "";
  operador0 = 0;
  operador1 = 0;
  resultado = 0;
  resetea();
};

function cambiar(){
  if (colector !== "0") {
    if (operador0<0) {
      if (colector.length <= 9) {
        operador0 = -operador0;
        colector = operador0.toString();
        despliega(colector);
      }
    } else {
      if (colector.length <= 8) {
        operador0 = -operador0;
        colector = operador0.toString();
        despliega(colector);
      }
    }
  }
};

function ingresa(gatillo){
  if (operador0<0) {
    if (colector.length < 9) {
      if (colector == "0") {
        colector = gatillo.id;
      } else {
        colector = colector + gatillo.id;
      };
      operador0 = parseFloat(colector);
      despliega(colector);
    };
  } else {
    if (colector.length < 8) {
      if (colector == "0") {
        colector = gatillo.id;
      } else {
        colector = colector + gatillo.id;
      };
      operador0 = parseFloat(colector);
      despliega(colector);
    };
  };
};

function decimal(){
  if (operador0<0) {
    if (colector.length < 9) {
      if (colector.indexOf(".") < 0){
        colector = colector + ".";
      };
      operador0 = parseFloat(colector);
      despliega(colector);
    };
  } else {
    if (colector.length < 8) {
      if (colector == "0") {
        colector = colector + ".";
      } else if (colector.indexOf(".") < 0){
        colector = colector + ".";
      };
      operador0 = parseFloat(colector);
      despliega(colector);
    };
  };
};

function adicion(){
  operacion = "sumar";
  operador1 = operador0;
  operador0 = 0;
  colector = "0";
  despliega("");
};

function sustraccion(){
  operacion = "restar";
  operador1 = operador0;
  operador0 = 0;
  colector = "0";
  despliega("");
};

function multiplicacion(){
  operacion = "multiplicar";
  operador1 = operador0;
  operador0 = 0;
  colector = "0";
  despliega("");
};

function division(){
  operacion = "dividir";
  operador1 = operador0;
  operador0 = 0;
  colector = "0";
  despliega("");
};

if (true) {

} else {

}

//parseFloat()

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
