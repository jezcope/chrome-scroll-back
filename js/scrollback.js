(function(document) {

  document.addEventListener("wheel", function(e) {
    if (e.shiftKey) {
      if (e.deltaX > 0) {
        window.history.back();
        return e.preventDefault();
      } else if (e.deltaX < 0) {
        window.history.forward();
        return e.preventDefault();
      }
    }
  });
  
})(document);
