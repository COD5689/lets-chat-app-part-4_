// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAtSqjnx7KzpGl9APBPDXEOvM7AOAUCGUo",
    authDomain: "lets-chat-app-bc4c3.firebaseapp.com",
    databaseURL: "https://lets-chat-app-bc4c3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-bc4c3",
    storageBucket: "lets-chat-app-bc4c3.appspot.com",
    messagingSenderId: "632070989271",
    appId: "1:632070989271:web:179f1aa3607d231abdd792",
    measurementId: "G-1ZXNGN1ZWE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+username+"!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room Name - "+ Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addroom(){
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem('room_name');
  localStorage.removeItem("user_name");
  window.location = "index.html";
}