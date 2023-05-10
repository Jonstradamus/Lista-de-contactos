const REGEX_NUMBER = /^[0][42][12][426][0-9]{7}$/;
const REGEX_APELLIDO = /^[ A-Z ][ a-z ]{1,20}$/;
const REGEX_NAME = /^[ A-Z ][ a-z ]{1,20}$/;
const numberInput = document.querySelector('#number-input');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');
const list = document.querySelector('#list');
const nameinput = document.querySelector ('#name-input');
const apellidoinput = document.querySelector ('#apellido-input');
const h1 = document.querySelector ('.error')

 

let inputValidation = false;
let nameValidation = false;
let apellidoValidation = false;
let inputValidation1 = false;
let inputValidation2 = false;
let inputValidation3 = false;


const validateInput = (input, regexValidation) => {
    if (inputValidation) {
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true;
    }

    if (input.value === '') {
        input.classList.remove('red');
        input.classList.remove('green');
        
        
        
    } else if (regexValidation) {
        input.classList.remove('red');
        input.classList.add('green');
        h1.classList.replace('error','removed')
    } else {
        input.classList.remove('green');
        input.classList.add('red');
        h1.classList.replace('removed','error')
    }

    
}
    






nameinput.addEventListener('input' , e => {
    nameValidation = REGEX_NAME.test(e.target.value);
    validateInput(nameinput, nameValidation)
    
});

apellidoinput.addEventListener ('input' , e => {
    apellidoValidation = REGEX_APELLIDO.test(e.target.value);
    validateInput(apellidoinput, apellidoValidation)
    
});


numberInput.addEventListener('input', e => {
    inputValidation = REGEX_NUMBER.test(e.target.value);
    validateInput(numberInput, inputValidation)
});




form.addEventListener('submit', e => {
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('listItem');
    li.innerHTML = `
         <button class="delete-btn">Eliminar
            
            </button>
            <input type="text" value="${nameinput.value}" readonly>

          <input type="text" value="${apellidoinput.value}" readonly>

    
            <input type="text" value="${numberInput.value}" readonly>
            <button class="edit-btn">Editar
            
            </button>
    `;
    list.append(li);
    localStorage.setItem('list', list.innerHTML); // Guardar en locale storage

    numberInput.value = '';
    nameinput.value = '';
    apellidoinput.value = '';
    inputValidation = false;
    validateInput(numberInput);
    validateInput(nameinput);
    validateInput(apellidoinput);
    
});

// Obtener de local storages

const getContacts = () => {
    if (localStorage.getItem('list')) {
        list.innerHTML = localStorage.getItem('list');
    }
}

getContacts();


list.addEventListener('click', e => {
    if (e.target.closest('.delete-btn')) {
        const button = e.target.closest('.delete-btn');
        button.parentElement.remove();
        localStorage.setItem('list', list.innerHTML); // Guardar en locale storage
    }


   

    if (e.target.closest('.edit-btn')) {
        const button = e.target.closest('.edit-btn');
        const editInput = button.parentElement.children[1];
        const editInput2 = button.parentElement.children[2];
        const editInput3 = button.parentElement.children[3];

        editInput.addEventListener('input', e => {
            const editInput = button.parentElement.children[1];
            inputValidation1 = REGEX_NAME.test(e.target.value);
            validateInput(editInput, inputValidation1);
            console.log(validateInput);
        });
        editInput2.addEventListener('input', e => {
            const editInput2 = button.parentElement.children[2];
            inputValidation2 = REGEX_APELLIDO.test(e.target.value);
            validateInput(editInput2, inputValidation2)
            
        });

        editInput3.addEventListener('input', e => {
            const editInput3 = button.parentElement.children[3];
            inputValidation3 = REGEX_NUMBER.test(e.target.value);
            validateInput(editInput3, inputValidation3)
            
        });

        const validateInput = (input, regexValidation) => {
            if (inputValidation1 && inputValidation2 && inputValidation3) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        
            if (input.value === '') {
                input.classList.remove('red');
                input.classList.remove('green');
                
                
                
            } else if (regexValidation) {
                input.classList.remove('red');
                input.classList.add('green');
                h1.classList.replace('error','removed')
            } else {
                input.classList.remove('green');
                input.classList.add('red');
                h1.classList.replace('removed','error')
            }
        
            
        }

        if (button.classList.contains('editando')) {
            console.log('1');
            button.classList.remove('editando');
            button.innerHTML = 'Editar';
            editInput.setAttribute('readonly', 'true');
            editInput.setAttribute('value', editInput.value);
            editInput2.setAttribute('readonly', 'true');
            editInput2.setAttribute('value', editInput2.value);
            editInput3.setAttribute('readonly', 'true');
            editInput3.setAttribute('value', editInput3.value);
            localStorage.setItem('list', list.innerHTML);
        } else {
            console.log('2');
            button.innerHTML = 'Guardar';
            button.classList.add('editando');
            editInput.removeAttribute('readonly');
            editInput2.removeAttribute('readonly');
            editInput3.removeAttribute('readonly');
        }
    }
    
});
