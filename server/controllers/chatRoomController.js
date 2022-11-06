import pool from "./../index.js";

export default {
  initiate: async (req, res) => {
    try {
      const { user_id } = req.body;
      const values = [req.user.user_id, user_id];

      const exists = await pool.query(
        "select * from chat where (user1=$1 and user2=$2) or (user1=$2 and user2=$1)",
        values
      );

      if (exists.rowCount !== 0) {
        return res.status(200).json({ success: true, exists: exists.rows });
      }
      const chatRoom = await pool.query(
        "insert into chat(user1,user2) values($1,$2) returning *",
        values
      );
      return res.status(200).json({ success: true, chatRoom: chatRoom.rows });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: err });
    }
  },
  initiateRoom: async (req, res) => {
    try {
      const { user_ids, room_name } = req.body;
      const chatInitiator = req.user.user_id;
      const allUserIds = [...user_ids, chatInitiator];

      const values = [chatInitiator, room_name];

      const chatRoom = await pool.query(
        "insert into chatRoom(chat_admin,room_name) values($1,$2) returning *",
        values
      );
      console.log(chatRoom.rows);
      const room_id = chatRoom.rows[0].room_id;
      allUserIds.map(async (user_id) => {
        console.log(user_id);
        const values1 = [user_id, room_id];
        await pool.query(
          "insert into roomParticipants(user_id,room_id) values($1,$2);",
          values1
        );
      });
      return res.status(200).json({ success: true, chatRoom: chatRoom.rows });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  getRecentConversation: async (req, res) => {
    try {
      const currentLoggedUser = req.user.user_id;
      const values = [currentLoggedUser];

      let rooms = await pool.query(
        "select * from roomParticipants rp,chatRoom cr where rp.user_id = $1 and cr.room_id = rp.room_id",
        values
      );
      let chats = await pool.query(
        "select * from chat c,user_info u where ((c.user1 = $1 and u.user_id = c.user2) or (c.user2= $1 and u.user_id = c.user1))",
        values
      );
      // let chats = await pool.query(
      //   "select * from chat where user1=$1 or user2=$1",
      //   values
      // );

      // chats.rows.map((row)=>{
      //   if(row.user1 === currentLoggedUser){
          
      //   }
      // })
      rooms = rooms.rows;
      chats = chats.rows;
      console.log(chats.rows);

      return res.status(200).json({ success: true, rooms, chats });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error });
    }
  },
  getConversationByRoomId: async (req, res) => {
    try {
      const { room_id } = req.params;

      var conversation;
      const values = [typeof room_id === 'string' ? parseInt(room_id):room_id];
      if (room_id >= 10000) {
        conversation = await pool.query(
          "select c.message,u.name,u.avatar,c.messagetime from chatMessage c,user_info u where c.chat_id=$1 and c.sender_id=u.user_id order by c.messagetime desc",
          values
        );
      } else {
        conversation = await pool.query(
          "select c.message,u.name,u.avatar,c.messagetime from chatMessage c,user_info u where c.room_id=$1 and c.sender_id=u.user_id order by c.messagetime desc",
          values
        );
      }
      return res.status(200).json({
        success: true,
        conversation: conversation.rows,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
  },
};
