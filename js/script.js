function madLib()
{
	var verb1 = document.getElementById("verb1").value;
	var noun1 = document.getElementById("noun1").value;
	var verb2 = document.getElementById("verb2").value;
	var adjective1 = document.getElementById("adjective1").value;
	var adjective2 = document.getElementById("adjective2").value;
	var noun2 = document.getElementById("noun2").value;
	var sentence = "The " + adjective1 + " " + noun1 + " " +verb1 + " around the house in terror. Trina " + verb2 + " in astonishment at the site. The " + noun1 + " looked at Trina, smiled,and said 'Hello.' " + " Across the room a " + adjective2 + " " + noun2 + " noticed their interaction and decided to write a poem about it.";
	var sentence2 = "Sorry, please fill in all fields.";
	if (verb1 && verb2 && noun1 && noun2 && adjective1 && adjective2){
		document.getElementById("content").innerText = sentence;
	}
	else {
		document.getElementById("content").innerText = sentence2;
	}
}
function removeContent()
{
	var remove = ""; 
	document.getElementById("content").innerText = remove;	
}