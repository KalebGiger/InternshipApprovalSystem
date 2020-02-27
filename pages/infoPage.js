'use strict';

const prompts = require('prompts');
const question = require('../components/question')

function infoPage(handleAddStudent, control) {

    const backButton = question('select', 'back', '')

    (async () => {
        const response = await prompts(backButton);
        console.log(response)

        handleAddStudent(response);
        control();
        //console.log(studentArray)
    })();
}

module.exports = infoPage;