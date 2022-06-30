//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNf1OzUINRd9AGXFtagcLeA7-GHkpNxpE",
      authDomain: "kwitter-7cb25.firebaseapp.com",
      databaseURL: "https://kwitter-7cb25-default-rtdb.firebaseio.com",
      projectId: "kwitter-7cb25",
      storageBucket: "kwitter-7cb25.appspot.com",
      messagingSenderId: "926893447350",
      appId: "1:926893447350:web:191733f91325055ed72e17"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log("Room Name - + Room_names");
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value = "";

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter_room.html";
            
}