

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
	let wd = window.innerWidth;
	if (wd > window.innerHeight) {
		wd = window.innerHeight;
	}
	wd = wd - 120;
	console.log(wd);
	par.style.width = wd + "px";
	let width = ((wd / prop) - 2);
	let height = width;
	let act = 0;
	document.addEventListener('mousedown', (e) => {
		if(e.target.className === "grid-container") {
			e.preventDefault();
		}
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
		gridObj.addEventListener('mousedown', (e)=> {
			act=1;
			e.preventDefault();
			gridObj.classList.add('active');
		})
		gridObj.addEventListener('mouseover', ()=> {
			if (act ===1) {
				gridObj.classList.add('active');
			}
		})
	}
}

function formHandle(e) {
	e.preventDefault();
	let inputField = document.getElementById("prop");
	const inputVal = inputField.value;
	grid(inputVal);
}

grid(16);
let frm = document.querySelector("form");
frm.addEventListener('submit', formHandle);
frm.addEventListener('change', (e) => {
	console.log("changed");
	formHandle(e);
});