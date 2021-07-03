import { useState, useEffect } from "react";
import Loading from "./presentational/Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation]);

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
      <header>
        <h2>My Favorites</h2>
      </header>
      <Swiper
        spaceBetween={25}
        tag="section"
        wrapperTag="ul"
        id="main"
        navigation
        // pagination={{ clickable: true }}
        centeredSlides="true"
        grabCursor="true"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },

          820: {
            slidesPerView: 2,
          },

          1000: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => {
          console.log("slide change");
        }}
      >
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
              <SwiperSlide key={objectID} tag="li">
                <article className="gallery-main__article">
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
              </SwiperSlide>
            );
          })
        ) : (
          <Loading />
        )}
      </Swiper>
    </main>
  );
};

export default MyFavorites;
