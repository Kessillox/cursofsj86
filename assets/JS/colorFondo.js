var coloresFondo = ["#8B0000", "#006400", "#00008B", "#8B008B", "#8B4513", "#2F4F4F"];
var colorActual = 0;

function cambiarColorDeFondo() {
  document.body.style.backgroundColor = coloresFondo[colorActual];
  colorActual = (colorActual + 1) % coloresFondo.length;
}

cambiarColorDeFondo(); 
setInterval(cambiarColorDeFondo, 5000);