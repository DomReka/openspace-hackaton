 // CONFIG REPAS MIDI

 let repas = document.querySelector("#configSport")
 repas.addEventListener("click", ()=> {
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

   anime.timeline({
      direction: "alternate",
    })
    .add({
      targets: '.cloison',
      opacity: 0,
      easing: 'linear',
      duration: 2000/2,
    })
    .add({
      targets: '#grandeTable1',
      translateX: '-20px',
      easing: 'linear',
      duration: 1000/4,
    })
    .add({
      targets: '#grandeTable2',
      translateX: '20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#grandeTable3',
      translateX: '-20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#grandeTable4',
      translateX: '20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise1',
      translateX: '150px',
      translateY: '20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise2',
      translateX: '-150px',
      translateY: '20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise3',
      translateX: '150px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise4',
      translateX: '-150px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#grandeTable1',
      translateY: '-60px',
      translateX: '-20px',
      easing: 'linear',
      duration: 500,
    })
    .add({
      targets: '#grandeTable2',
      translateY: '-60px',
      translateX: '20px',
      easing: 'linear',
      duration: 500,
      offset: "-=500",
    })
    .add({
      targets: '#grandeTable3',
      translateY: '-220px',
      translateX: '-20px',
      easing: 'linear',
      duration: 750,
      offset: "-=500",
    })
    .add({
      targets: '#grandeTable4',
      translateY: '-220px',
      translateX: '20px',
      easing: 'linear',
      duration: 750,
      offset: "-=750",
    })
    .add({
      targets: '#chaise1',
      translateX: '-100px',
      translateY: '20px',
      easing: 'linear',
      duration: 1000/4,
    })
    .add({
      targets: '#chaise2',
      translateX: '-610px',
      translateY: '20px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise3',
      translateX: '-100px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise4',
      translateX: '-610px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#chaise3',
      translateX: '-100px',
      translateY: '-190px',
      easing: 'linear',
      duration: 1000/4,
    })
    .add({
      targets: '#chaise4',
      translateX: '-610px',
      translateY: '-190px',
      easing: 'linear',
      duration: 1000/4,
      offset: "-=250",
    })
    .add({
      targets: '#grandeTable2',
      translateY: '-60px',
      translateX: '-380px',
      easing: 'linear',
      duration: 500,
      offset: "-=250",
    })
    .add({
      targets: '#grandeTable4',
      translateY: '-220px',
      translateX: '-380px',
      easing: 'linear',
      duration: 500,
      offset: "-=500",
    })
    .add({
      duration: 500,
    })

});