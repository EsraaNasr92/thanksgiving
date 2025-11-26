import { useState } from "react";
import slider1 from "../assets/slider_1.png"; // adjust path if needed


export default function Carousel() {
    const slides = [
        {
            id: 1,
            image: slider1,
        },
        {
            id: 2,
            image: slider1,
        },
        {
            id: 3,
            image: slider1,
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative">
        {/* Slide */}
        <div className="overflow-hidden">
            <div class="img-bg bg-[var(--third-color)] w-120 h-120 rounded-full absolute hidden sm:block"></div>
            <img
                src={slides[current].image}
                alt={`Slide ${current + 1}`}
                className="w-full object-cover relative"
            />
        </div>

        <div className="absolute top-23 left-50 -translate-x-1/2 flex items-center gap-4 font-semibold text-white text-4xl">
                <button onClick={prevSlide}>←</button>
                <span>00{current + 1}</span>
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
}
