// CONFIG PRESENTATION 
let config = document.querySelector("#configPresentation")
config.addEventListener("click", ()=> {
  anime({
    targets: '#fauteuil2',
    duration: 0,
    offset: 0,
    rotate: 90,
  });
  anime({
    targets: ['#divan3', '#divan4'],
    duration: 0,
    offset: 0,
    rotate: 180,
  });
  anime({
    targets: '#fauteuil1',
    duration: 0,
    offset: 0,
    rotate: "-90",
  });
  anime({
    targets: ['#cloison100', '#cloison101'],
    duration: 0,
    offset: 0,
    opacity: 0,
  });

  anime.timeline({})
  .add({
    targets: '.cloison',
    opacity: 0,
    easing: 'linear',
    duration: 2000,
  })
  .add([{
    targets: '#chaise1',
    translateX: '150px',
    easing: 'linear',
    duration: 1000,
  }, {
    targets: '#chaise2',
    translateX: '-150px',
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  }, {
    targets: '#chaise3',
    translateX: '225px',
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  }, {
    targets: '#chaise4',
    translateX: '-225px',
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  }, {
    targets: '#chaise3',
    translateX: '225px',
    translateY: '-250px',
    easing: 'linear',
    duration: 1000,
  }, {
    targets: '#chaise4',
    translateX: '-225px',
    translateY: '-250px',
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  }])
  .add([{
    targets: ['#grandeTable1', '#grandeTable3'],
    rotate: -90,
    easing: 'linear',
    duration: 2000,
  },{
    targets: ['#grandeTable2', '#grandeTable4'],
    rotate: 90,
    easing: 'linear',
    duration: 2000,
    offset: "-=2000",
  }])
  .add({
    targets: '#grandeTable1',
    translateX: '-70px',
    translateY: '-10px',
    rotate: -90,
    easing: 'linear',
    duration: 1000,
  })
  .add({
    targets: '#grandeTable2',
    translateX: '70px',
    translateY: '-10px',
    rotate: 90,
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  })
  .add({
    targets: '#grandeTable3',
    translateX: '-70px',
    translateY: '-70px',
    rotate: -90,
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  })
  .add({
    targets: '#grandeTable4',
    translateX: '70px',
    translateY: '-70px',
    rotate: 90,
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  })


  anime.timeline({})
  .add({
    targets: '#fauteuil1',
    translateY: '-100px',
    rotate: -180,
    easing: 'linear',
    duration: 1000,
    delay: 1000,
  })
  .add({
    targets: '#fauteuil2',
    translateY: '-100px',
    rotate: 180,
    easing: 'linear',
    duration: 1000,
    offset: "-=1000",
  })
  .add({
    targets: '#petiteTable2',
    translateX: '420px',
    translateY: '80px',
    rotate: 90,
    easing: 'linear',
    duration: 2000,
  })
  .add({
    targets: '#petiteTable1',
    translateX: '600px',
    translateY: '-20px',
    rotate: 90,
    easing: 'linear',
    duration: 3000,
    offset: "-=2000",
  })
  .add({
    targets: '#fauteuil2',
    translateX: '160px',
    translateY: '-420px',
    rotate: 180,
    easing: 'linear',
    duration: 2000,
    delay: 2000,
  })
  .add({
    targets: '#fauteuil1',
    translateY: '-420px',
    translateX: '160px',
    rotate: -180,
    easing: 'linear',
    duration: 2000,
    offset: "-=2000",
  })
  .add({
    targets: ['#divan1', '#divan2'],
    translateX: '50px',
    translateY: '-250px',
    rotate: -180,
    easing: 'linear',
    duration: 3000,
    offset: "-=2000",
  })
  .add({
    targets: ['#divan3', '#divan4'],
    translateX: '230px',
    translateY: '-330px',
    rotate: 180,
    easing: 'linear',
    duration: 3000,
    offset: "-=2000",
  })
  .add({
    targets: ['#cloison100', '#cloison101'],
    opacity: 1,
    easing: 'linear',
    duration: 1000,
  })
});