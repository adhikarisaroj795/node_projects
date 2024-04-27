const { Server } = require("socket.io");
const app = require("./app");
const ConnectDb = require("./config/db.config");

ConnectDb();
const server = app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(
    `Server started on ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://127.0.1:3000"],
    credentials: true,
  },
});

const onlineUsers = new Map();

io.on("connection", (socket) => {
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    console.log("messagalkfnajkajbkf", data);
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.message);
    }
  });
});

process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
  console.error(`Shutting down server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
