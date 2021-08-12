import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  deleteRoomById,
  getRoomById,
  updateRoomById,
} from "../../../controllers/roomControllers";

const handler = nc();
dbConnect();

handler.get(getRoomById);
handler.put(updateRoomById);
handler.delete(deleteRoomById);

export default handler;
