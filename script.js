let display = document.getElementById('display');

function azzerra() {
    // Clear the display
    display.value = '0';
}

function cancella() {
    // Delete the last character from the display
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function scrivi(value) {
    // Append digit to the display
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function op(operator) {
    // Append operator or calculate result if operator is '='
    if (operator === '=') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Errore';
        }
    } else {
        // Prevent two operators in a row
        let lastChar = display.value[display.value.length - 1];
        if ('+-*/'.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + operator;
        } else {
            display.value += operator;
        }
    }
}
