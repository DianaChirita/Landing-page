const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.addEventListener('DOMContentLoaded', (e) => {
    const subscribeButtonElement= document.querySelector('.btn-subscribe');

    subscribeButtonElement.addEventListener('click', (ev) => {
        const emailInputElement = document.querySelector('.email-input');
        const errorMessageElement = document.querySelector('.error-message');

        if (validateEmail(emailInputElement.value))
        {
            errorMessageElement.style.visibility = 'hidden';
            emailInputElement.classList.remove('input-error');
        }
        else {
            errorMessageElement.style.visibility = 'visible';
            emailInputElement.classList.add('input-error');
        }
    })
})
