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
    {
      roomid: "bikal",
      roomname: "bikalsapit",
    },
  ];
  const message = [
    {
      incomming:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam?",
      outgoing:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam?",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      outgoing: "Lorem ipsum dolor sit amet ",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      outgoing: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur ",
      outgoing: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      outgoing: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      outgoing: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      incomming: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      outgoing: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      incomming:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam?",
      outgoing:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam?",
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
                  <div className="actual-msg">
                    {message.map((msg, index) => (
                      <>
                        <div className="message outgoing">
                          <p>{msg.outgoing}</p>
                        </div>
                        <div className="message incomming">
                          <p>{msg.incomming}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="input-msg-area">
                <input type="text" />
                <button className="send-btn">send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRooms;
