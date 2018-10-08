function conectedToFirebase(){

  var config = {
    apiKey: "AIzaSyDvt3CgNYTckI5KPjcAQeG-V-OjZBWPBMU",
    authDomain: "simulacion-a16e1.firebaseapp.com",
    databaseURL: "https://simulacion-a16e1.firebaseio.com",
    projectId: "simulacion-a16e1",
    storageBucket: "simulacion-a16e1.appspot.com",
    messagingSenderId: "646785668732"
  };

  var fb =  firebase.initializeApp(config);

  return fb;
}

function StatusUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      $("#NombreUser").text(user.email);
    }else{
      window.location.replace("./login.html");
    }
  });
}


function logOut(){
  firebase.auth().signOut().then(function() {
    console.log("cerrada")

  }).catch(function(error) {
    console.log(error)
  });
}
