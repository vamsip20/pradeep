$(document).ready(function() {

  //bottom button which can send user to top of page
  window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  
//lazy loading of images
  const myLazyLoad= new LazyLoad({
    elements_selector:".img-fluid"
  });

function createPopup(name,arr){

$('#'+name).magnificPopup({
  items:arr,
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

}

//crocodile gallery
var crocarr=[
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
];
createPopup('croc',crocarr);

//plane gallery

var planearr=[
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
    ];

  createPopup('plane',planearr);

//borodon gallery
var borodonarr=[
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
      },
    ];
    createPopup('borodon',borodonarr);

//sofa-chair gallery
var sofachairarr=[
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
    ];
    createPopup('sofa-chair',sofachairarr);

//chakra gallery
var chakraarr=[
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
    ];
    createPopup('chakra',chakraarr);

//plain-chair gallery
var plainchairarr= [
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
    ];
    createPopup('plain-chair',plainchairarr);

//office-chair gallery
var officechairarr= [
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
    ];
    createPopup('office-chair',officechairarr);

//chair-pattern gallery
var chairpatternarr=[
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
    ];
    createPopup('chair-pattern',chairpatternarr);

//hand gallery
var handarr= [
      { 
        src: 'images/hand.jpg',
        title:'hand',
        class:'img-fluid'
      },             
    ];
    createPopup('hand',handarr);

//cage gallery
var cagearr=[
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
    ];
    createPopup('cage',cagearr);

//home gallery
var hometarr=[
    { 
      src: 'images/home-t.jpg',
      title:'home',
      class:'img-fluid'
    },           
  ];
  createPopup('home-t',hometarr);

//cola gallery
var colaarr=[
    { 
      src: 'images/cola.jpg',
      title:'cola',
      class:'img-fluid'
    },           
  ];
  createPopup('cola',colaarr);

//detol gallery
var detolarr=[
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
  ];
  createPopup('detol',detolarr);

//hut gallery
var hutarr=[
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
  ];
  createPopup('hut',hutarr);

//fan gallery
var fanarr=[
    { 
      src: 'images/fan.jpg',
      title:'fan from front',
      class:'img-fluid'
    },
    { 
      src: 'images/fan-l.jpg',
      title:'fan from left',
      class:'img-fluid'
    },           
    { 
      src: 'images/fan-r.jpg',
      title:'fan from right',
      class:'img-fluid'
    },
    { 
      src: 'images/fan-b.jpg',
      title:'fan from back',
      class:'img-fluid'
    },           
    { 
      src: 'https://sketchfab.com/models/a47589f139be45f780c46b80e8f3758a/embed',
      title:'fan 3D model',
      type :'iframe'
    },           
  ];
  createPopup('fan',fanarr);

//rustrobo gallery
var rustroboarr=[
    { 
      src: 'images/rustrobo.jpg',
      title:'robo from front',
      class:'img-fluid'
    },
    { 
      src: 'images/rustrobo-2.jpg',
      title:'robo from back',
      class:'img-fluid'
    },
    { 
      src: 'https://sketchfab.com/models/54bf2821fde249eab1c34dc79b11856a/embed',
      title:'robo 3D model',
      type :'iframe'
    },           
  ];
  createPopup('rustrobo',rustroboarr);

});