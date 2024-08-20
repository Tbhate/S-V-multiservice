document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          responseMessage.textContent = 'Din besked blev sendt med succes!';
          responseMessage.style.color = '#e28743'; 
          responseMessage.classList.add('visible'); 
          form.reset(); 
        } else {
          responseMessage.textContent = 'Der opstod en fejl ved afsendelsen af din besked.';
          responseMessage.style.color = 'red'; 
          responseMessage.classList.add('visible'); 
        }
      })
      .catch(error => {
        responseMessage.textContent = 'Der opstod en fejl ved afsendelsen af din besked.';
        responseMessage.style.color = 'red'; 
        responseMessage.classList.add('visible'); 
      });
    });
  });

