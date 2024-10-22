// import our node modules
import express from "express";
import cors from "cors";

// setup the server
const app = express();
app.use(cors()); // allow other servers to access the API

app.get("/message", function (request, response) {
  response.json("This is the root route");
});

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
