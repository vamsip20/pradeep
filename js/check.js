$(document).ready(function() {

  const myLazyLoad= new LazyLoad({
    elements_selector:".img-fluid"
  });
//crocodile gallery

$('#croc').magnificPopup({
    items: [
      {
        src: 'images/crocodile.jpg',
        title:'crocodile front',
        class:'img-fluid'
      },
      {
        src: 'images/crocodile-2.jpg',
        title:'crocodile back',
        class:'img-fluid'
      },
      {
        src: 'images/crocodile-w.jpg',
        title:'crocodile wired front',
        class:'img-fluid'
      },
      {
        src: 'images/crocodile-w2.jpg',
        title:'crocodile wired back',
        class:'img-fluid'
      }          
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//plane gallery
$('#plane').magnificPopup({
    items: [
      {
        src: 'images/plane.jpg',
        title:'plane ',
        class:'img-fluid'
      },
      {
        src: 'images/plane-w.jpg',
        title:'plane wired',
        class:'img-fluid'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//borodon gallery
$('#borodon').magnificPopup({
    items: [
      {
        src: 'images/borodon.jpg',
        title:'borodon front',
        class:'img-fluid'
      },
      {
        src: 'images/borodon-2.jpg',
        title:'borodon back',
        class:'img-fluid'
      },
      {
        src: 'images/borodon-w.jpg',
        title:'borodon wired front',
        class:'img-fluid'
      },
      {
        src: 'images/borodon-w2.jpg',
        title:'borodon wired back',
        class:'img-fluid'
      }          
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//sofa-chair gallery
$('#sofa-chair').magnificPopup({
    items: [
      {
        src: 'images/sofa-chair.jpg',
        title:'sofa-chair front',
        class:'img-fluid'
      },
      {
        src: 'images/sofa-chair-2.jpg',
        title:'sofa-chair back',
        class:'img-fluid'
      },
      {
        src: 'https://sketchfab.com/models/8d1d4ae936e74d68a9d6d6090edc754b/embed',
        title:'sofa-chair 3D model',
        type:'iframe'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//chakra gallery
$('#chakra').magnificPopup({
    items: [
      {
        src: 'images/chakra.jpg',
        title:'chakra front',
        class:'img-fluid'
      },
      {
        src: 'images/chakra-2.jpg',
        title:'chakra back',
        class:'img-fluid'
      },
      {
        src: 'https://sketchfab.com/models/8d97184484b94f85bd416da14b3e5903/embed',
        title:'chakra 3D model',
        type:'iframe'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//plain-chair gallery
$('#plain-chair').magnificPopup({
    items: [
      {
        src: 'images/plain-chair.jpg',
        title:'plain-chair front',
        class:'img-fluid'
      },
      {
        src: 'images/plain-chair-2.jpg',
        title:'plain-chair back',
        class:'img-fluid'
      },
      {
        src: 'https://sketchfab.com/models/15dec510c0cf48ac93c367e23f13904b/embed',
        title:'plain-chair 3D model',
        type:'iframe'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//office-chair gallery
$('#office-chair').magnificPopup({
    items: [
      {
        src: 'images/office-chair.jpg',
        title:'office-chair front',
        class:'img-fluid'
      },
      {
        src: 'images/office-chair-2.jpg',
        title:'office-chair back',
        class:'img-fluid'
      },
      {
        src: 'https://sketchfab.com/models/308433e100b74b26907e01849ddd78bc/embed',
        title:'office-chair 3d view',
        type:'iframe'
      }
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//chair-pattern gallery
$('#chair-pattern').magnificPopup({
    items: [
      {
        src: 'images/chair-pattern.jpg',
        title:'chair-pattern front',
        class:'img-fluid'
      },
      {
        src: 'images/chair-pattern-2.jpg',
        title:'chair-pattern back',
        class:'img-fluid'
      },
      {
        src: 'https://sketchfab.com/models/4090e225f3184ee8aac892e800c2f783/embed',
        title:'chair-pattern 3D model',
        type:'iframe'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//hand gallery
$('#hand').magnificPopup({
    items: [
      { 
        src: 'images/hand.jpg',
        title:'hand',
        class:'img-fluid'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//cage gallery
$('#cage').magnificPopup({
    items: [
      { 
        src: 'images/cage.jpg',
        title:'cage',
        class:'img-fluid'
      },
      { 
        src: 'https://sketchfab.com/models/92e221f9a45845d8959738ad4f671538/embed',
        title:'cage 3D model',
        type:'iframe'
      },
             
    ],
    gallery: {
      enabled: true 
    },
    type: 'image', // this is default type
    image: {
      titleSrc: 'title', //gives title for image
      verticalFit: true, // Fits image in area vertically
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
});

//home gallery
$('#home-t').magnificPopup({
  items: [
    { 
      src: 'images/home-t.jpg',
      title:'home',
      class:'img-fluid'
    },
           
  ],
  gallery: {
    enabled: true 
  },
  type: 'image', // this is default type
  image: {
    titleSrc: 'title', //gives title for image
    verticalFit: true, // Fits image in area vertically
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  }
});

//cola gallery
$('#cola').magnificPopup({
  items: [
    { 
      src: 'images/cola.jpg',
      title:'cola',
      class:'img-fluid'
    },
           
  ],
  gallery: {
    enabled: true 
  },
  type: 'image', // this is default type
  image: {
    titleSrc: 'title', //gives title for image
    verticalFit: true, // Fits image in area vertically
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  }
});

//detol gallery
$('#detol').magnificPopup({
  items: [
    { 
      src: 'images/detol.jpg',
      title:'detol',
      class:'img-fluid'
    },
    { 
      src: 'https://sketchfab.com/models/170acc5be8f24f06b7db94c3f07d4775/embed',
      title:'detol 3D model',
      type:'iframe'
    },
           
  ],
  gallery: {
    enabled: true 
  },
  type: 'image', // this is default type
  image: {
    titleSrc: 'title', //gives title for image
    verticalFit: true, // Fits image in area vertically
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  }
});

//hut gallery
$('#hut').magnificPopup({
  items: [
    { 
      src: 'images/hut.jpg',
      title:'hut from front',
      class:'img-fluid'
    },
    { 
      src: 'images/hut-2.jpg',
      title:'hut from top',
      class:'img-fluid'
    },
           
  ],
  gallery: {
    enabled: true 
  },
  type: 'image', // this is default type
  image: {
    titleSrc: 'title', //gives title for image
    verticalFit: true, // Fits image in area vertically
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  }
});

});