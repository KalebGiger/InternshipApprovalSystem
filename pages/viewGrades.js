'use strict';

const calculatePartialGrade = require('../functions/calculatePartialGrade');

function viewGrades(handleViewGrades, control) {
    (async () => {
    handleViewGrades();
    control();
})();
}

module.exports = viewGrades;
