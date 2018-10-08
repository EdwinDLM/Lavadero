conectedToFirebase();
database = firebase.database();
var lavados = firebase.database().ref('Lavados/');
lavados.on('value',function(snapshot) {
  var data  = snapshot.val()
  $("#bodyt").empty();
  for (key in data){
    // console.log(data[key])
    var row = "<tr class='odd gradeX'>"+
      "<td>"+data[key].Matricula+"</td>"+
      "<td>"+data[key].Tipo+"</td>"+
      "<td>"+data[key].Tiempo+"</td>"+
      "<td>"+data[key].Agua+"</td>"+
      "<td>"+data[key].Jabon+"</td>"+
      "<td>"+data[key].Dia+"</td>"+
      "<td class='actions'><a href='#' class='icon'><i class='mdi mdi-delete'></i></a></td>"+
    "</tr>"
    $("#bodyt").append(row);
  }
});
