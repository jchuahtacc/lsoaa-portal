function blah() {
    console.log("Hello world");

//var userId = firebase.auth().currentUser.uid;

    console.log("user id",firebase.auth().currentUser);
}

function  writeSchool(school_data){
    console.log(school_data);
    var school_name = school_data.name;
    var reference = firebase.database().ref('schools').child(school_name);
    reference.update(school_data);
}



school_data = {"name":"UT"};

makeSchool(school_data);

var school_name = school_data.name;

var reference = firebase.database().ref('schools').child(school_name);
reference.once('value').then(
    function(snapshot){
	console.log("school", snapshot.val());
    }
).catch(
    function(error){
	console.log("error retrieving data", error);
    }
);
    

// from whiteboard

function getSchoolName(userId,callback){
    var reference = firebase.database().ref('schools').child(userId);
    
    reference.once('value').then (
	function(snapshot) {
	    callback(snapshot.val());
	}
    ).catch(
	function(error){
	    console.log("error retrieving data!",error);
	}
    );
}




$(document).ready(blah);
