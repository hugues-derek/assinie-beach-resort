import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;

	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</>
	);
}

export default withRoomConsumer(RoomContainer);
