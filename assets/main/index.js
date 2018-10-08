conectedToFirebase();
var dataGrafica = []
var dataGraficaTProm = []
database = firebase.database();
var lavados = firebase.database().ref('Lavados/');
lavados.on('value',function(snapshot) {
  dataGrafica.length = 0;
  dataGraficaTProm.length = 0;
  var data  = snapshot.val();
  var promediot = promedioTiempo(data);
  var promedioA = promedioAgua(data);
  var promedioJ = promedioJabon(data);
  var CantCamion = contarCamion(data);
  var CantCamioneta = contarCamioneta(data);
  var CantAutomovil = contarAutomovil(data);
  $("#CantLavados").attr("data-end", data.length-1);
  $("#CantLavados").text(data.length-1);
  $("#promedioT").attr("data-end", promediot);
  $("#promedioT").text(promediot.toFixed(2) + " Min");
  $("#PromedioA").attr("data-end", promedioA)
  $("#PromedioA").text(promedioA.toFixed(1) + " M^3");
  $("#PromedioJ").attr("data-end", promedioJ)
  $("#PromedioJ").text(promedioJ.toFixed(2) + " gr");

  var promTAuto = promedioTiempoAutomovil(data);
  $("#PTAutomovil").text(promTAuto.toFixed(2) + " Min");
  var promTCamion= promedioTiempoCamion(data);
  $("#PTCamion").text(promTCamion.toFixed(2) + " Min");
  var promTCamioneta= promedioTiempoCamioneta(data);
  $("#PTCamioneta").text(promTCamioneta.toFixed(2) + " Min");

  dataGrafica.push({name: 'Camion', y: CantCamion});
  dataGrafica.push({name: 'Camioneta',y: CantCamioneta});
  dataGrafica.push({name: 'Automovil',y: CantAutomovil});
  graficaTipoVehiculo(dataGrafica);

  dataGraficaTProm.push({name: 'Automovil', data: [promTAuto]});
  dataGraficaTProm.push({name: 'Camion', data: [promTCamion]});
  dataGraficaTProm.push({name: 'Camioneta', data: [promTCamioneta]});
  graficaPromedioTiempo(dataGraficaTProm);

// end firebase
});

//promedio tiempo Camion
function promedioTiempoCamioneta(data){
  var sum = 0;
  var cant = 0;
  var prom = 0;
  for(key in data){
    if(data[key].Tipo=="Camioneta" ){
      sum = sum + data[key].Tiempo;
      cant = cant +1;
    }
  }
  prom = (sum/cant);
  return prom;
}

//promedio tiempo Camion
function promedioTiempoCamion(data){
  var sum = 0;
  var cant = 0;
  var prom = 0;
  for(key in data){
    if(data[key].Tipo=="Camion" ){
      sum = sum + data[key].Tiempo;
      cant = cant +1;
    }
  }
  prom = (sum/cant);
  return prom;
}

//promedio tiempo Automovil
function promedioTiempoAutomovil(data){
  var sum = 0;
  var cant = 0;
  var prom = 0;
  for(key in data){
    if(data[key].Tipo=="Automovil" ){
      sum = sum + data[key].Tiempo;
      cant = cant +1;
    }
  }
  prom = (sum/cant);
  return prom;
}



//funcion que cuenta el total de Automovil
function contarAutomovil(data){
  var sum = 0;
  for(key in data){
    if(data[key].Tipo=="Automovil"){
      sum = sum + 1;
    }
  }
  return sum;
}

//funcion que cuenta el total de camionetas
function contarCamioneta(data){
  var sum = 0;
  for(key in data){
    if(data[key].Tipo=="Camioneta"){
      sum = sum + 1;
    }
  }
  return sum;
}

//funcion que cuenta el total de camiones
function contarCamion(data){
  var sum = 0;
  for(key in data){
    if(data[key].Tipo=="Camion"){
      sum = sum + 1;
    }
  }
  return sum;
}

//determina el promedio total del Jabon
function promedioJabon(data){
  var sum = 0;
  var prom = 0;
  for(key in data){
    sum = sum + data[key].Jabon;
  }
  prom = (sum/(data.length-1));
  return prom;
}

//determina el promedio total de agua
function promedioAgua(data){
  var sum = 0;
  var prom = 0;
  for(key in data){
    sum = sum + data[key].Agua;
  }
  prom = (sum/(data.length-1));
  return prom;
}

//determina el promedio total de Tiempo
function promedioTiempo(data){
  var sum = 0;
  var prom = 0;
  for(key in data){
    sum = sum + data[key].Tiempo;
  }
  prom = (sum/(data.length-1));
  return prom;
}

//funcion grafica promedio tiempo
function graficaPromedioTiempo(dataGraficaTProm){
var grafica = Highcharts.chart('promtiempog', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    xAxis: {
        categories: [null],
        labels: {
            skew3d: true,
            style: {
                fontSize: '1px'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    series: dataGraficaTProm
});
}

//funcion grafica tipo vehiculo
function graficaTipoVehiculo(dataGrafica){
  var grafica = Highcharts.chart('tipopiechart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: 'Total: {point.y} -- <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                },
                showInLegend: true
            }
        },
        series: [{
            data: dataGrafica
        }]
      });
}
