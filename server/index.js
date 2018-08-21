const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/message_controller.js");
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(_dirname + '/../public/build/'));

const messageBaseURL = "/api/messages";
app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.post("/api/messages", mc.create);
app.delete("/api/messages/:id", mc.delete);

app.listen(port, () => {
  console.log("listening on port: " + port);
});
