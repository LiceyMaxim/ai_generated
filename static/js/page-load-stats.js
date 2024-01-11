(function() {
 let startTime = performance.now();
 document.addEventListener('DOMContentLoaded', function() {
   let endTime = performance.now();
   let loadTime = endTime - startTime;
   console.log('Page load time is ' + loadTime + ' milliseconds.');
   var footer = document.querySelector('footer');
   if (footer) {
     var statsParagraph = document.createElement('p');
     statsParagraph.textContent = 'Page loaded in ' + loadTime + ' milliseconds.';
     footer.appendChild(statsParagraph);
   }
 });
})();