
var firebaseConfig = {
      apiKey: "AIzaSyCvj7jPrlV1v8oup99rMuSxreZWEXtCBbg",
      authDomain: "twitter-jr-4ede2.firebaseapp.com",
      databaseURL: "https://twitter-jr-4ede2-default-rtdb.firebaseio.com",
      projectId: "twitter-jr-4ede2",
      storageBucket: "twitter-jr-4ede2.appspot.com",
      messagingSenderId: "1052352287572",
      appId: "1:1052352287572:web:b1c60f8afa954d6d35aec1",
      measurementId: "G-GKF2MT30WS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+" </div> <hr> ";
       document.getElementById("output").innerHTML += row;
      

      });});}
getData();
        
function addroom(){
      Room_names = document.getElementById("roomname").value;
      firebase.database().ref("/").child(Room_names).update({
            pupose : "adding roomname"
        
      });
      localStorage.setItem("room_name",Room_names);
      window.location = "kwitter_page.html";
    

}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name;


function redirectToRoom(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


