const body = document.querySelector("body");

const NUM = 15;
const NUM_COLOR = {
  0: "#786fa6",
  1: "#574b90",
  2: "#c44569",
  3: "#b33939",
  4: "#2c2c54",
  5: "#0c2461",
  6: "#0a3d62",
  7: "#303952",
  8: "#6D214F",
  9: "#182C61",
  10: "#82589F",
  11: "#535c68",
  12: "#574b90",
  13: "#546de5",
  14: "#c44569"
};

function genRandom() {
  const number = Math.floor(Math.random() * NUM);
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
