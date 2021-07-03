import { Link } from "react-router-dom";
import { useContext } from "react";
import InitialDataContext from "../contexts/InitialDataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

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
        {initialData
          ? initialData.map((data) => {
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
          : ""}
      </Swiper>
    </section>
  );
};

export default GalleryContainer;
