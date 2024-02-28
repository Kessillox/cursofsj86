
(function Relog(){
    var actualizacion = function(){
        var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();
    
        var phoras = document.getElementById('horas'),
            pampm = document.getElementById('ampm'),
            pminutos = document.getElementById('minutos'),
            psegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pmes = document.getElementById('mes'),
            pyear = document.getElementById('year');
    
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent = "Hoy es "+ semana[diaSemana];
        pDia.textContent = dia;
    
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pmes.textContent = meses[mes];
        pyear.textContent = [year];
    
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        }else{
            ampm ='AM';
        }

        if (horas == 0){
            horas = 12;
        }
        phoras.textContent = horas;
        pampm.textContent = ampm;
        if (minutos < 10){minutos = "0" + minutos };

        if (segundos < 10){segundos = "0" + segundos };
    
        pminutos.textContent = minutos;
        psegundos.textContent = segundos;
    };
    actualizacion();
    var intervalo = setInterval(actualizacion, 1000);
    return alert( " BIENVENIDOS Al GRUPO 3")
}()
)

function oculta_muestra() {
    if(document.getElementById('contenedor2').style.display == 'none') {
        $("#contenedor2").show("slowly"); /*efecto de lentitud*/
        $("#contenedor2").show(); /*lo muestra*/
    } else {
        $("#contenedor2").hide(); /* oculta */
    }
}
