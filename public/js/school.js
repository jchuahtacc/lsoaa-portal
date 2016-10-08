
function  writeSchoolMentor(person){
    console.log(person);
    for (var index in person.school) {
	var school_name = person.school[index]; 
	var school_mentor = person.name;
	var position = "Mentors";
	var reference = firebase.database().ref('schools').child(school_name).child(position).child(school_mentor);
	reference.update(person);
    }
}

function writeSchoolCoach(person){
    console.log(person);
    var school_name = person.school;
    var school_coach = person.name;
    var position = "Coaches";
    var reference =  firebase.database().ref('schools').child(school_name).child(position).child(school_coach);
    reference.update(person);
    
}

function readSchoolMentors(school_name,callback){
    
    var reference = firebase.database().ref('schools').child(school_name).child("Mentors");
    
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





//school_data = {"name":"UT"};

//makeSchool(school_data);

// var school_name = school_data.name;





$(document).ready(blah);
