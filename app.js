let  numero_Secreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 3;

console.log(numero_Secreto);
function asignar_Texto_Elemento(elemento, texto) {
    let elemento_HTML = document.querySelector(elemento);
    elemento_HTML.innerHTML = texto;
    return;
    
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numero_Secreto) {
        asignar_Texto_Elemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //! El usuario no acerto
        if (numeroDeUsuario > numero_Secreto) {
            asignar_Texto_Elemento('p', 'El numero secreto es menor');      
        } else {
            asignar_Texto_Elemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
        if (intentos > maximosIntentos) {
             asignar_Texto_Elemento('p', `Llegaste al numero maximo ${maximosIntentos} de intentos, y el numero era ${numero_Secreto}`);
            
            
        }
    }
    return;
    
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    asignar_Texto_Elemento('h1', 'Juego del numero secreto!');
    asignar_Texto_Elemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numero_Secreto = generar_Numero_Secreto();
    intentos = 1;


}

function reiniciarJuego() {
    //#limpiar caja
    limpiarCaja();
    //# Indicar mensaje de intervalo de numeros
    //# Generar el numero aleatorio
    //# Deshanilitar el boton de nuevo juego
    condicionesIniciales();
    //#Inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}


function generar_Numero_Secreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //! si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignar_Texto_Elemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //# Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generar_Numero_Secreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
    
}

condicionesIniciales();







//! desafio 2
// //# 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
// function hola() {
//     console.log('hola, mundo');
    
// }

// hola();


// //# 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// function miNomebre (nombre) {
//     console.log(`hola: ${nombre}`);
    
// }
// miNomebre('lucas');

// //# 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

// function doble(numero) {
//     return console.log(`nuemro: ${numero * 2}`);
    
// }
// doble(6);

// //# 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
// function tres(numero1,numero2,numero3) {
//     return console.log(`promedio: ${((numero1 + numero2 + numero3)/ 3)}`);
    
// }
// tres(2,2,2,);

// //# 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// function mayor (numero1, numero2) {
//     return console.log(`mayor: ${numero1 > numero2 ? numero1 : numero2}`);
    
// }
// mayor(1,2);

// //# 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
// function mul(nuemro) {
//     return console.log(`resultado por multiplicion del mismo numero ${nuemro * nuemro}`);
    
// }
// mul(5);


//? retorno sttring con variable sin console log
// function calcularDobleTriple(numero) {
//   return numero * 2 + " es el doble y " + numero * 3 + " es el triple.";
// }

// const numero = 5;
// const resultado = calcularDobleTriple(numero);
// console.log(resultado);


//! desafio 3

// //#Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// function corporal(peso, altura) {
//     let resultado = peso / (altura * altura);
//     return console.log(resultado);
    
    
// }
// corporal(66,1.75)


// //#Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function factorial(numero) {
//     if (numero === 0 || numero ===1) {
//         return 1;
//     }else{
//         console.log(numero);
        
//         return numero * factorial(numero -1);
//     }
// }


// let numero = 5;
// let resultado = factorial(numero);
// console.log(`El factorial de ${numero} es ${resultado}`);

// //#Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
// //# si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// function convertir(dolar) {
//     let resultado = dolar * 4.80;
//     return resultado;
// }
// let operacion =convertir(10);
// console.log(`reales: ${operacion}`);


// //#Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// function areaPerimetro(altura,ancho) {
//     let area = ancho * altura;
//     let perimetro = 2 * (ancho + altura);
//     console.log(`are: ${area} ancho: ${perimetro}` );
    
// }

// areaPerimetro(3,5);



// //#Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function circulo(radio) {
//     let pi = 3.14;
//      let area = pi * (radio * radio);
//     let perimetro = 2 * (pi * radio);
//         console.log(`are: ${area} ancho: ${perimetro}` );
// }

// circulo(4);



// //#Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.


// function tabla(numero) {
//     let contador = 0;
//     while (contador >=0) {
//         if (contador == 13) {
            
            
//             break
//         }else{
            
//             console.log(`tabla ${numero} x ${contador} ${contador * numero}`);
//             contador ++;

  

//         }
//     }

    
// }



// function tabla(numero) {
//   for (var i = 1; i <= 10; i++) {
//     var resultado = numero * i;
//     console.log(numero + " x " + i + " = " + resultado);
//   }
// }
// // Ejemplo de uso
// let numero = 7;
// mostrarTablaDeMultiplicar(numero);



//# Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//# Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

//# Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
    lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')
//# Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrar() {
    console.log(lenguagesDeProgramacion);
    
}
mostrar();

//# Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function todos() {
    let original = lenguagesDeProgramacion.length - 1;
    console.log(`total: ${original}`);
    let contador = original;
    while(contador >=0) {
        let indice = lenguagesDeProgramacion;
        console.log(indice[contador]);
       
        contador --;

        
        

    }
}

todo();
//opencion2
function todo() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}


//# Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio() {
    let numeros = [];
    let rango = 0;
    let suma = 0;
    while (rango <=6) {
        let ran = parseInt(Math.floor(Math.random() * 7)+1);
        if (numeros.includes(ran)) {
            return promedio();
        }else{

            numeros.push(ran);
            rango ++;
            
            
   
        }
    


    }
    
    for (const n in numeros) {
        suma = suma + n;
        
    }
    resul = suma  / 7;
    console.log(numeros);
    
    return resul;
            
   
    
}
console.log(`promedio: ${promedio()}`);




//opcion 2
// function calcularMedia(lista) {
//   let suma = 0;
//   for (let i = 0; i < lista.length; i++) {
//     suma += lista[i];
//   }
//   return suma / lista.length;
// }

// let numeros = [10, 20, 30, 40, 50];
// let media = calcularMedia(numeros);
// console.log('Média:', media);

//# Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayorMenor() {
    let menorMayor = [];
   
    while (true) {
        let original = Math.floor(Math.random() * 7) + 1;
        console.log(typeof(original));
        
        console.log(original);
        if (menorMayor.length ==7) {
            console.log(menorMayor);
            break
        }
        menorMayor.push(original);
        
    }
     let menor = menorMayor[0];
    let mayor = menorMayor[0];
    for (let i = 0; i < menorMayor.length; i++) {
        console.log(i);
        console.log(menorMayor[i]);
        
        if (menorMayor[i] > mayor) {
            
            mayor = menorMayor[i];
            
        }else if (menorMayor[i] < menor){
           menor = menorMayor[i];
        }

        
         let min = Math.min(...menorMayor);
         let max = Math.max(...menorMayor);

        //  console.log(min);
        //  console.log(max);
        
        
    }
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);

        
}

mayorMenor();

// function encontrarMayorMenor(lista) {
//   let mayor = lista[0];
//   let menor = lista[0];

//   for (let i = 1; i < lista.length; i++) {
//     if (lista[i] > mayor) {
//       mayor = lista[i];
//     }
//     if (lista[i] < menor) {
//       menor = lista[i];
//     }
//   }

//   console.log('Mayor:', mayor);
//   console.log('Menor:', menor);
// }

// let numeros = [15, 8, 25, 5, 12];
// encontrarMayorMenor(numeros);


//# Crea una función que devuelva la suma de todos los elementos en una lista.
// function suma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//         console.log(i);
        
//         console.log(lista.length);
        
//         suma = suma + lista[i];
        
//     }
//     return suma / lista.length;
// }
// let lista = [2,3,5];

// console.log(suma(lista));


//# Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// let listaPosicion = [];
// function posicion(listaPosicion = [],posicion) {
//     if (listaPosicion.includes(posicion)) {
//         let po = listaPosicion[posicion];
//         console.log(po);
//     }else{
        
//         return -1;
        

//     }
    
// }

// console.log( posicion([0,1,2],3));

//opcion 2 
/*
* indexOf es un método de los arrays en JavaScript que devuelve el índice (la posición) de un elemento dentro del arreglo. listaPosicion.indexOf(numero)
*/
// let listaPosicion = [];
// function posicion(listaPosicion = [],posicion) {

//     return posicion >= 0 && posicion < listaPosicion.length
//     ? listaPosicion[posicion]
//     : -1;

    
    
// }

// let li = posicion([0,1,2,],0);
// console.log(li);

/*
Valores que al evaluarse como booleanos dan false:

0

"" (cadena vacía)

null

undefined

NaN

false

ejemplo
return listaPosicion[posicion]
        ?  listaPosicion[posicion] 
        : -1;
*/
//# Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function sum(lista1, lista2) {
//     let lista3 = [];
//     for (let i = 0; i < lista1.length; i++) {
//         let suma = lista1[i] + lista2[i] ;
//             console.log(lista1[i]);
            
//             lista3.push(suma);
//             console.log(suma);
        
//     }
//     return (lista3);
// }


// console.log(sum([1, 2, 3], [4, 5, 6])); // [5, 7, 9]

//# Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

// function cuadrado(lista4) {
//     let lista5 = [];
//     for (let i = 0; i < lista4.length; i++) {
//         let cuadrado = lista4[i] * lista4[i];
//         lista5.push(cuadrado);
//         console.log(lista5[i]);
//         console.log(cuadrado);
        
//     }
//     return (lista5);
// }


// console.log(cuadrado([1, 2, 3])); 



//!opcion original

// function cuadradoLista(lista) {
//     return lista.map(num => num ** 2);
// }

// const lista = [1, 2, 3];
// const resultado = cuadradoLista(lista);
// console.log(resultado);  


// //es lo mismo que esto
// function(num) {
//   return num ** 2;
// }
// // y esto 
// // Math.pow(2, 3); // devuelve 8 significa al cuadrado elevado



//! Las funciones de etiqueta incluso pueden devolver valores que no sean cadenas de caracteres:
// function plantilla(cadenas, ...claves) {
//   return function (...valores) {
//     let diccio = valores[valores.length - 1] || {};
//     let resultado = [cadenas[0]];
//     claves.forEach(function (clave, i) {
//       let valor = Number.isInteger(clave) ? valores[clave] : diccio[clave];
//       resultado.push(valor, cadenas[i + 1]);
//     });
//     return resultado.join("");
//   };
// }

// let t1Closure = plantilla`¡${0}${1}${2}${2}${3}!`;
// //let t1Closure = plantilla(["¡","","","","","","!"],0,1,2,3);
// t1Closure("H", "U", "R", "A"); // "¡HURRA!"

// let t2Closure = plantilla`${0} ${"foo"}!`;
// //let t2Closure = plantilla(["¡",""," ","!"],0,"foo");
// t2Closure("Hola", { foo: "Mundo" }); // "¡Hola Mundo!"

// let t3Closure = plantilla`Me llamo ${"nombre"}. Tengo casi ${"edad"} años.`;
// //let t3Closure = plantilla(["Me llamo ", ". Tengo casi ", " años."], "nombre", "edad");
// t3Closure("foo", { nombre: "MDN", edad: 30 }); //"Me llamo MDN. Tengo casi 30 años."
// t3Closure({ nombre: "MDN", edad: 30 }); //"Me llamo MDN. Tengo casi 30 años."


