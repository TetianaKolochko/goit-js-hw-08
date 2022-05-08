import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

let formData = {
    email: '',
    message: '',

};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onTextareaInput(e) {
    
    formData [e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
};

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);

    formData.email = '';
    formData.message = '';
}


function populateTextarea(e) {
    const savedMessege = JSON.parse(localStorage.getItem('feedback-form-state'));
   
    if (savedMessege) {
        refs.email.value = savedMessege.email;
        refs.message.value = savedMessege.message;
       
        formData.email = savedMessege.email;
        formData.message = savedMessege.message;
       
    }
};
    populateTextarea();




