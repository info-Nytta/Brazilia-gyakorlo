function menu() {
	let x = document.getElementById("menulist");
	if (x.style.display == "block") {
		x.style.display = "none";
		document.getElementById("hamburger").innerHTML="&equiv;";
	} 
	else {
		x.style.display = "block";
		document.getElementById("hamburger").innerHTML="X";
	}
}