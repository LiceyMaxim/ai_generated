(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page load time is ' + loadTime + ' milliseconds.');
    var footer = document.querySelector('footer');
    if (footer) {
      var statsParagraph = document.createElement('p');
      statsParagraph.textContent = 'Page loaded in ' + loadTime + ' milliseconds.';
      footer.appendChild(statsParagraph);
    }
  });
})();