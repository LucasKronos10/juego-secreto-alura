//? numero secreto del programa

let numero_maximo = 100
let numeroSecreto = Math.floor(Math.random() * numero_maximo) + 1;

let numeroUsuario = 0;//* aca va a estar el numero del usuario
let intentos = 1;
// let palabrasVeces = 'vez';
let maximosIntentos = 2;


while (numeroUsuario != numeroSecreto ) {
    // alert('hola mundo');
     numeroUsuario = parseInt(prompt(`escribe un entre el 1 y ${numero_maximo} numero`));
    console.log(typeof(numeroUsuario)); //# aca voy a poder ver el numero del usuario en consola
    if (numeroUsuario == numeroSecreto) { //! aca se hace la compracion de los 2 numeros
        //!Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
    }else{
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //! incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        // intentos +=1;
        intentos ++;

        //palabrasVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo ${maximosIntentos} de intentos, y el numero era ${numeroSecreto}`);
            break
            
        }
        //!La condicion no se cumplio
        // alert('Lo siento, no acertaste el numero');
    
    }
    
}






// # un poco de mejora del codigo

// let numeroSecreto = Math.floor(Math.random() *10)+1;
// let numeroUsuario = prompt("escribe un entre el 1 y 10 numero");
// // alert('hola mundo');
// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert('Acertaste el numero');
// }
// console.log(numeroSecreto);














//! tarea 1 javasicrit

/*
* opcion 1 , literal con las intrucciones

*/

// alert('Bienvenida y bienvenido a nuestro sitio web');
// let nombre = 'Lua';
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// alert('Error! Completa todos los campos');
// let mensajeDeError  = 'Error! Completa todos los campos';
// alert(mensajeDeError);
// nombre = prompt('Cual es tu nombre');
// edad = prompt('Cual es tu edad');
// if (edad >= 18) {
//     alert('Puedes obtener tu licencia de conducir');
// } 

//* opcion 2 , como yo lo interprete
// alert('Bienvenida y bienvenido a nuestro sitio web');
// let nombre = prompt('tu nombre');
// let edad = prompt('tu edad');
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// let mensajeDeError  = 'Error! Completa todos los campos';

// if (edad >= 18) {
//     alert('Puedes obtener tu licencia de conducir');
// } else{

//     alert(mensajeDeError);
// }

/*
! desafia 2 
*/

// //* 1
// /*
// #Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
//  #muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
// */
// let diaDeSemana = prompt('¿Que dia de la semana es?');


// if ( diaDeSemana == 'Sabado' || diaDeSemana == 'Domingo') {
//     alert('Buen fin de semana');
    
// }else{
//     alert('Buena semana');

// }

// //* 2
// /*
// #Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
// */
// let numeroIngresado = prompt('Ingrese un numero');
// if (numeroIngresado == 0) {
//     alert('El numero nuetro: ' + numeroIngresado);
// } else if (numeroIngresado > 0) {
//  alert(`El numero es positivo : ${numeroIngresado}`);
// } else {
//  alert(`El numero es negativo : ${numeroIngresado}`);
// }

//  //* 3
//  /*
//  #Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
//  # En caso contrario, muestra "Intentalo nuevamente para ganar.".
//  */
// let numeroIngresado3 = prompt('Ingrese una puntuacion '); 
// if (numeroIngresado3 >= 100) {
//     alert('¡Felicidades, has ganado!');
// }else{
//     alert('Intentalo nuevamente para ganar');
// }

// //*4
// /*
// #Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// #utilizando un template string para incluir el valor del saldo.
// */
// let saldodeUsuario = 10000;
// alert(`el salgo de usuario es: ${saldodeUsuario.toLocaleString('es-CL')}`);

// //* 5
// /*
// #Pide al usuario que ingrese su nombre mediante un prompt.
// # Luego, muestra una alerta de bienvenida usando ese nombre.
// */
// let nombresuario = prompt('¿Ingrese su nombre?');
// alert(`Bienvenido: ${nombresuario}`);



//*6
//* como yo resolvi el loop infinito con contador 0 condicion < y contador = contador + 1 
//* que es igual a += 1
// let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
// let suma = 0;
// let contador = 0;

// while(contador < cantidadNumeros){
    
//     let numero = parseInt(prompt('Ingrese el numero:'));
//     suma += numero;
//     contador += 1;
// }

// let promedio = suma / cantidadNumeros;

// console.log(promedio);
// console.log(contador);


//* como se resolvia el loop infinito con contador --
// let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
// let suma = 0;
// let contador = cantidadNumeros;

// while(contador > 0){

//     let numero = parseInt(prompt('Ingrese el numero:'));
//     suma += numero;
//     contador --;
// }

// let promedio = suma / cantidadNumeros;

// console.log(promedio);
// console.log(contador);

//! desafio3
/*
*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
*/
// let contador = 1;

// while(contador <= 10){
// console.log('contador: '+ contador);
// contador += 1;

// }
// console.log('listo');


/*
*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
*/

// let contador = 10;

// while(contador >= 0){
// console.log('contador: '+ contador);
// contador -= 1 ;

// }
// console.log('listo');


/*
* Crea un programa de cuenta regresiva.
* Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
* en la consola del navegador.
*/

// let numero = prompt("Dame un numero");
// let contador = numero;
// while (contador >= 0) {
//     console.log('cuenta regresiva: ' + contador);
//     contador = contador - 1;
  
    
// }


 /*
 * Crea un programa de cuenta progresiva. Pide un número y
 * cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */

// let numero = prompt("Dame un numero");
// let contador = numero;
// let alreves = 0
// while (contador >= 0) {
//     console.log('cuenta progresiva: ' + alreves);
//     contador = contador - 1;
//     alreves = alreves + 1;
// }


/*


*Aline está dando sus primeros pasos en la programación utilizando JavaScript y recientemente
*descubrió una funcionalidad que le pareció fascinante: el operador ternario.

*Ella encontró muy interesante la posibilidad que el operador ofrece para reducir 
*la cantidad de código escrito en algunas ocasiones y decidió aplicarlo en la práctica,
*en uno de sus proyectos personales. Sin embargo, al intentar hacer esta refactorización, 
*se olvidó de la sintaxis del operador ternario.

*Sabiendo que tú has estudiado sobre el operador recientemente, 
*ella te pidió ayuda y te mostró el código que quiere refactorizar:
*/

//? refactorizar
// //!antes 
// let palabraPersona = "";
// cantidadPersonas =1;
// if(cantidadPersonas == 1){
//     palabraPersona = "persona";
// }else{
//     palabraPersona = "personas"
// }



// //# despues operador ternario
// let palabraPersona = "";
// let cantidadPersonas = 1;
// cantidadPersonas == 1 ?  palabraPersona = 'persona' : palabraPersona = 'personas';
// console.log(palabraPersona);

// ! desafio 4
/*
    # 1 Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

*/
    // console.log('Hola bienvenido/a');




/*
    # 2 Crea una variable llamada "nombre" y asígnale tu nombre.
    # Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

*/
    // let nombre = 'lucas';
    // console.log('hola, ' + nombre);




/*
    # 3 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

*/
    // let mi_nmombre = "Lucas";
    // alert(`hola, ${mi_nmombre}`);




/*
    # 4 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
    # Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

*/

    // let pregunta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
    // console.log(`respuesta: ${pregunta}`);
    


/*
    # 5 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
    # Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
    # Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

*/
    // let valor1 = 10;
    // let valor2 = 30;
    // let resultado = valor1 + valor2;
    // console.log(`La suma de  ${valor1} y ${valor2} es igual a ${resultado}.`);
    





/*
    # 6 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
    # Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
    # Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

*/
    // let valor1 = 10;
    // let valor2 = 30;
    // let resultado = valor1 - valor2;
    // console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
    



/*
    # 7 Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
    #utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

*/

// let edad = parseInt(prompt('Ingrese su edad'));
// edad > 17 ? console.log('eres adulto') : console.log('eres menor de edad');




/*
    # 8 Crea una variable "numero" y solicita un valor con prompt. Luego,
    # verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

*/
// let numero = parseInt(prompt('Ingrese un numero'));
// if (numero == 0) {
//     console.log('el numero es 0 y es neutro');
    
    
// }else{
//     if (numero > 0) {
//         console.log('numero positivo');
        
//     }else {
//         console.log('numero negativo');
        
//     }

// }



/*
    # 9 Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

*/

// let continuar = '';
// let numero = 1;
// while (continuar == '') {
//     console.log(numero);
//     numero ++;
//     if (numero == 11) {
//         break
//     }
    
// }



//# 2 opcion
// let continuar = '';
// let numero = 0;
// while (continuar == '') {
//    numero == 10
//    ? continuar = 'no'
//    : numero ++ 
//    ;
//    console.log(numero);
// }


/*
    # 10 Crea una variable "nota" y asígnale un valor numérico. 
    #Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

*/


// let nota = 10;
// if (nota >= 7) {
//     console.log('Aprobado');
    
// }else {
//     console.log('Reprobado');
    
// }

/*
    # 11 Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

*/

// let aleatorio = Math.random();
// console.log(aleatorio);



/*
    # 12 Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

*/
//  let aleatorio = parseInt(Math.random()*10) +1;

// console.log(aleatorio);


/*
    # 13 Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

*/


// let aleatorio = 0;


// while (typeof aleatorio == 'number') {
//     aleatorio =  parseInt(Math.random()*1000) +1;
//     if (aleatorio == 1000) {
//         console.log(aleatorio);
//         break
        
//     }
    
// }

// # opcion 2
// let aleatorio =0;


// while (true) {
//     aleatorio =  parseInt(Math.random()*1000) +1;
//     if (aleatorio == 1000) {
//         console.log(aleatorio);
//         break
        
//     }
    
// }
