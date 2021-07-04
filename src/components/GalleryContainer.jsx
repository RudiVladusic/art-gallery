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
        {initialData
          ? initialData.map((data) => {
              return (
                <SwiperSlide key={data.objectID} tag="li">
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
