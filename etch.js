

function grid(prop) {
	if (prop > 100) {
		console.log("error");
		return;
	}
	let par = document.querySelector(".grid-container")
	let children = document.querySelectorAll(".grid-container .grid-obj");
	if (children) {
		children.forEach(child => {
			par.removeChild(child);
		});
	}
	let width = (928 / prop) - 2;
	let height = width;
	let act = 0;
	document.addEventListener('mousedown', () => {
		act = 1;
	});
	document.addEventListener('mouseup', () => {
		act = 0;
	});
	for(let i = 0; i<(prop * prop); i++) {
		let gridObj = document.createElement("div");
		gridObj.classList.add("grid-obj");
		gridObj.style.width = width + "px";
		gridObj.style.height = height + "px";
		par.appendChild(gridObj);
		gridObj.addEventListener('mouseover', ()=> {
			if (act ===1) {
				gridObj.classList.add('active');
			}
		})
	}
}

grid(16);
let frm = document.querySelector("form");
frm.addEventListener('submit', e => {
	e.preventDefault();
	const inputEl = e.target.elements.prop;
	const inputVal = inputEl.value;
	grid(inputVal);
});