import { useEffect, useState } from "react";
import "./AdminNepaliSong.css";

const AdminNepaliSong = () => {
  const URL = "http://localhost:9999/nepalisong";
  const [nepaliSongs, setNepaliSongs] = useState({
    nepalisongname: "",
    nepalisingername: "",
    nepalimusiclabel: "",
    nepalisonglanguage: "",
    nepalilyrics: "",
    nepalisongimage: null,
    nepalisonglink: "",
    nepalisongdescription: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setNepaliSongs({
      ...nepaliSongs,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setNepaliSongs({
        ...nepaliSongs,
        nepalisongimage: e.target.files[0],
      });
    }
  };

  //handle form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(nepaliSongs).forEach((key) => {
      formData.append(key, nepaliSongs[key]);
    });
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div className="adminAddContainer">
          <h1>Add Nepali Songs</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="songname">Song name</label>
              <input
                type="text"
                name="nepalisongname"
                id="nepalisongname"
                required
                value={nepaliSongs.nepalisongname}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="singername">singer name</label>
              <input
                type="text"
                name="nepalisingername"
                id="nepalisingername"
                required
                value={nepaliSongs.nepalisingername}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="musiclabel">music label</label>
              <input
                type="text"
                name="nepalimusiclabel"
                id="nepalimusiclabel"
                required
                value={nepaliSongs.nepalimusiclabel}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="language">language</label>
              <input
                type="text"
                name="nepalisonglanguage"
                id="nepalisonglanguage"
                required
                value={nepaliSongs.nepalisonglanguage}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="">Lyrics</label>
              <textarea
                name="nepalilyrics"
                id="nepalilyrics"
                cols="30"
                rows="10"
                value={nepaliSongs.nepalilyrics}
                onChange={handleInput}
              ></textarea>
            </div>
            <div>
              <label htmlFor="">Image</label>
              <input
                type="file"
                name="nepalisongimage"
                id="nepalisongimage"
                required
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label htmlFor="">Embedded link</label>
              <input
                type="text"
                name="nepalisonglink"
                id="nepalisonglink"
                required
                value={nepaliSongs.nepalisonglink}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="">Description</label>
              <input
                type="text"
                name="nepalisongdescription"
                id="nepalisongdescription"
                required
                value={nepaliSongs.nepalisongdescription}
                onChange={handleInput}
              />
            </div>
            <div className="submitBtn">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="listOfSongs">
          <h1>Nepali Songs List</h1>
          <div className="listOfSongsHolder">ALL THE SONGS COMES HERE</div>
        </div>
      </section>
    </>
  );
};

export default AdminNepaliSong;
