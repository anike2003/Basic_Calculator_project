document.addEventListener('DOMContentLoaded', function() {
    let display = document.querySelector('.result');
    let buttons = document.querySelectorAll('.btn');

    let equation = '';
    let decimalAdded = false;

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let buttonText = this.innerText;

            if (buttonText === 'AC') {
                equation = '';
                display.innerText = '0';
                decimalAdded = false;
            } else if (buttonText === '=') {
                try {
                    display.innerText = eval(equation);
                    equation = display.innerText;
                    decimalAdded = false;
                } catch (error) {
                    display.innerText = 'Error';
                    equation = '';
                    decimalAdded = false;
                }
            } else if (buttonText === '.') {
                if (!decimalAdded) {
                    equation += buttonText;
                    display.innerText = equation;
                    decimalAdded = true;
                }
            } else {
                equation += buttonText;
                display.innerText = equation;
            }
        });
    });
});