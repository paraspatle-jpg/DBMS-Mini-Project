import pool from "./../index.js";
class WebSockets {
  users = [];
  connection(client) {
    // event fired when the chat room is disconnected
    // add identity of user mapped to the socket id
    client.on("identity", (userId) => {
      console.log(userId);
      if (this.users === undefined) {
        this.users = [
          {
            socket_id: client.id,
            user_id: userId.user_id,
          },
        ];
      } else {
        this.users.push({
          socket_id: client.id,
          user_id: userId.user_id,
        });
      }
    });
    // subscribe person to chat & other user as well
    client.on("subscribe", async (room) => {
      client.join(room.room);
      console.log(room.room);
      global.io.to(room.room).emit("response", "hihihuhuh");
    });
    // mute a chat room
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
    client.on("new message", async (room) => {
      const room_id = room.room;
      const messagePayload = room.message;
      const roomOrNot = room.roomOrNot;
      console.log(room_id);
      const currentLoggedUser = room.user_id;

      const values = [room_id, messagePayload, currentLoggedUser];

      var post;
      if (roomOrNot) {
        post = await pool.query(
          `insert into chatMessage (room_id,message,sender_id) values($1,$2,$3) returning *;`,
          values
        );
      } else {
        post = await pool.query(
          `insert into chatMessage (chat_id,message,sender_id) values($1,$2,$3) returning *;`,
          values
        );
      }
      const sender_id = [post.rows[0].sender_id];

      const sender = await pool.query(
        `select name,avatar from user_info where user_id = $1`,
        sender_id
      );

      // console.log(await global.io.sockets.to(room_id).fetchSockets());
      global.io
        .to(room_id)
        .emit("new message", {
          message: {
            message: post.rows[0].message,
            name: sender.rows[0].name,
            avatar: sender.rows[0].avatar,
          },
        });
    });
  }
}

export default new WebSockets();
