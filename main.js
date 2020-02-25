'use strict';

const prompts = require('prompts');
const question = require('./question');
const enterGrades = require('./pages/enterGrades')
const infoPage = require('./pages/infoPage')
const select = require('./components/select')

let studentArray = [];
let gradeArray = [];
let page;

function handleAddStudent(student) {
    studentArray.push(student)
    console.log(studentArray)
}

function handlePageChange(value) {
    if (value === 'info') {
        info();
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

// const classes = ["CSC141", "CSC142", "CSC240", "CSC241"]

// const nameQuestion =
//     question('text', 'name', 'Name', value => value ? true : `Enter a name to proceed.`)

// const classQuestions = classes.map((c, index) =>
//     question('number', c, c + " Grade", value => value < 0 ? `Please enter a valid grade.` : true, index));

// let questions = classQuestions.unshift(nameQuestion);

function control() {
    (async () => {
        const response = await prompts(select('tabs', '', tabs));
        handlePageChange(response.tab)
    })();
}

(async () => {
    const response = await prompts(select('tabs', '', tabs));
    handlePageChange(response.tabs)
})();








