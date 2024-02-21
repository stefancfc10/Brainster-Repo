$(function(){
	
	let countdown;

    function saveToLocalStorage(carNumber, place, raceTime) {
        const Result = {
            place: place,
            time: raceTime,
        };
        localStorage.setItem(`car${carNumber}Place`, place);
        localStorage.setItem(`car${carNumber}Time`, raceTime.toString());
    }

    function time() {
        return Math.floor(Math.random() * (3000 - 1000) + 1000)
    }

    function race(car) {
        const timeFinish = time();
         return new Promise((resolve) => {
            car.animate({ left: $(".track").width() - $("#car_one").width() }, timeFinish, function () {
                $("#flag").css("display", "block");
                $(".track").css("opacity", "0.5");

                const raceTime = timeFinish;
                resolve(raceTime);
            });
        });
    }

    function findPosition(car_one, car_two) {
        if (car_one < car_two) {
            return "First";
        } else if (car_one > car_two) {
            return "Second";
        } else {
            return "Tie";
        }
    }

    function firstResults(container, place, raceTime) {
        const resultItem = $(`<p id="table">Finished in <span id="spanOne">${place}</span> place with a time of <span id="spanTwo">${raceTime} ms</span></p>`);
        container.append(resultItem);
    }

	function StoredResults() {
		const car1Place = localStorage.getItem('car1Place');
		const car1Time = localStorage.getItem('car1Time');
		const car2Place = localStorage.getItem('car2Place');
		const car2Time = localStorage.getItem('car2Time');
	
		if (car1Place && car1Time) {
			const textOne = `<p id="table"><span>Car1</span> Finished in <span style="color: #fff; font-weight:bold" ">${car1Place}</span> place with a time of <span style="color: #fff; font-weight:bold">${car1Time} ms</span></p>`;
			$("#thirdTable").html(textOne);
		}
	
		if (car2Place && car2Time) {
			const textTwo = `<p id="table"><span>Car2</span> Finished in <span style="color: #ba0000; font-weight:bold">${car2Place}</span> place with a time of <span style="color: #ba0000; font-weight:bold">${car2Time} ms</span></p>`;
			$("#fourthTable").html(textTwo);
		}
	}
	
	StoredResults();
	
    async function start() {
        $("#rsRaceBtn").prop("disabled", true)
        $("#timer").text("3");
        $("#timer").css("display", "block");
        countdown = setInterval(function () {
            const count = parseInt($("#timer").text());
            if (count > 1) {
                $("#timer").text(count - 1);
            } else {
                clearInterval(countdown);
                $("#timer").css("display", "none");

                let car1TimePromise = race($("#car_one"), $("#firstTable"));
                let car2TimePromise = race($("#car_two"), $("#secondTable"));

                Promise.all([car1TimePromise, car2TimePromise]).then(([car1Time, car2Time]) => {
                    $("#rsRaceBtn").prop("disabled", false);
                    
                    const place1 = findPosition(car1Time, car2Time);
                    const place2 = findPosition(car2Time, car1Time);

                    firstResults($("#firstTable"), place1, car1Time);
                    firstResults($("#secondTable"), place2, car2Time);

                    saveToLocalStorage("1", place1, car1Time);
                    saveToLocalStorage("2", place2, car2Time);
                });
            }
        }, 1000);
    }

    $("#start").on("click", function () {
        $("#start").prop("disabled", true);
        start();
    })

    $("#rsRaceBtn").on("click", function () {
        $("#start").prop("disabled", false);
        $("#car_one").css("left", "0")
        $("#car_two").css("left", "0")
        $("#flag").css("display", "none")
        $(".track").css("opacity", "1")
    })
});


 

 