document.addEventListener("wheel", function(e) {
  if (e.shiftKey && e.deltaX != 0) {
    window.history.go(-Math.sign(e.deltaX));
    return e.preventDefault();
  }
});
