import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoMdArrowForward } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import banner4 from "../../assets/banner/banner-4.png";
import banner6 from "../../assets/banner/banner-6.png";
import banner7 from "../../assets/banner/banner-7.png";
import newsLetterImg from "../../assets/banner/Coupon.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";



const Home = () => {

    return (
        <>
            <HomeBanner />

            <HomeCat />

            <section className="homeProductSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hand-bag-shop-poster-design-template-08262507a3da751e1886caf03e3090f7_screen.jpg?ts=1737116616" alt="Hand bag banner" className="cursor w-100" />

                                </div>
                                <div className="banner mt-4">
                                    <img src={banner4} alt="50% Sale banner" className="cursor w-100" />

                                </div>
                            </div>

                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Sellers</h3>
                                    <p className="text-light text-sml mb-0">Discover our most popular products</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View all<IoMdArrowForward /></Button>
                            </div>
                            <div className="product_row w-100 mt-3">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="text-light text-sml mb-0">Discover our latest arrivals</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View all<IoMdArrowForward /></Button>
                            </div>
                            <div className="product_row product_row2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner6} className="cursor w-100" alt="banner 6" />
                                </div>
                                <div className="banner">
                                    <img src={banner7} className="cursor w-100" alt="banner 7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">20$ Discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-white">Join our email subscription
                                <br />now to get updates on promotions and coupons.</p>
                            <form>
                                <CiMail />
                                <input type="text" placeholder="Your Email Address"></input>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg} alt="Coupon image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;