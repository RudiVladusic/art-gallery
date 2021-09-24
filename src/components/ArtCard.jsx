import { Link } from "react-router-dom";

const ArtCard = ({ data }) => {
  const { objectDate, primaryImageSmall, objectID } = data;
  return (
    <Link to={`/art/${objectID}`}>
      <article className="gallery-main__article">
        <img src={`${primaryImageSmall}`} alt="" />
        <div className="artist-info">
          {objectDate.length > 20 ? (
            <p>{objectDate.slice(0, 20)}...</p>
          ) : (
            <p>{objectDate || "Not listed"}</p>
          )}
        </div>
        <div className="gallery-main__article btn-default">Details</div>
      </article>
    </Link>
  );
};

export default ArtCard;
