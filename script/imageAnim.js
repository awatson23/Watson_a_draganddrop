(() => {
	console.log('fired');
	//1.variable 2.function 3.event
	//window.addEventListener("load", changeHeadline);

	function changeHeadline() {
		document.querySelector("h1").textContent = "Hey There from JS!";
	}

	const theButton = document.querySelector("#buttonHolder img")

	theButton.addEventListener("click", changeHeadline)

})();
