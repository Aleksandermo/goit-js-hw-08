import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Wczytywanie danych z local storage i ustawianie wartości pól formularza
    const storedFormData = localStorage.getItem('feedback-form-state');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
      emailInput.value = parsedData.email || '';
      messageInput.value = parsedData.message || '';
    }

    // Ograniczenie zapisywania do local storage do raz na 500 milisekund
    const saveFormDataThrottled = throttle(function () {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);
      
    // Nasłuchiwanie zdarzenia input dla pól formularza
   form.addEventListener('input', function () {
    saveFormDataThrottled();
  });

    //    Obsługa zdarzenia submit
          form.addEventListener('submit', handleSubmit);
       
          function handleSubmit(event) {
            event.preventDefault();
            const email = form.elements.email.value.trim();
            const message = form.elements.message.value.trim();
        
            if (email === "" || message === "") {
              alert("Please fill in all the fields!");
              return;
            }
            const formObject = {}
            formObject.email = email;
            formObject.message = message;
            console.log('Submitted form data:', formObject);

            // Czyszczenie pola formularza
            form.reset();
          }
    });
  


