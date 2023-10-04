/**EVENTOS**/

/**Un evento es una señal de que algo ha ocurrido. Todos los nodos(etiquetas html). Que los eventos no solo se van a limitar al DOM */


/**readyState */
console.log(document.readyState);// loading

/**document.readyState
 * laoding
 * interactive
 * complete
*/

/**EVENTOS =>QUE DEFINEN CICLO DE VIDA DE UNA PAGINA 
 *tres ciclos que definen el ciclo de toda pagina 
 * DOMContentLoaded
 *Load
 *Beforeunload/unload
*/

//DOMContentLoaded

document.addEventListener('DOMContentLoaded', function () {
  console.log('El DOM ha cargado ...');
  console.log(document.readyState);// interactive
})


window.addEventListener('load', function () {
  console.log('El DOM ha cargado ...');
  console.log(document.readyState);// complete
})

/**
 * para reaccionar a un evento vamos a estar construyendo un handler(controlador) es una funcion , que se va estar ejecutando en consecuencia de ese envento.
 *tenemos tres formas de asignar eventos:
 1)-Atributo HTML  => onClick= 'handler' ✅
 2)-Propiedad del Dom = element.onClick = handler
 3)-Metodos:element.addEventListener(event, handler)
 */


//  1)-Atributo HTML  => onClick= 'handler'

//handler (controlador)
function atributo() {
  //console.log('desde Handler(controlador) me ejecute');
  window.alert('desde Handler(controlador) me ejecute, ejemplo1');
}

//2)-Propiedad del Dom = element.onClick = handler

//handler (controlador)
function propiedadId() {
  alert('Desde propiedad Id, ejemplo2')
}

const propiedad = document.getElementById("propiedad")
// element.onClick = handler


propiedad.onclick = propiedadId //✅


//ERRORES COMUNES ❌

//handler (controlador)
function errores() {
  alert('errores comunes, ejemplo3')
}

const btn = document.getElementById('btn')
btn.onclick = errores //✅
//btn.onclick = errores() //❌
// element.onClick = handler()


// 3) -Metodos: element.addEventListener(event, handler)

const btn2 = document.getElementById('btn2')

function handlerFunction() {
  alert('Desede metodo con addEventListener')
  btn2.removeEventListener('click', handlerFunction)
}

btn2.addEventListener('click', handlerFunction)





