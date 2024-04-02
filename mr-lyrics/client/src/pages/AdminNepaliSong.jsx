const AdminNepaliSong = () => {
  return (
    <>
      <section>
        <div>
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
        <div>
          <h1>list of songs go here</h1>
        </div>
      </section>
    </>
  );
};

export default AdminNepaliSong;
