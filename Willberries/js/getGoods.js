(() => {
	const links = document.querySelectorAll(".navigation-link");

	const getData = () => {
		fetch("https://willberries-b6c2e-default-rtdb.firebaseio.com/db.json")
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("goods", JSON.stringify(data));
			});
	};

	links.forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			getData();
		});
	});
})();
