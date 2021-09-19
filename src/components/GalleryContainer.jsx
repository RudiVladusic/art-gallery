import { useContext } from "react";
import InitialDataContext from "../contexts/InitialDataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Lazy } from "swiper";
import "swiper/swiper-bundle.css";
import ArtCard from "./ArtCard";
import Loading from "./presentational/Loading";
import LoadingAndErrorContext from "../contexts/LoadingAndErrorContext";
import Error from "../components/presentational/Error";

const GalleryContainer = () => {
  const { initialData } = useContext(InitialDataContext);
  const { isLoading, isError } = useContext(LoadingAndErrorContext);
  SwiperCore.use([Navigation, Lazy]);
  return (
    <section className="gallery-main__container">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <Swiper
          spaceBetween={10}
          tag="section"
          wrapperTag="div"
          id="main"
          navigation
          // pagination
          // centeredSlides="true"
          grabCursor="true"
          lazy="true"
          preloadImages="false"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            500: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2,
            },

            820: {
              slidesPerView: 3,
            },

            1000: {
              slidesPerView: 3,
            },

            1200: {
              slidesPerView: 4,
            },

            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {initialData.map((data) => {
            return (
              <SwiperSlide key={data.objectID} tag="div">
                <ArtCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default GalleryContainer;
