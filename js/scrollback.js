document.addEventListener("wheel", function(e) {
  if (e.shiftKey && (e.deltaX != 0 || e.deltaY != 0)) {
    window.history.go(-Math.sign(e.deltaX ? e.deltaX : e.deltaY));
    return e.preventDefault();
  }
});
