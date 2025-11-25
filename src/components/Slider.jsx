import Carousel from "./Carousel";

export default function slider(){
    return(
        <div className="slider flex mx-auto my-15 max-w-7xl px-2 sm:px-6 lg:px-7 items-center pb-20">
        
            {/* Text section (40%) */}
            <div className="w-[45%] pr-6">
                <h1 className="text-5xl leading-tight">
                Do you already
                have your dish for
                Thanksgiving
                night?
                </h1>

                <div className="button flex items-center py-6 gap-4 my-10">
                <a
                    href="#"
                    className="slider-link bg-[var(--third-color)] text-white inline-flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-600 transition"
                >
                    Check more Recipes
                </a>

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

            {/* Slider section (55%) */}
            <div className="w-[55%] flex justify-end">
                <div className="w-full">
                <Carousel />
                </div>
            </div>
        </div>

    );
}