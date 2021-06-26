import { Link } from "react-router-dom";

const GalleryContainer = ({ initialData }) => {
  return (
    <section className="gallery-main__container">
      {console.log(initialData)}
      {initialData.map((data) => {
        const {
          title,
          creditLine,
          objectID,
          artistDisplayName,
          primaryImageSmall,
        } = data;
        return (
          <article className="gallery-main__article" key={objectID}>
            <Link to={`/art/${objectID}`}>
              <header>
                <h2>{title}</h2>
              </header>
              <img src={`${primaryImageSmall}`} alt="" />
              <div className="artist-info">
                {artistDisplayName ? (
                  <p>{artistDisplayName}</p>
                ) : (
                  <p>Artist not listed</p>
                )}
                {creditLine ? (
                  <p>Credited: {creditLine}</p>
                ) : (
                  <p>Credits not listed</p>
                )}
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default GalleryContainer;
