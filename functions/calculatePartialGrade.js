'use strict';

function calculatePartialGrade(grades) {
    var total = 0;
    grades.forEach(element => {
        total += convertToGpa(element);
    });
    return parseFloat(total / grades.length).toFixed(2);

}

function convertToGpa(grade) {
    if (grade > 0 && grade < 60) {
        return 0;
    }
    else if (grade >= 60 && grade <= 62) {
        return .670;
    }
    else if (grade >= 63 && grade <= 66) {

        return 1.00;
    }
    else if (grade >= 67 && grade <= 69) {

        return 1.33;
    }
    else if (grade >= 70 && grade <= 72) {

        return 1.67;
    }
    else if (grade >= 73 && grade <= 76) {

        return 2.00;
    }
    else if (grade >= 77 && grade <= 79) {

        return 2.33;
    }
    else if (grade >= 80 && grade <= 82) {

        return 2.67;
    }
    else if (grade >= 83 && grade <= 86) {

        return 3.00;
    }
    else if (grade >= 87 && grade <= 89) {

        return 3.30;
    }
    else if (grade >= 90 && grade <= 92) {

        return 3.67;
    }
    else if (grade >= 93 && grade <= 100) {

        return 4.00;
    }
    else {
        return 0;
    }
}

module.exports = calculatePartialGrade;