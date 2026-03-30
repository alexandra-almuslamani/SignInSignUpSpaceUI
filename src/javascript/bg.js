const pi = Math.PI;

// functions for sin, cos
function sin(angle) { return Math.sin(angle); }
function cos(angle) { return Math.cos(angle); }

let sky, center;

// create a star element
function dot(i) {
	const size = Math.round(Math.random() + 1);
	const root = document.createElement('span');
	root.style.top = center.y + 'px';
	root.style.left = center.x + 'px';
	root.classList.add('star', `size-${size}`);

	// random duration for animation
	const t = Math.floor(Math.random() * 40000) + 5000;
	const angle = i - (i % 4);

	// random fade
	const fadeNum = Math.floor(Math.random() * 10) + 1;

	// calculate x/y translation
	const rad = 2 * pi * angle / 360;
	const x = 80 * cos(rad);
	const y = 80 * sin(rad);

	root.style.animation = `
      move${i} ${t}ms linear infinite,
      fade${fadeNum} ${t}ms linear infinite
    `;

	// generate keyframes dynamically
	const style = document.createElement('style');
	style.innerHTML = `
      @keyframes move${i} {
        100% { transform: translate(${x}vw, ${y}vh); }
      }
    `;
	document.head.appendChild(style);

	return root;
}

// clear all stars
function clear() {
	sky.innerHTML = '';
}

// initialize sky
function init() {
	sky = document.querySelector('#sky');
	center = { x: sky.clientWidth / 2, y: sky.clientHeight / 2 };
	clear();
	for (let i = 0; i < 360; i++) {
		sky.appendChild(dot(i));
	}
}

window.onload = init;