import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import catogory from "../../assets/catogory/cat.png";
const HomeCat = () => {
    return (
        <section className="homeCategorySection">
            <div className="container">
                <h3 className='mb-3 hd'>Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item text-center cursor">
                            <img src={catogory} alt="cat1" />
                            <h6>Watches</h6>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                        
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src={catogory} alt="cat1" />
                            
                        <h6>Watches</h6>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </section>
    );
}

export default HomeCat;