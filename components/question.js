'use strict';

function question(type, name, message, validate, index) {
    return ({
        type: type || '',
        name: name || '',
        message: message || '',
        validate: validate || ''
    })
}

module.exports = question;