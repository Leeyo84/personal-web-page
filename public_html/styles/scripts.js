/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

//changes background color on scroll
function changeColor(){
	if(window.pageYOffset < 1000){
		document.body.style.backgroundColor = '#0073AA'
	}
	if(window.pageYOffset < 2000 && window.pageYOffset > 1000){
		document.body.style.backgroundColor = '#ffffff'
	}
	if(window.pageYOffset < 3000 && window.pageYOffset > 2000){
		document.body.style.backgroundColor = '#ffffff'
	}
	if(window.pageYOffset < 4000 && window.pageYOffset > 3000){
		document.body.style.backgroundColor = '#0073AA'
	}
	// if(window.pageYOffset < 5000 && window.pageYOffset > 4000){
	// 	document.body.style.backgroundColor = '#0073AA'
	// }
	// if(window.pageYOffset > 5000){
	// 	document.body.style.backgroundColor = '#ffffff'
	// }
}
