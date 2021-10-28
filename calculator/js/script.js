class Calculator {
    constructor() {
        this.inputValue = '';
        this.resultValue = '0';
    }

    initMarkup() {
        const body = document.querySelector('body');
        const form = document.createElement('form');
        const section = document.createElement('section');
        const inputResult = document.createElement('input');
        inputResult.type = 'text';
        inputResult.classList.add('result');
        inputResult.readOnly = 'readonly';
        inputResult.value = this.resultValue;
        const inputValue = document.createElement('input');
        inputValue.type = 'text';
        inputValue.classList.add('history_operations');
        inputValue.readOnly = 'readonly';

        const listResults = document.createElement('ul');
        listResults.classList.add('result-list');
        const listItemHistory = document.createElement('li');
        listItemHistory.classList.add('result-list__item');
        listItemHistory.appendChild(inputValue);
        listResults.appendChild(listItemHistory);
        const listItemResult = document.createElement('li');
        listItemResult.classList.add('result-list__item');
        listItemResult.appendChild(inputResult);
        listResults.appendChild(listItemResult);

        const listButtons = document.createElement('ul');
        listButtons.classList.add('buttons-list');
        const buttonsName = ['C', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '+', '1', '2', '3', '-', '0', '.'];
        buttonsName.forEach(function (item) {
            const listItemButton = document.createElement('li');
            listItemButton.classList.add('buttons-list__item');
            const button = document.createElement('button');
            button.innerHTML = item;
            button.type = 'button';
            button.value = item;
            button.classList.add('operation-button');
            listItemButton.appendChild(button);
            listButtons.appendChild(listItemButton);
        });
        const listItemButton = document.createElement('li');
        listItemButton.classList.add('buttons-list__item');
        const submitButton = document.createElement('button');
        submitButton.innerHTML = '=';
        submitButton.classList.add('submit_button');
        listItemButton.appendChild(submitButton);
        listButtons.appendChild(listItemButton);

        form.appendChild(listResults);
        form.appendChild(listButtons);
        section.appendChild(form);
        body.appendChild(section);

    }
}

const basicCalculator = new Calculator();
basicCalculator.initMarkup();