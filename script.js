var canvas = document.getElementById('openSpace');
var ctx = canvas.getContext('2d');

let chaise = new Image();
chaise.src = "svg/chaise.svg";
let chaise1 = ctx.drawImage(chaise, 125, 160);
let chaise2 = ctx.drawImage(chaise, 525, 160);
let chaise3 = ctx.drawImage(chaise, 125, 410);
let chaise4 = ctx.drawImage(chaise, 525, 410);

let petiteTable = new Image();
petiteTable.src = "svg/petiteTable.svg";
let petiteTable1 = ctx.drawImage(petiteTable, 100, 625);
let petiteTable2 = ctx.drawImage(petiteTable, 400, 625);

let grandeTable = new Image();
grandeTable.src = "svg/grandeTable.svg";
let grandeTable1 = ctx.drawImage(grandeTable, 50, 50);
let grandeTable2 = ctx.drawImage(grandeTable, 450, 50);
let grandeTable3 = ctx.drawImage(grandeTable, 50, 300);
let grandeTable4 = ctx.drawImage(grandeTable, 450, 300);

let cloison = new Image();
cloison.src = "svg/cloison.svg";
let cloison1 = ctx.drawImage(cloison, 70, 20);
let cloison2 = ctx.drawImage(cloison, 430, 20);
let cloison3 = ctx.drawImage(cloison, 70, 270);
let cloison4 = ctx.drawImage(cloison, 430, 270);
let cloison5 = ctx.drawImage(cloison, 0, 550);
let cloison6 = ctx.drawImage(cloison, 200, 550);
let cloison7 = ctx.drawImage(cloison, 400, 550);

let cloisonVerticale = new Image();
cloisonVerticale.src = "svg/cloisonVerticale.svg";
let cloisonVerticale1 = ctx.drawImage(cloisonVerticale, 260, 20);
let cloisonVerticale2 = ctx.drawImage(cloisonVerticale, 430, 20);
let cloisonVerticale3 = ctx.drawImage(cloisonVerticale, 260, 270);
let cloisonVerticale4 = ctx.drawImage(cloisonVerticale, 430, 270);

let divan = new Image();
divan.src = "svg/divan.svg";
ctx.drawImage(divan, 75, 560);
ctx.drawImage(divan, 75, 750);
ctx.drawImage(divan, 375, 560);
ctx.drawImage(divan, 375, 750);


let fauteuil = new Image();
fauteuil.src = "svg/fauteuil.svg";
ctx.drawImage(fauteuil, 220, 650);
