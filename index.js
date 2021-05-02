//importing modules
const express = require("express");
const bodyparser = require("body-parser");
const port = 3000

// stores the express module into the app variable!
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

//sends index.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

//this is used to post the data on the specific route
app.post("/", function (req, res) {
	heigh = parseFloat(req.body.Height);
	weigh = parseFloat(req.body.Weight);
	bmi = weigh / (heigh * heigh);

	//number to string format
	bmi = bmi.toFixed();

	req_name = req.body.Name;

	// CONDITION FOR BMI
	if (bmi < 19) {
		res.send("<h2>Hai! " + req_name +
				" BMI kamu : " + bmi +
				"<centre><h2>Berat badanmu kurang!");
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h2>Hai! " + req_name +
				" BMI kamu : " + bmi +
				"<centre><h2>Berat badanmu normal!");
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h2>Hai! " + req_name +
				" BMI kamu : " + bmi +
				"<centre><h2>Berat badanmu berlebih (kecenderungan obesitas)!");
	} else {
		res.send("<h2>Hai! " + req_name +
				" BMI kamu : " + bmi +
				"<centre><h2>Berat badanmu obesitas!");
	}
});

//this is used to listen a specific port!
app.listen(port, () => {
  console.log(`server is okay. http://localhost:${port}`)
})