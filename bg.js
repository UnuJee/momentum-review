const body = document.querySelector("body");

const NUM = 15;
const NUM_COLOR = {
  1: "#786fa6",
  2: "#574b90",
  3: "#c44569",
  4: "#b33939",
  5: "#2c2c54",
  6: "#0c2461",
  7: "#0a3d62",
  8: "#303952",
  9: "#6D214F",
  10: "#182C61",
  11: "#82589F",
  12: "#535c68",
  13: "#574b90",
  14: "#546de5",
  15: "#c44569"
};

function genRandom() {
  const number = Math.floor(Math.random() * NUM) + 1;
  return number;
}

function paintBgImg(randomNumber) {
  body.style.backgroundColor = NUM_COLOR[randomNumber];
}

function init() {
  const randomNumber = genRandom();
  paintBgImg(randomNumber);
}

init();

/*  #303952푸른회색   
#6D214F적록색
  #182C61색
   #82589F아이유색
    #535c68회색
     #574b90보라색 
     #546de5푸른색 
     #c44569핑크색     */
