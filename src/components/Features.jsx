import { Link } from "react-scroll";

export default function Features(){
    return(
        <div className="max-w-7xl mx-auto px-4 py-12">
            
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10">Seasonal Recipes for Your Family Table</h2>
            
            <div className="flex flex-wrap justify-between gap-6">
            {/*     Column 1    */}
            <div className="features w-full h-120 sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                bg-[url(./assets/sidedish.jpg)] hover:bg-cover hover:bg-center
                transition-all duration-300 group relative flex flex-col items-center justify-center p-6 text-center">
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 rounded-xl"></div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl mb-2 text-white">Side Dishes</h3>
                        <p className="text-gray-200 py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <Link to="recipes" smooth={true} duration={500} className="text-xl cursor-pointer text-white underline">
                            Read more
                        </Link>
                    </div>
                </div>

            {/*     Column 2   */}
            <div className="features w-full h-120 sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                bg-[url(./assets/maincourse.jpg)] hover:bg-cover hover:bg-center
                transition-all duration-300 group relative flex flex-col items-center justify-center p-6 text-center">
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 rounded-xl"></div>

                <div className="relative z-10 text-center">
                    <h3 className="text-3xl mb-2 text-white">Main Course</h3>
                    <p className="text-gray-200 py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Link to="recipes" smooth={true} duration={500} className="text-xl cursor-pointer text-white underline">Read more</Link>
                </div>
            </div>

            {/*     Column 3   */}
                <div className="features w-full h-120 sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                bg-[url(./assets/dessert.jpg)] hover:bg-cover hover:bg-center
                transition-all duration-300 group relative flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 rounded-xl"></div>
                    
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl mb-2 text-white">Dessert</h3>
                        <p className="text-gray-200 py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <Link to="recipes" smooth={true} duration={500} className="text-xl cursor-pointer text-white underline">Read more</Link>
                    </div>
                </div>
            </div>


        </div>

    );
}