
const marks = [98, 90, 95];
let marksAverage = (marks[0] + marks[1] + marks[2]) / marks.length;

console.log(calculateGrade());

function calculateGrade() {
    if (marksAverage <= 59) return 'Grade: F';
    if (marksAverage <= 69) return 'Grade: D';
    if (marksAverage <= 79) return 'Grade: C';
    if (marksAverage <= 89) return 'Grade: B';
    return 'Grade: A';
}
