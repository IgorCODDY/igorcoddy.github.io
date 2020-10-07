menu.onclick = function myfun() {
	var x = document.getElementById("mynav");

	if(x.className === "navy") {
		x.className += " responsive";
	} else {
		x.className = "navy"
	}
}