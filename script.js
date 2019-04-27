var canvas = document.getElementById('openSpace');
var ctx = canvas.getContext('2d');

let chaise = new Image();
chaise.src = "svg/chaise.svg";
ctx.drawImage(chaise, 100, 100);
ctx.drawImage(chaise, 200, 100);
ctx.drawImage(chaise, 100, 200);
ctx.drawImage(chaise, 200, 200);

let petiteTable = new Image();
petiteTable.src = "svg/petiteTable.svg";
ctx.drawImage(petiteTable, 300, 100);
ctx.drawImage(petiteTable, 450, 100);

let grandeTable = new Image();
grandeTable.src = "svg/grandeTable.svg";
ctx.drawImage(grandeTable, 100, 500);

let cloison = new Image();
cloison.src = "svg/cloison.svg";
ctx.drawImage(cloison, 300, 300);
ctx.drawImage(cloison, 300, 320);
ctx.drawImage(cloison, 300, 340);

let divan = new Image();
divan.src = "svg/divan.svg";
ctx.drawImage(divan, 100, 400);

let fauteuil = new Image();
fauteuil.src = "svg/fauteuil.svg";
ctx.drawImage(fauteuil, 350, 400);
