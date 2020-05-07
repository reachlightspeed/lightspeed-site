// Page loaded for you in [X] Seconds
window.addEventListener("load", loadTime, false);

function loadTime() {
  var now = new Date().getTime();
  var page_load_time = (now - performance.timing.navigationStart) / 1000;
  page_load_time = +page_load_time.toFixed(2);
  document.getElementById('loadtime').innerHTML = page_load_time;
}

// Lighthouse Pagespeed Insights Form
const formTestSite = document.getElementById('form-testsite');

formTestSite.addEventListener('submit', function(e){
  e.preventDefault();
  let site = document.getElementById('speedtest-input').value
  let encodedUrl = encodeURI(site);
  let requestUrl = "https://developers.google.com/speed/pagespeed/insights/?url=" + encodedUrl + "&tab=mobile" 
  window.location.assign(requestUrl);
}, false);

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
      // hide form
      document.querySelector('.contact-us').classList.add('hidden');
      // show thank you
      document.querySelector('.hidden.thank-you').classList.remove('hidden');
    }).catch(function(e){
      // on error show error 
      document.querySelector('.contact-us').classList.add('hidden');
      document.querySelector('.hidden.error').classList.remove('hidden');
    });
  }, false);

// toggle active states based on scroll depth
let targets = document.querySelectorAll('#services, #about, #contact');
if ("IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
  let options = {
    root: document.querySelector('header')[0],
  }
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('nav li a[href="#' + entry.target.id + '"]').classList.remove("active");
        document.querySelector('nav li a[href="#' + entry.target.id + '"]').classList.add("active");
      } else {
        document.querySelector('nav li a[href="#' + entry.target.id + '"]').classList.remove("active");
      }
    }, options);
    });
  targets.forEach(target => {
    observer.observe(target);
  });  
}

