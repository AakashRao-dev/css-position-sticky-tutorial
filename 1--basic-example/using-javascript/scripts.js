document.addEventListener('DOMContentLoaded', function () {
  var stickyElement = document.querySelector('.tile.sticky');
  var initialOffset = stickyElement.offsetTop;

  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= initialOffset) {
      stickyElement.style.top = scrollY - initialOffset + 'px';
    } else {
      stickyElement.style.top = '0';
    }
  }

  window.addEventListener('scroll', handleScroll);
});
