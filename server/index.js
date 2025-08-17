const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000","http://192.168.25.96:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message_from_client", (msg) => {
    console.log("Message received:", msg);

    const newMsg = {
      ...msg,
      isSent: false,
      timestamp: Date.now(),
    };

    socket.broadcast.emit("message", newMsg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
