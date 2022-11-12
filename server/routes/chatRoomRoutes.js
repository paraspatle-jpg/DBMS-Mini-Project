import express from 'express';
import chatRoom from '../controllers/chatRoomController.js';
import { auth } from "../middlewares/auth.js";


const router = express.Router();

router
  .get('/',auth, chatRoom.getRecentConversation)
  .get('/:room_id', chatRoom.getConversationByRoomId)
  .post('/initiate',auth, chatRoom.initiate)
  .post('/initiateRoom',auth, chatRoom.initiateRoom)
  // .post('/:room_id/message',auth, chatRoom.postMessage)

export default router;