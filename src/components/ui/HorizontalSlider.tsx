
'use client'

import React, { useRef, useState, useEffect } from 'react';
const HorizontalSlider = () => {
    const array: Array<string> = ["engineering", "it & software", "medical", "civil engineering", "data science"]
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];

    // Function to update button visibility based on scroll position
    const updateScrollButtons = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    // Scroll the slider in the given direction
    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Attach the scroll event listener and clean up when component unmounts
    useEffect(() => {
        updateScrollButtons(); // Initial check
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', updateScrollButtons);
            return () => slider.removeEventListener('scroll', updateScrollButtons);
        }
    }, []);

    return (
        <div className="relative p-2 rounded-md w-full">
            {canScrollLeft && (
                <button
                    className="absolute rounded-md left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
                    onClick={() => scrollSlider('left')}
                >
                    &#9664; {/* Left arrow icon */}
                </button>
            )}

            <div
                ref={sliderRef}
                className="flex overflow-x-scroll rounded-md items-center gap-2 scroll-smooth scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {/* Example slider content */}
                {array.map((ct, i) => (
                    <div key={i} className={`min-w-[200px] w-full`}>
                        {/* Assigning a unique background color from the colors array */}
                        <div className={`grid grid-cols-6 items-center gap-2 ${colors[i % colors.length]} p-2 rounded-md`}>
                            <div className='w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center'>
                                {/* <img src="" className="w-full h-full object-cover" /> */}
                            </div>
                            <div className='col-span-4 text-md text-white font-semibold'>
                                <h1 className="truncate">{ct.toUpperCase()}</h1>
                            </div>
                            <div className='w-5 h-5 rounded-md bg-gray-100 overflow-hidden flex items-center justify-center'>
                                {/* <img src="" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {canScrollRight && (
                <button
                    className="absolute rounded-md right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
                    onClick={() => scrollSlider('right')}
                >
                    &#9654; {/* Right arrow icon */}
                </button>
            )}
        </div>
    );
};

export default HorizontalSlider;
