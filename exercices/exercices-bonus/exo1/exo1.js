var start = new Date();
let numbers = [-20, -23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28];

function sortNumbers(array) {
    let newTab = array;
    let key = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] <= newTab[j]) {
                key = array[i];
                array[i] = newTab[j];
                newTab[j] = key;
            }
        }

    }
    return newTab;
}


console.log(sortNumbers(numbers));

var duration = new Date() - start;
console.log(duration);

// Suite de l'exo

function sortNumberIncrease(array)
{
    let newTab = array;
    let key = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] <= newTab[j]) {
                key = array[i];
                array[i] = newTab[j];
                newTab[j] = key;
            }
        }

    }
    return newTab;
}

function sortNumberDecrease(array)
{
    let newTab = array;
    let key = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] <= newTab[j]) {
                key = array[i];
                array[i] = newTab[j];
                newTab[j] = key;
            }
        }

    }
    return newTab.reverse();
}

function sortNumberArray(array, direction = "inc")
{
    let result = [];

    if(direction === "inc")
    {
        result = sortNumberIncrease(array);
    }
    else
    {
        result = sortNumberDecrease(array);
    }

    return result;
}

console.log(sortNumberArray(numbers));
console.log(sortNumberArray(numbers,"dec"));
