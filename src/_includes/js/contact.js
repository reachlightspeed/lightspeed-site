/*!
  * Serialize all form data into a query string
  * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
  * @param  {Node}   form The form to serialize
  * @return {String}      The serialized form data
  */
var serialize = function (form) {

    // Setup our serialized data
    var serialized = [];
  
    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {
  
      var field = form.elements[i];
  
      // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
      if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
  
      // If a multi-select, get all selections
      if (field.type === 'select-multiple') {
        for (var n = 0; n < field.options.length; n++) {
          if (!field.options[n].selected) continue;
          serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
        }
      }
  
      // Convert field data to a query string
      else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      }
    }
  
    return serialized.join('&');
    };
  
  function hideSpamWarning(){
    // remove text 
    document.querySelector('.spam-warning').remove();
  }

  function showFormSuccess(){
    // hide form
    document.querySelector('.contact-us').classList.add('hidden');
    // update h1 to thank you
    document.querySelector('h1').innerText = "Thanks, your message was sent";
    document.querySelector('p').innerText = "Someone from the team will get back to you shortly.";
    document.querySelector('p').classList.add('text-center');
    // remove spam text 
    hideSpamWarning();
  }

  function showFormError(){
    // update h1 to error
    document.querySelector('h1').innerText = "We're sorry, that didn't transmit";
    document.querySelector('p').innerText = "There was an issue with the form and your message did not come through. Please reload the page and try again.";
    // remove spam text 
    hideSpamWarning();
  }
    
  // grab form
  const form = document.getElementById('form-contact');
  // add event listener 
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // consolidate form data
    const formData = serialize(form);
    // send
    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    }).then(function(){
      showFormSuccess();
    }).catch(function(e){
      // on error show error 
      showFormError();
    });
  }, false);
