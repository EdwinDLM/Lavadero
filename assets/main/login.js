$(function() {
   var fb = conectedToFirebase();
  // console.log(fb)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.replace("./index.html");
      // User is signed in.
    } else {
      console.log("usuario no log")
    }
  });
});

function login(){
  var email = $("#username").val();
  var passw = $("#password").val();
  console.log(email);
  console.log(passw);

  firebase.auth().signInWithEmailAndPassword(email,passw).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  });
}
