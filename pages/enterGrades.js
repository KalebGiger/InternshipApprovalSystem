'use strict';

const prompts = require('prompts');
const question = require('../components/question')

function enterGrades(handleAddStudent, control) {

    const classes = ["CSC141", "CSC142", "CSC240", "CSC241"]

    const nameQuestion =
        question('text', 'name', 'Name', value => value ? true : `Enter a name to proceed.`)

    const classQuestions = classes.map((c, index) =>
        question('number', c, c + " Grade", value => value < 0 ? `Please enter a valid grade.` : true, index));

    let questions = classQuestions.unshift(nameQuestion);

    (async () => {
        const response = await prompts(classQuestions);
        handleAddStudent(response);
        control();
        //console.log(studentArray)
    })();
}

module.exports = enterGrades;