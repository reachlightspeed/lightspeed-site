// create element
var lightbar = document.createElement('div');
// populate with text 
lightbar.innerHTML = '<div style="width: 1024px; margin:auto;"><span style="color: #fff">Introducing Lightbar: A Super-Easy to Customize, Freakishly Fast-to-Load Notification Bar</span><svg class="i-close" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="float: right; margin-top:17px; cursor:pointer;"><path d="M2 30 L30 2 M30 30 L2 2" /></svg></div>';
// set styles
lightbar.setAttribute('style', 'border-bottom: 1px solid #1e2a61; z-index: 30; text-align: center; height: 50px; line-height: 50px; width: 100%; margin: auto; background-color: #3b5ee2; position: fixed; left: 0; right: 0; top: 0;');
document.querySelector('header').setAttribute('style', 'margin-top: 50px;');
// close it
lightbar.querySelector('.i-close').addEventListener('click', function (event) {
  lightbar.remove();  
  document.querySelector('header').setAttribute('style', 'margin-top: 0px;');
}, false);
document.body.prepend(lightbar);