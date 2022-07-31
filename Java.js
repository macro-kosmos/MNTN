;(function () {
	let throttle = function (type, name, obj) {
		obj = obj || window
		let running = false
		let func = function () {
			if (running) return
			running = true
			requestAnimationFrame(function () {
				obj.dispatchEvent(new CustomEvent(name))
				running = false
			})
		}

		obj.addEventListener(type, func)
	}

	throttle("resize", "optimizedResize")
})()

window.addEventListener("optimizedResize", function () {
	moveImg()
})

function moveImg() {
	let img = document.querySelectorAll("#iconNumber")
	let windowWidth = document.documentElement.offsetWidth
	let content = document.querySelector(".content")
	let xCoord = content.getBoundingClientRect().x
	if (windowWidth < 1615) {
		for (let element of img) {
			element.style.left = -xCoord + "px"
		}
	}
}

moveImg()
