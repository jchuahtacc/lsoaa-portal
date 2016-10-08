
function writeCoach(userId, coachData)
{
	var reference = firebase.database().ref('coaches').child(userId);
	reference.update(coachData);
}

function readCoach(userId, callback)
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