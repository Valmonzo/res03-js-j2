// Exercice 1 //

function add(nb1, nb2) {
    return nb1 + nb2;
}

function sub(nb1, nb2) {
    return nb1 - nb2;
}

function mult(nb1, nb2) {
    return nb1 * nb2;
}

function div(nb1, nb2) {
    return nb1 / nb2;
}

function mod(nb1, nb2) {
    return nb1 % nb2;
}

// Exercice 2 //

function askUserOperation() {
    let ope = window.prompt("Quel opération veux-tu effectuer ?");
    return ope;
}

function askUserFirstNumber() {
    let nb1 = window.prompt("Quel est le premier nombre que tu veux ajouter ?");
    return parseInt(nb1);
}

function askUserSecondNumber() {
    let nb2 = window.prompt("Quel est le deuxième nombre que tu veux ajouter?");
    return parseInt(nb2);
}

// Exercice 3 //




function calculator() {
    let ope = askUserOperation();
    let nb1 = askUserFirstNumber();
    let nb2 = askUserSecondNumber();


    if (ope === "+") {
        let result = add(nb1, nb2);
        return result;
    }

    else if (ope === "-") {
        let result = sub(nb1, nb2);
        return result;
    }

    else if (ope === "*") {
        let result = mult(nb1, nb2);
        return result;
    }
    else if (ope === "/") {
        let result = div(nb1, nb2);
        return result;
    }
    else if (ope === "%") {
        let result = mod(nb1, nb2);
        return result;
    }
    else {
        alert("Veuillez choisir un signe opérateur existant");
        return "";
    }
}

let result = calculator();
window.alert(result);
