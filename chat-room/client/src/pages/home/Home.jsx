import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showEnterRoom, setShowEnterRoom] = useState(false);

  const toggleCreateRoom = () => {
    setShowCreateRoom(!showCreateRoom);
    setShowEnterRoom(false);
  };

  const toggleEnterRoom = () => {
    setShowEnterRoom(!showEnterRoom);
    setShowCreateRoom(false);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="home__container flex">
            <div className="create-room">
              <span className="gbl-btn" onClick={toggleCreateRoom}>
                Create Room
              </span>
              {showCreateRoom ? (
                <form>
                  <div className="form-holder create-room-holder">
                    <div className="form-group">
                      <label htmlFor="RoomId">Room Id</label>
                      <input type="text" id="roomid" name="roomid" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Roomname">Room name</label>
                      <input type="text" id="roomname" name="roomname" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Room Id">Room Password</label>
                      <input
                        type="text"
                        id="roompassword"
                        name="roompassword"
                      />
                    </div>
                    <div>
                      <button type="submit" className="tiny-btn">
                        Enter
                      </button>
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
            <div className="enter-room">
              <span className="gbl-btn" onClick={toggleEnterRoom}>
                Enter Room
              </span>
              {showEnterRoom ? (
                <form>
                  <div className="form-holder enter-room-holder">
                    <div className="form-group">
                      <label htmlFor="RoomId">Room Id</label>
                      <input type="text" id="roomid" name="roomid" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Room Id">Room Password</label>
                      <input
                        type="text"
                        id="roompassword"
                        name="roompassword"
                      />
                    </div>
                    <div>
                      <button type="submit" className="tiny-btn">
                        Enter
                      </button>
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
