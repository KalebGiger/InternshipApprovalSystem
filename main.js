'use strict';

const prompts = require('prompts');
const question = require('./components/question');
const enterGrades = require('./pages/enterGrades')
const infoPage = require('./pages/infoPage')
const select = require('./components/select')
const viewGrades = require('./pages/viewGrades')
const calculatePartialGrade = require('./functions/calculatePartialGrade');

let studentArray = [];

function handleAddStudent(student) {
    var grades = [];
    for (const property in student) {
        if (property != 'name') {
            grades.push(student[property]);
        }
      }

    student.gpa = calculatePartialGrade(grades);
    studentArray.push(student)
    console.log(studentArray)
}
function handleViewGrades(){
    studentArray.forEach(student => {
        if(student.gpa>=2.5){
            console.log(student.name + ' has GPA of ' + student.gpa);
        }
    });
}
function handlePageChange(value) {
    if (value === 'info') {
        info();
    }

    if (value === 'enterGrades') {
        enterGrades(handleAddStudent, control);
    }

    if (value === 'viewGrades') {
        viewGrades(handleViewGrades, control);
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








