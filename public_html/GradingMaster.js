/* 
 * initialize an arry with a set of 5 test scores
 * calculate the average score
 * display the grade according to the following scale:
 *      90+ = A
 *      80-89 = B
 *      70-79 = C
 *      60-69 = D
 *      <60 = F
 *      
 * BONUS: Get scores from the user instead of initializing them in the program
 */

document.write("<p>Grade calculation program</p>");

let testScores = [];

// loop to get grades
for (i = 1; i <= 5; i++) {
    testScores.push(prompt("Enter test score number " + i + ": "));
    
    // making sure the grade falls within an acceptable range
    if (testScores[(i - 1)] > 100 || testScores[i - 1] < 0) {
        while (testScores[i - 1] > 100 || testScores[i - 1] < 0) {
            testScores[(i - 1)] = prompt("Enter test score number " + i + " (enter a number between 0 and 100): ");
        }
    }
}

let total = 0;

// loop to total test scores
for (i = 0; i < 5; i++) {
    total = total + Number(testScores[i]);
}

let average = total / 5;

// assigning the grade to the letter
if (average >= 90) {
    document.write("Grade: A");
}
else if (average >= 80) {
    document.write("Grade: B");
}
else if (average >= 70) {
    document.write("Grade: C");
}
else if (average >= 60) {
    document.write("Grade: D");
}
else {
    document.write("Grade: F");
}



