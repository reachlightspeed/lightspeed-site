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

  // grab form
  const form = document.querySelector('form');
  // add event listener 
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // consolidate form data
    const formData = serialize(form);
    // send
    // fetch(form.action, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: formData
    // }).then(function(){
    //   // hide form
    //   document.querySelector('.contact-us').classList.add('hidden');
    //   // show thank you
    //   document.querySelector('.hidden.thank-you').classList.remove('hidden');
    // }).catch(function(e){
    //   document.querySelector('.contact-us').classList.add('hidden');
    //   document.querySelector('.hidden.error').classList.remove('hidden');
    // });
  }, false);
  