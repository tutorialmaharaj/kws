//YOUR FIREBASE LIN

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


firebase.initializeApp(firebaseConfig);


username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code


                        console.log(firebase_message_id);
                        console.log(message_data);

                        name1 = message_data["name"]
                        message = message_data["message"]
                        like = message_data["like"]
                        name_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'><h4>";
                        message_tag = "<h4 class ='message_h4'>" + message + "</h4>";
                        like_tag = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
                        span_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button><hr>";
                        row = name_tag + message_tag + like_tag + span_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id) {
      
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_Like = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
                  like: update_Like
            });
      }
