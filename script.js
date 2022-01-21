let dollarWrapper = document.getElementById("dollar-wrapper");
let dollar = document.getElementById("dollar");
let isAnimOne = true;

setInterval(() => {
	console.log(isAnimOne);
	if (isAnimOne) {
		isAnimOne = !isAnimOne;
		dollarWrapper.classList.add("dollar-wrapper-anim2");
		dollar.classList.add("dollar-anim2");
		// dollarWrapper.classList.remove("dollar-wrapper-anim1");
		// dollar.classList.remove("dollar-anim1");
	} else {
		isAnimOne = !isAnimOne;
		dollarWrapper.classList.remove("dollar-wrapper-anim1");
		dollar.classList.remove("dollar-anim1");
		// dollarWrapper.classList.remove("dollar-wrapper-anim2");
		// dollar.classList.remove("dollar-anim2");
		// dollarWrapper.classList.add("dollar-wrapper-anim1");
		// dollar.classList.add("dollar-anim1");
	}
}, 5000);
