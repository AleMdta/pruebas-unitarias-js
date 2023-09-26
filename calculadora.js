/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/

/*
//Escenario ficticio
function promedio (cal1, cal2, cal3){
    let prom = (cal1 + cal2 + cal3) / 3;

    //Ciclo para calcular aprobado o reprobado
    if(prom >= 6){
        console.log("Felicidades, aprobaste.");
    }else{
        console.log("Necesitas estudiar más, reprobaste.");
    }
    console.log(prom);
}

promedio(9, -9, 9);*/


/* Revisar los distintos escenarios
    //¿Qué paso si no ingreso las tres calificaciones?
    //¿Qué sucede si una de estas calificaciones es un valos NO númerico?
    //¿Qué pasa si una de mis calificaciones es un valor negativo?
*/

//Creamos una calculadora básica que trabaje con las 3 operaciones fundamnetales, para trabajar con pruebas unitarias.

function sumar (num1, num2){
    return num1 + num2;
}

function restar (num1, num2){
    return num1 - num2;
}

function multiplicar (num1, num2){
    return num1 * num2;
}

function dividir (num1, num2){
    return num1 / num2;
}

/*

Para manejar nuestras pruebas unitarias, utilizamos JEST

    - JUnit (JAVA)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)


JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:


*/

module.exports = {dividir, sumar, restar, multiplicar}; //Exportando las funciones