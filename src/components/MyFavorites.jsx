import { useState, useEffect } from "react";
import Loading from "./presentational/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import ArtCard from "./ArtCard";
SwiperCore.use([Navigation]);

const MyFavorites = () => {
  const [toDisplay, setToDisplay] = useState(Array);
  const [showLoading, setShowLoading] = useState(Boolean);
  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("favs"));
    setShowLoading(true);
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
      fetchUserFavs()
        .then((data) => {
          setShowLoading(false);
          setToDisplay(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <main className="my-favorites-main">
      <header>
        <h2>My Favorites</h2>
      </header>
      {toDisplay.length === 0 && !showLoading ? (
        <h2 className="no-favs">You have no favorites yet!</h2>
      ) : toDisplay.length > 0 && !showLoading ? (
        <Swiper
          spaceBetween={25}
          tag="section"
          wrapperTag="ul"
          id="main"
          navigation
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
        >
          {toDisplay.map((data) => {
            return (
              <SwiperSlide key={data.objectID} tag="li">
                <ArtCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default MyFavorites;
