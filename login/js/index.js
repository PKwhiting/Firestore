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

var query = firestore.collection("users").where("user","==",username);
query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    field1 = doc.data().user;
    field2 = doc.data().password;
    document.getElementById("uname").innerHTML = field1;
    document.getElementById("pword").innerHTML = field2;
  });
});

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
 var query = firestore.collection("users").where("user","==",username);
 query.get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
     field1 = doc.data().user;
     field2 = doc.data().password;
     document.getElementById("uname").innerHTML = field1;
     document.getElementById("pword").innerHTML = field2;
   });
 });
 }
 function deleteuser(){
  console.log('deleting');
 username = document.getElementById("username").value;
 password = document.getElementById("password").value;

var query = firestore.collection("users").where("user","==",username);

query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});

var all = document.getElementsByClassName('register');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('display');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('login');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'block';
}
 

}
function modifyview(uname,pword){
  uname = uname.innerHTML;
  pword = pword.innerHTML;
  var all = document.getElementsByClassName('register');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  var all = document.getElementsByClassName('display');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  var all = document.getElementsByClassName('login');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  var all = document.getElementsByClassName('modify');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }
  document.getElementById("ouname").innerHTML = uname;
  document.getElementById("opword").innerHTML = pword;
 
  }
function modify(ouname,opword,uusername,upassword){
  ouname = ouname.innerHTML;
  opword = opword.innerHTML;
  uusername = uusername.value;
  upassword = upassword.value;
  // var query = firestore.collection("users").where("user","==",uusername).limit(1).get();
  // console.log(query);
  // firestore.collection("users").doc(query).update({user:uusername, password:upassword});
var query = firestore.collection("users");
query.where("user","==",ouname).get()
.then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      id = doc.id;
      console.log(id);
      query = firestore.collection("users").doc(id).update({user:uusername, password:upassword});
  });
})
.catch(function(error) {
  console.log("Error getting documents: ", error);
});

var all = document.getElementsByClassName('register');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('modify');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('display');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}
var all = document.getElementsByClassName('login');
for (var i = 0; i < all.length; i++) {
  all[i].style.display = 'block';
}
 
}
