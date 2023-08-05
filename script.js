let string = "";
let buttonValues = document.querySelectorAll('.button');
Array.from(buttonValues).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            console.log(string);
        }
        else if (e.target.innerHTML == 'AC') {
            document.querySelector('input').value = "";
            string = "";
        }
        else if (e.target.innerHTML == 'C') {
            document.querySelector('input').value = string.slice(0, string.length - 1);
            string = string.slice(0, string.length - 1);
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})