import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
import banner3 from "../../assets/banner/banner-3.jpg";

const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={banner1} className="w-100" />
                </div>
                <div className="item">
                    <img src={banner2} className="w-100" />
                </div>
                <div className="item">
                    <img src={banner3} className="w-100" />
                </div>

            </Slider>
        </div>
    )

}

export default HomeBanner;