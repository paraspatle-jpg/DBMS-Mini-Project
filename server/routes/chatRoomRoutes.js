import express from 'express';
import chatRoom from '../controllers/chatRoomController.js';

const router = express.Router();

router
  .get('/', chatRoom.getRecentConversation)
  .get('/:room_id', chatRoom.getConversationByRoomId)
  .post('/initiate', chatRoom.initiate)
  .post('/:roomId/message', chatRoom.postMessage)
  .put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

export default router;