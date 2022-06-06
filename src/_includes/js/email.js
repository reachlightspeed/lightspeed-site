// clean up email on click
document.querySelectorAll('a.mailto').forEach(function(el){
  el.addEventListener('click', function(){
    this.href = this.href.replace('tomh','tom').replace('dank','dan').replace('wholeteam', 'team');
  }); 
});