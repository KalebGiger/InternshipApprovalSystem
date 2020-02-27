'use strict';

const tabs =
{
    type: 'select',
    name: 'tabs',
    message: 'Choose a tab',
    choices: [
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
    ],
    initial: 0
};

(async () => {
    const response = await prompts(tabs);
    const value = response.value;
    handlePageChange(value);
})();

module.exports = tabs;