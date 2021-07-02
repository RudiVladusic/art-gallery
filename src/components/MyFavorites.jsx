import { useState, useEffect } from "react";
import Loading from "./presentational/Loading";
import { Link } from "react-router-dom";
const MyFavorites = () => {
  const [toDisplay, setToDisplay] = useState(Array);

  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("favs"));

    if (check) {
      const fetchUserFavs = async () => {
        const userFavorites = check.map(
          async (id) =>
            await (
              await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
              )
            ).json()
        );
        return Promise.all(userFavorites);
      };

      fetchUserFavs().then((data) => setToDisplay(data));

      return null;
    }
  }, []);

  return (
    <main className="my-favorites-main">
      {toDisplay.length > 0 ? (
        toDisplay.map((data) => {
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
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default MyFavorites;
