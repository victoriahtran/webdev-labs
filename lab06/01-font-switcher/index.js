const makeBigger = () => {

  //alert('make bigger!');
  size += 2;
  document.querySelector(".content p").style.fontSize = size + "px";
  document.querySelector("h1").style.fontSize = 1.5 * size + "px";
};

const makeSmaller = () => {
   //alert('make smaller!');
  size -= 2;
  document.querySelector(".content p").style.fontSize = size + "px";
  document.querySelector("h1").style.fontSize = 1.5 * size + "px";
};

let size = 22;

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

