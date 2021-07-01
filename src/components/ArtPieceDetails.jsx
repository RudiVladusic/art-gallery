import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "./presentational/Loading";
import key from "weak-key";
const ArtPieceDetails = () => {
  const { id } = useParams();
  const [artDetails, setArtDetails] = useState(Array);

  useEffect(() => {
    const getArtDetails = async () => {
      const call = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      const result = await call.json();
      if (!call.ok) {
        const message = `Something went wrong while fetching`;
        throw new Error(message);
      }
      setArtDetails([result]);
    };
    getArtDetails();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="art-details-main">
      {artDetails.length > 0 ? (
        artDetails.map((data) => {
          const {
            objectName,
            culture,
            artistDisplayBio,
            artistDisplayName,
            primaryImage,
            objectDate,
            department,
            medium,
            title,
            accesionYear,
            classification,
            country,
            tags,
            creditLine,
          } = data;
          return (
            <article
              key={key(ArtPieceDetails)}
              className="art-details-main__article"
            >
              <img src={primaryImage} alt="art" width="800" height="450" />
              <aside className="art-details-main__article-aside">
                <div className="art-details-main__article--title">
                  <h3>{title}</h3>
                </div>
                <div className="art-details-main__article-aside--info">
                  <h4>
                    <span>Object name:</span> {objectName || "Not listed"}
                  </h4>
                  <p>
                    <span>Artist:</span> {artistDisplayName || "Not listed"}
                  </p>
                  <p>
                    <span>Bio:</span> {artistDisplayBio || "Not listed"}
                  </p>
                  <p>
                    <span>Culture:</span> {culture || "Not listed"}
                  </p>
                  <p>
                    <span>Accesion Year:</span> {accesionYear || "Not listed"}
                  </p>
                  <p>
                    <span>Country:</span> {country || "Not listed"}
                  </p>
                  <p>
                    <span>Classification:</span>{" "}
                    {classification || "Not listed"}
                  </p>
                </div>
                <div className="art-details-main__article-aside--department">
                  <h4>
                    <span>Department:</span> {department || "Not listed"}
                  </h4>
                  <p>
                    <span>Medium:</span> {medium || "Not listed"}
                  </p>
                  <p>
                    <span>Date:</span> {objectDate || "Not listed"}
                  </p>
                  <p>
                    <span>Credit line:</span> {creditLine || "Not listed"}
                  </p>
                  {tags &&
                    tags.map((hashtag, index) => {
                      return <p key={index}>#{hashtag.term}</p>;
                    })}
                </div>
              </aside>
            </article>
          );
        })
      ) : (
        <Loading />
      )}
    </main>
  );
};
export default ArtPieceDetails;
