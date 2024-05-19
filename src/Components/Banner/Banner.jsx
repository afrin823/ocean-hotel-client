import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../public/style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mx-auto w-11/12  my-12'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper rounded"
            >
                <SwiperSlide>
                    <div className="hero min-h-[500px] bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse text-start">
                            <img src="https://i.ibb.co/WtLWy5h/istockphoto-104731717-612x612.jpg"  className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                            <h1 className="text-5xl font-bold mb-6 ">The hotel has a modern <br /> feel and relaxing </h1>
                            <p>Hotel Description. Hotel Property Descriptions supplies additional information <br /> about a hotel property or chain, based on keyword requests, <br /> that can be used ...</p>
                            <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[500px] bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse text-start">
                            <img src="https://i.ibb.co/jJtmQpR/hotel-exterior.jpg"   className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                            <h1 className="text-5xl font-bold mb-6 ">The hotel has a modern <br /> feel and relaxing </h1>
                            <p>Hotel Description. Hotel Property Descriptions supplies additional information <br /> about a hotel property or chain, based on keyword requests, <br /> that can be used ...</p>
                            <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[500px] bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse text-start">
                            <img src="https://i.ibb.co/br56wtG/istockphoto-119926339-612x612.jpg"  className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                            <h1 className="text-5xl font-bold mb-6 ">The hotel has a modern <br /> feel and relaxing </h1>
                            <p>Hotel Description. Hotel Property Descriptions supplies additional information <br /> about a hotel property or chain, based on keyword requests, <br /> that can be used ...</p>
                            <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;