


var randomact = Math.floor(Math.random()*5+1);
var randomscene = Math.floor(Math.random()*4+1);
var randomlinestart = Math.floor(Math.random()*200+1);
var randomlineend = randomlinestart + 40;

// Act 1//

if (randomact == 1) {
   randomscene = Math.floor(Math.random()*5+1)
   if (randomscene == 1) {
       randomlinestart = 1
       randomlineend = 41;
   }
   if (randomscene == 2) {
       randomlinestart = Math.floor(Math.random()*24+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 3) {
       randomlinestart = Math.floor(Math.random()*74+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 4) {
       randomlinestart = 1
       randomlineend = 41;
   }
   if (randomscene == 5) {
       randomlinestart = Math.floor(Math.random()*226+1)
       randomlineend = randomlinestart + 40;
   }
    };

// Act 2//

if (randomact == 2){
   randomscene = Math.floor(Math.random()*5+1);
   if (randomscene == 1) {
       randomlinestart = 1
       randomlineend = 36;
   }
   if (randomscene == 2) {
       randomlinestart = 1
       randomlineend = 38;
   }
   if (randomscene == 3) {
       randomlinestart = Math.floor(Math.random()*120+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 4) {
       randomlinestart = Math.floor(Math.random()*80+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 5) {
       randomlinestart = Math.floor(Math.random()*131+1)
       randomlineend = randomlinestart + 40;
   }
};

// Act 3//

if (randomact == 3) {
   randomscene = Math.floor(Math.random()*4+1);
   if (randomscene == 1) {
       randomlinestart = Math.floor(Math.random()*109+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 2) {
       randomlinestart = Math.floor(Math.random()*26+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 3) {
       randomlinestart = 1
       randomlineend = 50;
   }
   if (randomscene == 4) {
       randomlinestart = Math.floor(Math.random()*304+1)
       randomlineend = randomlinestart + 40;
   }
   
};

// Act 4//

if (randomact == 4) {
   randomscene = Math.floor(Math.random()*3+1);
   if (randomscene == 1) {
       randomlinestart = 1
       randomlineend = 59;
   }
   if (randomscene == 2) {
       randomlinestart = Math.floor(Math.random()*73+1)
       randomlineend = randomlinestart + 40;
   }
   if (randomscene == 3) {
       randomlinestart = 1
       randomlineend = 35;
   }
};  

// Act 5//

if (randomact == 5) {
   randomscene = 1
   randomlinestart = Math.floor(Math.random()*345+1)
   randomlineend = randomlinestart + 40;
};




    console.log(randomact,randomscene,randomlinestart,randomlineend)


