
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDNf1OzUINRd9AGXFtagcLeA7-GHkpNxpE",
      authDomain: "kwitter-7cb25.firebaseapp.com",
      databaseURL: "https://kwitter-7cb25-default-rtdb.firebaseio.com",
      projectId: "kwitter-7cb25",
      storageBucket: "kwitter-7cb25.appspot.com",
      messagingSenderId: "926893447350",
      appId: "1:926893447350:web:191733f91325055ed72e17"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'>"
      message_with_tag = "<h4 class='message_h4' > " + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>";

      //End code
      row = name_with_tag + message_with_tag+like_button +span_with_tag;
      document.getElementById("output").innerHTML += row;

      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter_room.html";

}
function login() {
      localStorage.addItem("user_name");

}