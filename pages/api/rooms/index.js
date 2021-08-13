import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  createNewRoom,
  getAllRooms,
  getRoomById,
} from "../../../controllers/roomControllers";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);
handler.post(createNewRoom);
handler.get(getRoomById);

export default handler;
