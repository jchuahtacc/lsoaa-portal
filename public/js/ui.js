function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
        function(result) {
            console.log("login success!", result);
            userExists(exists, doesntExist);
        }
    ).catch(
        function(error) {
            console.log("login failed", error);
        }
    );
}

function getCurrentUser() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users').child(userId).once('value').then(
        function(snapshot) {
            console.log("user data", snapshot.val());
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );
}

function writeUserData() {
    var userId = firebase.auth().currentUser.uid;

    var data = {
        name: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email
    };

    var ref = firebase.database.ref('users').child(userId);

    ref.set(data);
}

function exists(authentification){
   console.log("User exists!!");
   var lightBox = $("#lightBox");
   lightBox.hide();
   window.location.href = "location";
   var userAuth = authentification;
}

function doesntExist(){
    console.log("User does not exist!!");
}

function init() {

}

$(document).ready(init);
