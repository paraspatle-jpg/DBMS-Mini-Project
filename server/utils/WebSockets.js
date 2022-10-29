class WebSockets {
  users = [];
  connection(client) {
    // event fired when the chat room is disconnected
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id);
    });
    // add identity of user mapped to the socket id
    client.on("identity", (userId) => {
      console.log(userId);
      if (this.users === undefined) {
        this.users = [
          {
            socket_id: client.id,
            user_id: userId,
          },
        ];
      } else {
        this.users.push({
          socket_id: client.id,
          user_id: userId,
        });
      }
    });
    // subscribe person to chat & other user as well
    client.on("subscribe", (room, otherUserId = "") => {
      const userSockets = this.users.filter(
        (user) => user.user_id === otherUserId
      );
      userSockets.map((userInfo) => {
        const socketConn = global.io.sockets.connected(userInfo.socketId);
        if (socketConn) {
          socketConn.join(room);
        }
      });
      client.join(room);
    });
    // mute a chat room
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
    client.on("getinfo", () => {
      client.emit("response", this.users);
    });
  }
}

export default new WebSockets();
