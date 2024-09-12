const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;

        switch (id) {
            case 'clear':
                expression = '';
                display.value = '';
                break;
            case 'backspace':
                expression = expression.slice(0, -1);
                display.value = expression;
                break;
            case 'equals':
                try {
                    const result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                } catch (error) {
                    display.value = 'Error';
                    expression = '';
                }
                break;
            default:
                expression += button.textContent;
                display.value = expression;
                break;
        }
    });
});