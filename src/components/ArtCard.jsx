import { Link } from "react-router-dom";

const ArtCard = ({ data }) => {
  const { title, objectDate, primaryImageSmall, objectID } = data;
  return (
    <article className="gallery-main__article">
      <header>
        <h2>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</h2>
      </header>
      <img src={`${primaryImageSmall}`} alt="" />
      <div className="artist-info">
        {objectDate.length > 20 ? (
          <p>{objectDate.slice(0, 20)}...</p>
        ) : (
          <p>{objectDate || "Not listed"}</p>
        )}
      </div>

      <Link to={`/art/${objectID}`} className="rudi">
        Details
      </Link>
    </article>
  );
};

export default ArtCard;
