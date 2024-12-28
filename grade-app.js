let grades = [];
if(localStorage.grades){
    grades = JSON.parse(localStorage.grades);
}

const grade = prompt("Notunuzu giriniz");
grades.push(grade);
localStorage.grades = JSON.stringify(grades);
console.log(grades);
