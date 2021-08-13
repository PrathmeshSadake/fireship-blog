import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  deleteRoomById,
  getRoomById,
  updateRoomById,
} from "../../../controllers/roomControllers";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getRoomById);
handler.put(updateRoomById);
handler.delete(deleteRoomById);

export default handler;
