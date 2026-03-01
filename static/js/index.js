document.addEventListener('DOMContentLoaded', function () {

  // Scroll to Top button visibility
  var scrollBtn = document.querySelector('.scroll-to-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
  }

});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyBibTeX() {
  var codeEl = document.getElementById('bibtex-code');
  if (!codeEl) return;

  var text = codeEl.innerText || codeEl.textContent;
  navigator.clipboard.writeText(text).then(function () {
    var btn = document.querySelector('.copy-bibtex-btn');
    if (btn) {
      btn.classList.add('copied');
      btn.querySelector('.copy-text').textContent = 'Copied!';
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.querySelector('.copy-text').textContent = 'Copy';
      }, 2000);
    }
  });
}
