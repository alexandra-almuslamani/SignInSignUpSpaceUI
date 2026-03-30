const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const my_container = document.querySelector(".my-container");

sign_up_btn.addEventListener("click", () => {
	console.log("clicked");
	my_container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	my_container.classList.remove("sign-up-mode");
});