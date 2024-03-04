var coloresFondo = [
  "#AEC6CF", 
  "#FF6961", 
  "#77DD77", 
  "#779ECB", 
  "#F49AC2", 
  "#CB99C9", 
  "#CFCFC4", 
];
var colorActual = 0;

function cambiarColorDeFondo() {
  document.body.style.backgroundColor = coloresFondo[colorActual];
  colorActual = (colorActual + 1) % coloresFondo.length;
}

cambiarColorDeFondo(); 
setInterval(cambiarColorDeFondo, 5000);