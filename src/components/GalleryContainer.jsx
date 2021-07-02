import { Link } from "react-router-dom";
import { useContext } from "react";
import InitialDataContext from "../contexts/InitialDataContext";
const GalleryContainer = () => {
  const { initialData } = useContext(InitialDataContext);
  return (
    <section className="gallery-main__container">
      {initialData
        ? initialData.map((data) => {
            const {
              title,
              objectDate,
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

                    {objectDate ? (
                      <p>Date: {objectDate}</p>
                    ) : (
                      <p>Date not listed</p>
                    )}
                  </div>
                </Link>
              </article>
            );
          })
        : ""}
    </section>
  );
};

export default GalleryContainer;
