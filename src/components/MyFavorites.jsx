import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import ArtCard from "./ArtCard";
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
      fetchUserFavs()
        .then((data) => setToDisplay(data))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <main className="my-favorites-main">
      <header>
        <h2>My Favorites</h2>
      </header>
      {toDisplay.length > 0 ? (
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
      ) : null}
    </main>
  );
};

export default MyFavorites;
