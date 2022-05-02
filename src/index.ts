let numero1 = <HTMLInputElement>document.getElementById("numero1");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let num1: number;

btnEnviar.addEventListener("click", () => {
  num1 = Number(numero1.value);
  let arr1: number[] = new Array(num1);
  let arr2: number[] = new Array(num1);
  let arr3: number[] = new Array(num1);
  let arr4: number[] = new Array(num1);
  let indice: number;
  if (num1 > 9) {
    window.alert("Introduzca un valor menor o igual que 9");
    numero1.value = "";
  } else {
    for (indice = 0; indice < num1; indice++) {
      arr1[indice] = Number(
        prompt(`Ingrese los datos del 1°arreglo [ ${indice} ]: `)
      );
    }
    for (indice = 0; indice < num1; indice++) {
      arr2[indice] = Number(
        prompt(`Ingrese los datos del 2°arreglo [ ${indice} ]: `)
      );
    }
    for (indice = 0; indice < num1; indice++) {
      arr3[indice] = Number(
        prompt(`Ingrese los datos del 3° arreglo [ ${indice} ]: `)
      );
    }
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    for (indice = 0; indice < num1; indice++) {
      arr4[indice] = arr1[indice] + arr2[indice] + arr3[indice];
    }
    console.log("Resultado de la suma de los arreglos", arr4);
  }
});
