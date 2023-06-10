const cel = document.querySelectorAll(".cel");
const puntajeX = document.querySelector(".puntajeX");
const puntajeO = document.querySelector(".puntajeO");
const winnerset = document.querySelector(".winner_set");
let valorActual = "X";

let contadorX = 0;
let contadorO = 0;

function reset() {
  cel.forEach((element) => {
    element.textContent = "";
  });
}

function checkLine(a, b, c) {
  if (
    a.textContent === b.textContent &&
    b.textContent === c.textContent &&
    a.textContent !== ""
  ) {
    if (a.textContent === "X") {
      contadorX += 1;
      puntajeX.textContent = ` ${contadorX}`;
      reset();
    } else if (a.textContent === "O") {
      contadorO += 1;
      puntajeO.textContent = ` ${contadorO}`;
      reset();
    }
  }
}

function finishGame(value1, value2, win) {
  if (value1 + value2 === 3 ||value1 + value2 === 2) {
    if(value1>value2){
        win.textContent = `win Player X`;
    }
    else if(value1<value2){
        win.textContent=`win player O`
    }
  }
}

cel.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.textContent = valorActual;
    valorActual = valorActual === "X" ? "O" : "X";

    checkLine(cel[0], cel[1], cel[2]);
    checkLine(cel[3], cel[4], cel[5]);
    checkLine(cel[6], cel[7], cel[8]);

    checkLine(cel[0], cel[3], cel[6]);
    checkLine(cel[1], cel[4], cel[7]);
    checkLine(cel[2], cel[5], cel[8]);

    checkLine(cel[0], cel[4], cel[8]);
    checkLine(cel[2], cel[4], cel[6]);

    finishGame(contadorX, contadorO, winnerset);
  });
});