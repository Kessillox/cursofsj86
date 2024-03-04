function bola8Magica() {
  var respuestas = [
    "Ciertamente",
    "Definitivamente si",
    "No hay duda",
    "Puedes contar con ello",
    "Desde donde lo veo, si",
    "Es muy probable",
    "Las posibilidades se ven geniales",
    "Puede requerir algo de esfuerzo",
    "Algo confuso, intenta de nuevo",
    "Pregunta mas tarde",
    "Mejor no responder por ahora",
    "Repiensa la pregunta, e intenta de nuevo",
    "No cuentes con ello",
    "Mi respuesta es no",
    "Mis fuentes dicen que no",
    "Las posibilidades no se ven bien",
    "Lo dudo mucho",
    "Prueba pensarlo desde otra perspectiva",
  ];

  var aleatorio =
    respuestas[Math.floor(Math.random() * respuestas.length)];

  document.getElementById("respuestaBola8").innerHTML = aleatorio;
}