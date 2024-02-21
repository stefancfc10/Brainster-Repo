$(function () {
	// write your code here
  	fetch("https://challenges.brainster.tech/ajax_data/data.json")
	  .then((response) => response.json())
	  .then((data) => {

		console.log(data);
		
		$(document).ready(function () {
			data.products.forEach((product) => {
			  const div = document.createElement("div");
			  div.classList.add("col-4");
	
			  div.innerHTML = `
			  <div class="card">

			  <img src="./img/${product.image}.png" class="card-img-top" alt="...">
			  <div class="card_body">
				<h4 class="card-title">${product.name}</h4>
				<p class="card-text">${product.price} <b>$</b></p>
			  </div>
			</div>`
			  ;
			  main.appendChild(div);
			});
		  });
  
		function createCard(product) {
		  const div = document.createElement("div");
		  div.classList.add("col-4");
  
		  div.innerHTML = `
						  <div class="card">
							  <img src="./img/${product.image}.png" class="card-img-top" alt="...">
							  <div class="card_body">
								  <h4 class="card-title">${product.name}</h4>
								  <p class="card-text">${product.price} <b>$</b></p>
							  </div>
						  </div>
					  `;
  
		  return div;
		}
  
		const main = document.querySelector(".bikes");
  
		const filters = [
		  $("#showAll"),
		  $("#male"),
		  $("#female"),
		  $("#leGrand"),
		  $("#kross"),
		  $("#explorer"),
		  $("#visitor"),
		  $("#pony"),
		  $("#force"),
		  $("#ebikes"),
		  $("#ideal"),
		];
  
		function removeActive() {
		  filters.forEach((el) => {
			el.removeClass("active");
		  });
		}
  
		removeActive();
  
		function filterSetup(filter) {

		  main.innerHTML = "";
		  removeActive();
		  $(filter).addClass("active");

		}

		$("#showAll").on("click", function () {
		  filterSetup($("#showAll"));
  
		  data.products.forEach((product) => {
			const card = createCard(product);
			main.appendChild(card);
		  });
		});
  
		$("#male").on("click", function () {
		  filterSetup($("#male"));
  
		  data.products
			.filter((product) => {
			  return product.gender === "MALE";
			})
			.forEach((product) => {
			  const card = createCard(product);
			  main.appendChild(card);
			});
		});
  
		$("#female").on("click", function () {
		  filterSetup($("female"));
  
		  data.products
			.filter((product) => {
			  return product.gender === "FEMALE";
			})
			.forEach((product) => {
			  const card = createCard(product);
			  main.appendChild(card);
			});
		});
		
		$("#leGrand").on("click", function () {
			filterSetup($("leGrand"));
	
			data.products
			  .filter((product) => {
				return product.brand === "LE GRAND BIKES";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#kross").on("click", function () {
			filterSetup($("kross"));
	
			data.products
			  .filter((product) => {
				return product.brand === "KROSS";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#explorer").on("click", function () {
			filterSetup($("explorer"));
	
			data.products
			  .filter((product) => {
				return product.brand === "EXPLORER";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#visitor").on("click", function () {
			filterSetup($("visitor"));
	
			data.products
			  .filter((product) => {
				return product.brand === "VISITOR";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#pony").on("click", function () {
			filterSetup($("pony"));
	
			data.products
			  .filter((product) => {
				return product.brand === "PONY";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#force").on("click", function () {
			filterSetup($("force"));
	
			data.products
			  .filter((product) => {
				return product.brand === "FORCE";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#ebikes").on("click", function () {
			filterSetup($("ebikes"));
	
			data.products
			  .filter((product) => {
				return product.brand === "E-BIKES";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });

		  $("#ideal").on("click", function () {
			filterSetup($("ideal"));
	
			data.products
			  .filter((product) => {
				return product.brand === "IDEAL";
			  })
			  .forEach((product) => {
				const card = createCard(product);
				main.appendChild(card);
			  });
		  });



	  })

	  
	  .catch((error) => console.error("Error fetching data:", error));
  });