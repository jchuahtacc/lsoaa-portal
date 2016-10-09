function login(create) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
        function(result) {
            console.log("login success!", result);
            if (create) {
                createAccount();
            }
        }
    ).catch(
        function(error) {
            console.log("login failed", error);
        }
    );
}

function displayFrontMatter(show) {
    if (show) {
        $("#introContainer").removeClass("hidden");
        $("#jumbotron").removeClass("hidden");
    } else {
        $("#introContainer").addClass("hidden");
        $("#jumbotron").addClass("hidden");
    }
}

function createAccount() {
    displayFrontMatter(false);
    var user = firebase.auth().currentUser;
    $("#createAccount .profile").profile(user.displayName, user.email, user.photoURL);
    $("#createAccount").removeClass("hidden");
}

function contactInfo(coach) {
    $("#createAccount").addClass("hidden");
    $("#contactInfo").removeClass("hidden");
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

function init() {
}

$(document).ready(init);
