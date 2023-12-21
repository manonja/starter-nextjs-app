'use client';
import React, {FC, useState} from 'react';

import Image from "next/image";
import landin_1 from "../../public/landing_page/landin_1.jpg"


interface ISlideShowProps {
    images: string[];
}

export const SlideShow:FC<ISlideShowProps> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imagesTest = [landin_1 ]

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === imagesTest.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? imagesTest.length - 1 : prevSlide - 1));
    };


    return (
        <div
            // className="relative"
            className="flex w-full justify-center items-center overscroll-none">
            <div
                // className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
                className="flex h-screen w-full justify-center items-center"
                >
                {imagesTest.map((image, index) => (
                    <div key={index} className={index === currentSlide ? ' w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none' : 'hidden'}>
                        <Image src={image} alt={`Slide ${index + 1}`} className="block w-full" />
                    </div>
                ))}

            </div>

    {/*        <button*/}
    {/*            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"*/}
    {/*            type="button"*/}
    {/*            onClick={prevSlide}*/}
    {/*            >*/}
    {/*<span className="inline-block h-8 w-8">*/}
    {/*  <svg*/}
    {/*      xmlns="http://www.w3.org/2000/svg"*/}
    {/*      fill="none"*/}
    {/*      viewBox="0 0 24 24"*/}
    {/*      strokeWidth="1.5"*/}
    {/*      stroke="currentColor"*/}
    {/*      className="h-6 w-6">*/}
    {/*    <path*/}
    {/*        strokeLinecap="round"*/}
    {/*        strokeLinejoin="round"*/}
    {/*        d="M15.75 19.5L8.25 12l7.5-7.5"/>*/}
    {/*  </svg>*/}
    {/*</span>*/}

    {/*        </button>*/}
    {/*        <button*/}
    {/*            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"*/}
    {/*            type="button"*/}
    {/*            onClick={nextSlide}>*/}
    {/*<span className="inline-block h-8 w-8">*/}
    {/*  <svg*/}
    {/*      xmlns="http://www.w3.org/2000/svg"*/}
    {/*      fill="none"*/}
    {/*      viewBox="0 0 24 24"*/}
    {/*      strokeWidth="1.5"*/}
    {/*      stroke="currentColor"*/}
    {/*      className="h-6 w-6">*/}
    {/*    <path*/}
    {/*        strokeLinecap="round"*/}
    {/*        strokeLinejoin="round"*/}
    {/*        d="M8.25 4.5l7.5 7.5-7.5 7.5"/>*/}
    {/*  </svg>*/}
    {/*</span>*/}

    {/*        </button>*/}
        </div>
        )


}
