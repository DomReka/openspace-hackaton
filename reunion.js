
function reunion(direction) {
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
  direction: direction,
})
  .add({
  targets: '.cloison',
  opacity: 0,
  duration: 1000,
  autoplay: false,
  easing: 'linear',
  autoplay: false,
})
.add([{
  targets: '#grandeTable1',
  duration: 2000,
  offset: '-=2000',
  delay: 2000,
  translateX: '25px',
  rotate: 90,
  easing: 'linear', 
  autoplay: false,
},
{
  targets: '#grandeTable2',
  duration: 2000,
  offset: '-=2000',
  translateX: '-425px',
  rotate: -90,
  easing: 'linear',
  autoplay: false,
},
{
  targets: '#grandeTable3',
  duration: 2000,
  offset: '-=2000',
  translateY: '-50px',
  translateX: '25px',
  rotate: 90,
  easing: 'linear', 
  autoplay: false,
},   
{
  targets: '#grandeTable4',
  duration: 2000,
  offset: '-=2000',
  translateY: '-50px',
  translateX: '-425px',
  rotate: -90,
  easing: 'linear',
  autoplay: false,
},
{
  targets: '#chaise1',
  duration: 2000,
  offset: '-=2000',
  translateX: '-60px',
  translateY: -100,
  rotate: 90,
  easing: 'linear', 
  autoplay: false,
},
{
  targets: '#chaise2',
  duration: 2000,
  offset: '-=2000',
  translateX: '-350px',
  translateY: -100,
  rotate: -90,
  easing: 'linear',
  autoplay: false,
},
{
  targets: '#chaise3',
  duration: 2000,
  offset: '-=2000',
  translateX: -60,
  translateY: -150,
  rotate: 90,
  easing: 'linear', 
  autoplay: false,
},
{
  targets: '#chaise4',
  duration: 2000,
  offset: '-=2000',
  translateY: -150,
  translateX: -350,
  rotate: -90,
  easing: 'linear',
  autoplay: false,
},
{
  targets: '.salon',
  translateX: "300px",
  offset: '-=2000',
  duration: 2000,
  easing: 'linear',
  autoplay: false,
},
{
    targets: '#fauteuil2',
  translateX: "300px",
    duration: 2000,
  offset: '-=2000',
  easing: 'linear',
    rotate: 90,
},
{  
    targets: ['#divan3', '#divan4'],
  translateX: "300px",
    duration: 2000,
  offset: '-=2000',
   rotate: 180,
  easing: 'linear',
 },
 {
   targets: '#fauteuil1',
  translateX: "300px",
   duration: 2000,
  offset: '-=2000',
   rotate: "-90",
  easing: 'linear',
 },
{
  targets: '.cloisonsTr',
  opacity: 1,
  duration: 1500,
  autoplay: false,
  easing: 'linear',
}
])
.add({
  duration: 500,
});
}

 let travail = document.querySelector("#workBtn");
    travail.addEventListener("click", ()=> {
      reunion("alternate");
});


