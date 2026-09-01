// PROBLEM
// Calculate the arithmetic average of 3 exam grades and evaluate academic status:
// - Average < 5: Failed (isApproved = false, isOnAcademicProbation = false)
// - 5 <= Average < 6: Academic Probation / Recovery (isApproved = true, isOnAcademicProbation = true)
// - Average >= 6: Approved Direct (isApproved = true, isOnAcademicProbation = false)

let firstGrade: number;
let secondGrade: number;
let thirdGrade: number;
let averageStudentGrade: number;
let isApproved: boolean;
let isOnAcademicProbation: boolean;

firstGrade = 10;
secondGrade = 9;
thirdGrade = 8;
isOnAcademicProbation = false;

averageStudentGrade = (firstGrade + secondGrade + thirdGrade) / 3;

if (averageStudentGrade >= 5) {
    isApproved = true;

    if (averageStudentGrade < 6) {
        isOnAcademicProbation = true;
    } else {
        isOnAcademicProbation = false;
    }
} else {
    isApproved = false;
}

console.log("Average:", averageStudentGrade);
console.log("Approved:", isApproved);
console.log("On Probation:", isOnAcademicProbation);
