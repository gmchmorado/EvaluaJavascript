
//var idtecla

/*var Calculadora = {

}
*/
//Inicialización de variables
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

//Asignación de disparadores de eventos
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
producto.addEventListener("mousedown",function(){producto.setAttribute("style","transform:scale(0.95,0.95)")});
producto.addEventListener("mouseup",function(){producto.setAttribute("style","transform:scale(1,1)")});
resta.addEventListener("mousedown",function(){resta.setAttribute("style","transform:scale(0.95,0.95)")});
resta.addEventListener("mouseup",function(){resta.setAttribute("style","transform:scale(1,1)")});
punto.addEventListener("mousedown",function(){punto.setAttribute("style","transform:scale(0.95,0.95)")});
punto.addEventListener("mouseup",function(){punto.setAttribute("style","transform:scale(1,1)")});
igual.addEventListener("mousedown",function(){igual.setAttribute("style","transform:scale(0.95,0.95)")});
igual.addEventListener("mouseup",function(){igual.setAttribute("style","transform:scale(1,1)")});
mas.addEventListener("mousedown",function(){mas.setAttribute("style","transform:scale(0.95,0.95)")});
mas.addEventListener("mouseup",function(){mas.setAttribute("style","transform:scale(1,1)")});

//funciones para despliegue en pantalla de calculadora
function despliega(x){
  document.getElementById("display").innerHTML = x
};

function resetea(){
  document.getElementById("display").innerHTML = 0
};

//Reestablecimiento de valores al borrar
function reestablece(){
  colector = "0";
  operacion = "";
  operador0 = 0;
  operador1 = 0;
  resultado = 0;
  resetea();
};

//Función para el cambio de signo
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

//Función para ingreso de números
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





/* REQUISITOS
Un método que permita obtener los números cuando se opriman
Un método que almacene y verifique los digitos oprimidos
Un método que borre lo almacenado cuando:
  Se oprima la tecla ce
  ¿Se oprima la tecla =?
Un metodo para cada operación aritmética por realizar
Un metodo para modificar el contenido del "display"
Un metodo que dé un resultado al oprimir la tecla "="
  después de tener 2 números
  después de tener un resultado
*/
