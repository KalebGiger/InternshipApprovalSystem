'use strict';

const prompts = require('prompts');
const question = require('./components/question');
const enterGrades = require('./pages/enterGrades')
const infoPage = require('./pages/infoPage')
const select = require('./components/select')

let studentArray = [];

function handleAddStudent(student) {
    studentArray.push(student)
    console.log(studentArray)
}

function handlePageChange(value) {
    if (value === 'info') {
        infoPage(control);
    }

    if (value === 'enterGrades') {
        enterGrades(handleAddStudent, control);
    }

    if (value === 'viewGrades') {
        viewGrades();
    }
}

const tabs =
    [
        {
            title: 'Info',
            description: 'View info page',
            value: 'info'
        },
        {
            title: 'Enter Grades',
            description: 'Enter students\' grades',
            value: 'enterGrades'
        },
        {
            title: 'View Grades',
            description: studentArray ? 'View grades above a partial GPA of 2.5' : 'You must enter grades to view this page.',
            value: 'viewGrades',
            disabled: studentArray ? false : true
        }
    ]

function control() {
    (async () => {
        const response = await prompts(select('tabs', '', tabs));
        handlePageChange(response.tabs)
    })();
}

(async () => {
    const response = await prompts(select('tabs', '', tabs));
    handlePageChange(response.tabs)
})();








