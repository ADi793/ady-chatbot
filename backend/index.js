require("dotenv").config();
const health = require("./routes");
const user = require("./routes/user");
const chatQuestionHandler = require("./socket/handlers/chatQuestionHandler");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

// connecting to database
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to the db...");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/", health);
app.use("/api/user", user);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// socket setup
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

let channel = null;
// io.use((socket, next) => {
//   // if (isValid(socket.request)) {
//   //   next();
//   // } else {
//   //   next(new Error("invalid"));
//   // }
//   const token = socket.handshake.auth.token;
//   console.log("token", token);
//   next();
// });
io.on("connection", (socket) => {
  socket.on("join", (roomId) => {
    console.log("Joined on the channel", roomId);
    channel = roomId;
    socket.join(roomId);
    io.to(channel).emit("greeting", `Hey there in the ${channel}`);
  });

  socket.on("chat_question", (request) => chatQuestionHandler(request, io));
});
