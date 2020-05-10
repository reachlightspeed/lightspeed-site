function enableDarkMode(){
  document.documentElement.classList.add("mode-dark");
}

function disableDarkMode(){
  document.documentElement.classList.remove("mode-dark");
}

// check first for user dark mode setting
if (localStorage.getItem('userDarkModeSetting')) {
  // enable color scheme based on manual user setting
  localStorage.getItem('userDarkModeSetting') === 'dark' ? enableDarkMode() : disableDarkMode();
} 
// if user has not set dark mode setting on our site, check for system preferences
else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // apply dark mode if system pref contains dark 
  enableDarkMode();
} else {
  // show regular site (light mode)
  disableDarkMode();
}

// function triggered by click of moon icon anchor tag
function toggleDarkMode(){
  // manually toggle dark mode or light mode depending on current setting
  document.documentElement.classList.toggle('mode-dark');
  // set dark or light based on toggle setting
  localStorage.setItem('userDarkModeSetting', document.documentElement.classList.contains('mode-dark') ? 'dark' : 'light');
}
