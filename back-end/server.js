const express = require("express");
const Controller = require("./controller");

const app = express();

// app.get("/test", (req, res) => res.send({ msg: "Test page works." }));

app.get("/test", (req, res) => res.send({ msg: "Test page works." }));

app.get("/all", Controller.getAllData);
app.get("/children-info/:id", Controller.getChildrenData);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
