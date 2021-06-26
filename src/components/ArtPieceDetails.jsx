import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "./Loading";
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

  return (
    <main className="art-details-main">
      {artDetails.length > 0 ? (
        artDetails.map((data, index) => {
          const { GalleryNumber, artistDisplayBio, primaryImage } = data;
          return (
            <article key={index} className="art-details-main__article">
              <img src={primaryImage} alt="" />
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
