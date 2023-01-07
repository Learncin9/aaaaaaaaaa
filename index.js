const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Jthis");
});

app.listen(3000, () => console.log("Server is Running on 3000"));
