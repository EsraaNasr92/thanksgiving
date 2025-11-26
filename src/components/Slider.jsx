import { Link } from "react-scroll";
import Carousel from "./Carousel";

export default function Slider() {
    return (
        <div className="slider flex flex-col lg:flex-row mx-auto my-15 max-w-7xl px-2 sm:px-6 lg:px-7 items-center pb-20">
        
            {/* Text section (original widths kept on large screens) */}
            <div className="w-full lg:w-[45%] pr-0 lg:pr-6 mb-10 lg:mb-0 text-center lg:text-left">
                <h1 className="text-5xl leading-tight">
                    Do you already<br />
                    have your dish for<br />
                    Thanksgiving night?
                </h1>

                <div className="button flex flex-col sm:flex-row items-center sm:items-start py-6 gap-4 my-10">
                    <Link
                        to="recipes"
                        smooth={true}
                        duration={500}
                        className="slider-link cursor-pointer bg-[var(--third-color)] text-white inline-flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-600 transition"
                    >
                        Check more Recipes
                    </Link>

                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="#aa5f24"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"></path>
                    </svg>
                </div>

                <div className="subtext">
                    <h2 className="text-2xl py-3">Don't worry about dinner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, modi!
                    </p>
                </div>
            </div>

            {/* Slider section (original widths kept) */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                <div className="w-full">
                    <Carousel />
                </div>
            </div>
        </div>
    );
}
