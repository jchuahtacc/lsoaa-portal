
function writeCoach(coachData)
{
	console.log(coachData);
	var userId = "23456";
	var reference = firebase.database().ref('coaches').child(userId);
	reference.update(coachData);

	
}

function ReadCoachInfo(userId, callback)
{
	var reference = firebase.database().ref('coaches').child(userId);
	reference.once('value')
    .then(
        function(snapshot) {
            callback(snapshot.val());
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );
}


coachData = {"name": "Bob", "email": "bob@bob.com", "cellNumber": "1234567890", "schoolName": "FallField Elementary", "address": "1234 school lane"};

makeCoach(coachData);
getCoachInfo("23456",function(data) {
	console.log("coach info", data);
});