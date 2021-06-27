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
      console.log(result);
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
          } = data;
          return (
            <article key={index} className="art-details-main__article">
              <img src={primaryImage} alt="" />
              <div className="art-details-main__article--information">
                <h3>
                  {title} - {objectName}
                </h3>
                <p>Artist : {artistDisplayName}</p>
                <p>Bio: {artistDisplayBio}</p>
                <p>Culture: {culture}</p>
              </div>

              <div className="art-details-main__article--additional">
                <h3>Department: {department}</h3>
                <p>Medium: {medium}</p>
                <p>Date: {objectDate}</p>
              </div>
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
