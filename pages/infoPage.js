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
        console.log("This is an internship approval app.")
        const response = await prompts(select('back', '', backButton));
        control();
        //console.log(studentArray)
    })();
}

module.exports = infoPage;