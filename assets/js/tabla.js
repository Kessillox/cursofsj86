const integrantes = [
    {nombre: "Norma Jeldes", edad: 38, correo: "norma.jeldres@gmail.com"},
    {nombre: "Karla Cortes", edad: 30, correo: "karla.cortes@example.com"},
    {nombre: "Nicolas Fuentes", edad: 24, correo: "nicolas.fuentes@example.com"},
    {nombre: "Felix Jimenez", edad: 60, correo: "felix.jimenez@example.com"},
    {nombre: "Rodrigo Lopez", edad: 30, correo: "rodrigo.lopez@example.com"}
]

const tabla_integrantes = document.getElementById("tabla_integrantes");
const tbody = tabla_integrantes.querySelector("tbody");

integrantes.forEach(integrante => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${integrante.nombre}</td>
    <td>${integrante.edad}</td>
    <td>${integrante.correo}</td>
    `;
    tbody.appendChild(fila);
});