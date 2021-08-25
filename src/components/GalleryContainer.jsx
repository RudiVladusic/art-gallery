import { useContext } from "react";
import InitialDataContext from "../contexts/InitialDataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import ArtCard from "./ArtCard";

SwiperCore.use([Navigation]);

const GalleryContainer = () => {
  const { initialData } = useContext(InitialDataContext);
  return (
    <section className="gallery-main__container">
      <Swiper
        spaceBetween={10}
        tag="section"
        wrapperTag="div"
        id="main"
        navigation
        // centeredSlides="true"
        grabCursor="true"
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
            slidesPerView: 4,
          },

          1200: {
            slidesPerView: 4,
          },

          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {initialData
          ? initialData.map((data) => {
              return (
                <SwiperSlide key={data.objectID} tag="div">
                  <ArtCard data={data} />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </section>
  );
};

export default GalleryContainer;
