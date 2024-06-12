import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option>Adventure</option>
            <option value={"comedy"}>Comedy</option>
            <option value={"crime"}>Crime</option>
            <option value={"fantasy"}>Fantasy</option>
            <option value={"historical"}>Historical</option>
            <option value={"comedy"}>Comedy</option>
            <option value={"horror"}>Horror</option>
            <option value={"romance"}>Romance</option>
            <option value={"sci-fi"}>Sci-fi</option>
            <option value={"thriller"}>Thriller</option>
            <option value={"western"}>Western</option>
            <option value={"animation"}>Animation</option>
            <option value={"documentary"}>Documentary</option>
            <option value={"drama"}>Drama</option>
            <option value={"drama"}>Drama</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://i.ytimg.com/vi/sF9xYtouZjY/maxresdefault.jpg"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempore
          sunt autem, laborum saepe ipsa aperiam magni eveniet quod ratione?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
