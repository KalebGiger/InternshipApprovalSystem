'use strict';

const calculatePartialGrade = require('../functions/calculatePartialGrade');

function viewGrades(handleViewGrades, control) {
    handleViewGrades();
    control();
}

module.exports = viewGrades;
