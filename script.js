function calculer(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Affiche un message dans la console
  console.log("Calcul en cours...");
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);
  const name = document.getElementById("name").value;
  const operation = document.getElementById("operation").value;
  console.table({
  firstNumber: [firstNumber, typeof firstNumber],
  secondNumber: [secondNumber, typeof secondNumber],
  name: [name, typeof name],
  operation: [operation, typeof operation],
});
  
  let result = 0;
  let calcul = ""
  if (operation == 1) {
    result = firstNumber + secondNumber;
    calcul = "l'addition";
  } else if (operation == 2) {
    result = firstNumber * secondNumber;
    calcul = " la multiplication";
  } else if (operation == 3) {
    result = firstNumber % secondNumber;
    calcul = " le modulo";
  } else {
    alert("Opération non reconnue");
    return;
  }

  // concatenation
  const nameAndResult = name + " à calculer " + calcul +" de "+ firstNumber + " et de " + secondNumber + " pour obtenir: " + result;
  
  // Affiche le résultat dans la page
  document.getElementById("result").innerText = "Résultat: " + nameAndResult;
  
}