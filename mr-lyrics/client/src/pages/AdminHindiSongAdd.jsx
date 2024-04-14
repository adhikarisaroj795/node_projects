import React from "react";

const AdminHindiSongAdd = () => {
  return (
    <>
      <section>
        <div className="adminAddContainer">
          <h1>Add Hindi Songs</h1>
          <form action="">
            <div>
              <label htmlFor="songname">Song name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="singername">singer name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="musiclabel">music label</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="language">language</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Lyrics</label>
              <textarea name="lyrics" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label htmlFor="">Image</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Embedded link</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Description</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="listOfSongs">
          <h1>Hindi Songs List</h1>
          <div className="listOfSongsHolder">ALL THE SONGS COMES HERE</div>
        </div>
      </section>
    </>
  );
};

export default AdminHindiSongAdd;
