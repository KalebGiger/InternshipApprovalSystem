'use strict';

function question(type, name, message, validate, index){
    return({
        type: type,
        name: name,
        message: message,
        validate: validate //value => value < 0 ? `Please enter a valid grade.` : true
    })
}

module.exports = question;