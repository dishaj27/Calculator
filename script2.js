let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if(e.target.innerHTML == 'AC'){
                string = "";
                document.querySelector('.input').value = string;
            }else if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('.input').value = string;
            }else if(e.target.innerHTML == 'DE'){
                let val = document.querySelector('.input');
                string  = val.value.slice(0, -1);
                val.value = string;
            }else{
                string = string + e.target.innerHTML;
                document.querySelector('.input').value = string;
            }
        } catch (error) {
            string = "Enter Valid Input.."
            document.querySelector('.input').value = string;
        }
    })
})