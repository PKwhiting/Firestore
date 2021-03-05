var firebaseConfig = {
    apiKey: "AIzaSyDQYdvg6KV-Iiozc7iR_3oLCSUvS7Y7Aok",
    authDomain: "basic-login-a6782.firebaseapp.com",
    projectId: "basic-login-a6782",
    storageBucket: "basic-login-a6782.appspot.com",
    messagingSenderId: "192317085965",
    appId: "1:192317085965:web:3fa830d53a2cba882cb844",
    measurementId: "G-8GBZNJ5G7G"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const firestore = firebase.firestore();
  const docRef = firestore.doc("users/user1");
  const button = document.getElementById("submit");

function login(){
 username = document.getElementById("username").value;
 password = document.getElementById("password").value;
 console.log('test');

 firestore.collection("users").doc().set({user: username, password: password
  }).then(function(){console.log('Username logged!');
  }).catch(function(error){console.log('error: ', error);
 });


 
 var all = document.getElementsByClassName('login');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('display');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'block';
}
document.getElementById("uname").innerHTML = username;
document.getElementById("pword").innerHTML = password;
}




function registerview(){
 var all = document.getElementsByClassName('register');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'block';
 }
 var all = document.getElementsByClassName('display');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'none';
 }
 var all = document.getElementsByClassName('login');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'none';
 }

 }



 function register(){
  fullname = document.getElementById("fullname").value;
  username = document.getElementById("email").value;
  password = document.getElementById("rpassword").value;
  console.log('test');
  firestore.collection("users").doc().set({name: fullname, user: username, password: password, 
   }).then(function(){console.log('User Registered!');
   }).catch(function(error){console.log('error: ', error);
  });
  var all = document.getElementsByClassName('register');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'none';
 }
 var all = document.getElementsByClassName('display');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'block';
 }
 var all = document.getElementsByClassName('login');
 for (var i = 0; i < all.length; i++) {
   all[i].style.display = 'none';
 }
 document.getElementById("uname").innerHTML = username;
 document.getElementById("pword").innerHTML = password;
 }