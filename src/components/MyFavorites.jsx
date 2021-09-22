import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import ArtCard from "./ArtCard";
import Loading from "../components/presentational/Loading";
import LoadingAndErrorContext from "../contexts/LoadingAndErrorContext";
import NoFavorites from "./presentational/NoFavorites";

const MyFavorites = () => {
  SwiperCore.use([Navigation]);
  const { isLoading, setIsLoading } = useContext(LoadingAndErrorContext);
  const [toDisplay, setToDisplay] = useState(Array);
  const [hasFavorites, setHasFavorites] = useState(true);
  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("favs"));

    if (check !== null) {
      setIsLoading(true);
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
          setToDisplay(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      setHasFavorites(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <main className="my-favorites-main">
      <header>
        <h2>My Favorites</h2>
      </header>

      {isLoading ? (
        <Loading />
      ) : hasFavorites ? (
        <Swiper
          spaceBetween={25}
          tag="section"
          wrapperTag="div"
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
              <SwiperSlide key={data.objectID} tag="div">
                <ArtCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : !hasFavorites ? (
        <NoFavorites />
      ) : null}
    </main>
  );
};

export default MyFavorites;
