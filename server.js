const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express()

const port = process.env.PORT || 5000;

// Whenever we need to accept data from client to server, we need to use body parser to parse the data that we are recieving from the client - for that we make use of middleware (Express)
app.use(express.json())
// Here app.use is middleware
app.use("/api/contacts",require("./routes/contactRoute"))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


