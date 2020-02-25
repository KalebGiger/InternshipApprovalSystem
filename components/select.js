const select = (name, message, choices) => ({
    type: 'select',
    name: name,
    message: message,
    choices:
        choices && choices.map((choice, index) => ({
            title: choice.title,
            description: choice.description,
            value: choice.value,
            disabled: choice.disabled
        })
        ),

    initial: 0
});

module.exports = select