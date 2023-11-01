import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/gallery/e1.jpg";
import img2 from "../../images/gallery/e2.jpg";
import img3 from "../../images/gallery/e3.jpg";
import img4 from "../../images/gallery/e4.jpg";
import img5 from "../../images/gallery/e5.jpg";
import img6 from "../../images/gallery/e6.jpg";
import img7 from "../../images/gallery/e7.jpg";
import img8 from "../../images/gallery/e8.jpg";
function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   console.log(images);
  return (
    <>
      <div className="text-center border-y border-[#fff5ed] my-10 py-12">
        <div>
          <h1 className="mb-4 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
            Pet Gallery
          </h1>
          <div className="flex justify-center">
            <h3 className="text-[#f5a887] w-2/3  mb-4 md:mb-8">
              <small>
                Explore our Pet Gallery, a delightful visual journey celebrating
                the love and happiness of pets in various moments. From adorable
                puppies taking their first steps to the heartwarming stories of
                rescued animals finding their forever homes, each image narrates
                a tale of compassion, joy, and the special bonds we share with
                our beloved pets.
              </small>
            </h3>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {images.map((image, index) => (
              <>
                <div>
                  <img
                    className="w-72 h-48 rounded"
                    key={index}
                    src={image}
                    alt=""
                  />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Gallery;
