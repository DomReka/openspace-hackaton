 // CONFIG REPAS MIDI

 let repas = document.querySelector("#configRepasMidi")
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

 });