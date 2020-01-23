document.addEventListener("DOMContentLoaded", function() {
  // Get our lazy-loaded images
  var lazyImages = [].slice.call(document.querySelectorAll("[data-src]"));

  // Do this only if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
  // Create new observer object
  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      // Loop through IntersectionObserverEntry objects
      entries.forEach(function(entry) {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) { 
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.removeAttribute('data-src');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
  });

  // Loop through and observe each image
  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}
});

// no need to include or init anything just use data-src attribute for images to use this