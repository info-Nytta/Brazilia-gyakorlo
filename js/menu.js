function menu() {
	let disp=document.getElementById("menulista");
	if (disp.style.display=="block") {
		disp.style.display="none";
		document.getElementById("hambi").innerHTML="&equiv;";
	}
	else {
		disp.style.display="block";
		document.getElementById("hambi").innerHTML="X";
	}
}