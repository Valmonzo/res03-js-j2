let grades = [[20, 10], [15, 20], [13, 18]];

let average = 0;
let sum = 0;
let totalGradeNumber = 0;


for(grade of grades) {
    for(let i = 0; i < grade.length; i++) {
      sum += grade[i];
    }

    totalGradeNumber += grade.length;
    average = sum / totalGradeNumber;
}

console.log(average);

/*

average = (20 + 10) / 2 => 15
average = (20 + 10 + 15 + 20) / 2 => 32.5
average = (20 + 10 + 15 + 20 + 13 + 18) / 2 => 48

*/