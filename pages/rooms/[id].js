import Layout from "../../components/layout/Layout";
import RoomDetails from "../../components/room/roomDetails";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);