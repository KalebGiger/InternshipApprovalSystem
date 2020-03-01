'use strict';

const prompts = require('prompts');
const question = require('../components/question')
const select = require('../components/select')

function infoPage(control) {

    const backButton =
        [
            {
                title: 'Back',
                description: 'Go back to tabs'
            }
        ];


    (async () => {
        console.log("This is an internship approval app. The purpose of this app is to determine what students are eligible for the internship course.")
        console.log("The user enters students' names and grades. The user can then view the students that are above the 2.5 partial GPA threshold.")
        const response = await prompts(select('back', '', backButton));
        control();
        //console.log(studentArray)
    })();
}

module.exports = infoPage;