import { Link } from "react-router-dom";

const ArtCard = ({ data }) => {
  const { title, objectDate, artistDisplayName, primaryImageSmall, objectID } =
    data;
  return (
    <article className="gallery-main__article">
      <Link to={`/art/${objectID}`}>
        <header>
          <h2>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</h2>
        </header>
        <img src={`${primaryImageSmall}`} alt="" />
        <div className="artist-info">
          {artistDisplayName ? (
            <p>{artistDisplayName}</p>
          ) : (
            <p>Artist not listed</p>
          )}

          {objectDate ? <p>Date: {objectDate}</p> : <p>Date not listed</p>}
        </div>
      </Link>
    </article>
  );
};

export default ArtCard;
