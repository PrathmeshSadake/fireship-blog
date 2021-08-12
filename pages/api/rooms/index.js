import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  createNewRoom,
  getAllRooms,
  getRoomById,
} from "../../../controllers/roomControllers";

const handler = nc();
dbConnect();

handler.get(getAllRooms);
handler.post(createNewRoom);
handler.get(getRoomById);

export default handler;
