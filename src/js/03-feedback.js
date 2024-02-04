import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Wczytywanie danych z local storage i ustawianie wartości pól formularza
    const storedFormData = localStorage.getItem('feedback-form-state');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
      emailInput.value = parsedData.email.trim() || '';
      messageInput.value = parsedData.message.trim() || '';
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

    // Obsługa zdarzenia submit
        form.addEventListener('submit', function (event) {
        event.preventDefault();

      // Wysłanie obiektu z danymi do konsoli
        const formObject = {
        email: emailInput.value,
        message: messageInput.value,
      };
      console.log('Submitted form data:', formObject);

      // Czyszczenie pola formularza
      emailInput.value = '';
      messageInput.value = '';
    });
  });


