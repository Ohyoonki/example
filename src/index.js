const express = require("express");
const app = express();
const user_route = require("./route/users");
const board_route  = require("./route/boards");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", user_route);
app.use("/boards", board_route);

app.listen(3000);

app.get("/", (req, res) => {
    res.send("test");
});