import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "./presentational/Loading";
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
        console.log("no god, no god please no, no, no, NOOOOO");
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
        artDetails.map((data, index) => {
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
          } = data;
          return (
            <article key={index} className="art-details-main__article">
              <img src={primaryImage} alt="" width="800" height="450" />
              <aside className="art-details-main__article-aside">
                <h3>{title}</h3>
                <h4>Object name: {objectName}</h4>
                <p>Artist : {artistDisplayName || "Not listed"}</p>
                <p>Bio: {artistDisplayBio || "Not listed"}</p>
                <p>Culture: {culture || "Not listed"}</p>
                <p>Accesion Year: {accesionYear || "Not listed"}</p>
                <p>Country: {country || "Not listed"}</p>
                <p>Classification: {classification || "Not listed"}</p>
                <div className="art-details-main__article-aside--department">
                  <h3>Department: {department || "Not listed"}</h3>
                  <p>Medium: {medium || "Not listed"}</p>
                  <p>Date: {objectDate || "Not listed"}</p>
                  {tags &&
                    tags.map((hashtag) => {
                      return <p>#{hashtag.term}</p>;
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
