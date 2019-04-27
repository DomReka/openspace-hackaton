var canvas = document.getElementById('openSpace');
var ctx = canvas.getContext('2d');

let chaise = new Image();
chaise.src = "svg/chaise.svg";
ctx.drawImage(chaise, 125, 160);
ctx.drawImage(chaise, 525, 160);
ctx.drawImage(chaise, 125, 410);
ctx.drawImage(chaise, 525, 410);

let petiteTable = new Image();
petiteTable.src = "svg/petiteTable.svg";
ctx.drawImage(petiteTable, 100, 625);
ctx.drawImage(petiteTable, 400, 625);

let grandeTable = new Image();
grandeTable.src = "svg/grandeTable.svg";
ctx.drawImage(grandeTable, 50, 50);
ctx.drawImage(grandeTable, 450, 50);
ctx.drawImage(grandeTable, 50, 300);
ctx.drawImage(grandeTable, 450, 300);

let cloison = new Image();
cloison.src = "svg/cloison.svg";
ctx.drawImage(cloison, 70, 20);
ctx.drawImage(cloison, 430, 20);
ctx.drawImage(cloison, 70, 270);
ctx.drawImage(cloison, 430, 270);
ctx.drawImage(cloison, 0, 550);
ctx.drawImage(cloison, 200, 550);
ctx.drawImage(cloison, 400, 550);

let cloisonVerticale = new Image();
cloisonVerticale.src = "svg/cloisonVerticale.svg";
ctx.drawImage(cloisonVerticale, 260, 20);
ctx.drawImage(cloisonVerticale, 430, 20);
ctx.drawImage(cloisonVerticale, 260, 270);
ctx.drawImage(cloisonVerticale, 430, 270);

let divan = new Image();
divan.src = "svg/divan.svg";
ctx.drawImage(divan, 75, 560);
ctx.drawImage(divan, 75, 750);
ctx.drawImage(divan, 375, 560);
ctx.drawImage(divan, 375, 750);


let fauteuil = new Image();
fauteuil.src = "svg/fauteuil.svg";
ctx.drawImage(fauteuil, 220, 650);
