import React from "react";
import "./Myrooms.css";

const MyRooms = () => {
  const rooms = [
    {
      roomid: "#s12ty",
      roomname: "jot-ko-room1",
    },
    {
      roomid: "#r34ty",
      roomname: "jot-ko-room2",
    },
    {
      roomid: "#u56ty",
      roomname: "jot-ko-room3",
    },
    {
      roomid: "#p78ty",
      roomname: "jot-ko-room4",
    },
    {
      roomid: "#v90ty",
      roomname: "jot-ko-room5",
    },
  ];
  return (
    <section className="section ">
      <div className="container myroom-bg">
        <div className="my-room-sec-holder">
          <div className="room-available-area">
            {rooms.map((room, index) => (
              <div className="available-room" key={room.roomid}>
                <div className="room-card">
                  <label htmlFor="roomid">RoomId</label>
                  <h3>{room.roomid}</h3>

                  <label htmlFor="roomname">RoomName</label>
                  <h3>{room.roomname}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="availabe-room-chat-area">
            <div className="chatarea">
              <div className="message-area">
                <div className="display-msg-area">
                  <div className="msg-heading">
                    <span>#78skjf</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, voluptatem est adipisci quae atque dolore
                    reprehenderit! Non cum consequuntur aut expedita aliquam
                    delectus quibusdam accusamus sed aliquid culpa, at nemo?
                  </p>
                </div>
              </div>
              <div className="input-msg-area">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRooms;
