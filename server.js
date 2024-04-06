import express from "express"

const app = express();

app.get("/", (req, res) => {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

app.get("/chocolate", function (req, res) {
    let amountQuery = req.query.amount;
  res.send("Gimme " + amountQuery + " chocolates!");
});
app.get("/node", function (req, res) {
  res.send("Why have you typed node in endpoint?");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Code Your Future Server prep");
});

app.get("/multiply", (req, res) => {
    let value1Query = req.query.value1;
    let value2Query = req.query.value2;
    res.send(`${value1Query * value2Query}`);
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

