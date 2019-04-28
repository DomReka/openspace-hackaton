 // CONFIG REPAS MIDI

 let config = document.querySelector("#configRepasMidi")
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

 });