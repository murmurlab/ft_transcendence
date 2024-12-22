const	mode = document.getElementById("mode")
const	play = document.getElementById("play1")

const	overlay = document.getElementById("overlay")
const	header = document.getElementById("xxl-header")
const	account = document.getElementById("account")
const	game = document.getElementById("game")
const	index = document.getElementById("index")
const	present = document.getElementById("present")

account.style.display = "none"

play.addEventListener("click", e=>{

	if (account.style.display == "none") {
		account.style.display = "block"
		header.style.position = "sticky"
		header.style.top = "1vmax"
		present.style.filter = "blur(0.25vmax)"
		overlay.style.display = "block"
	} else {
		account.style.display = "none"
		header.style.position = "relative"
		header.style.top = 0
		present.style.filter = "blur(0)"
		overlay.style.display = "none"
	}
	
})
mode.addEventListener("change", e=>{
	console.log(e);
	if (e.target.checked) {
		game.style.display = "block"
		index.style.display = "none"
	} else {
		game.style.display = "none"
		index.style.display = "block"
	}
})
