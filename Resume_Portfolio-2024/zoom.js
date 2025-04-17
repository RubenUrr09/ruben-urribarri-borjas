// Detect mobile devices
  if (window.innerWidth <= 768) {
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=0.6");
    }
  }
