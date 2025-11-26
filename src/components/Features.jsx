import { Link } from "react-scroll";

export default function Features(){
    return(
        <div className="max-w-7xl mx-auto px-4 py-12">
            
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10">Seasonal Recipes for Your Family Table</h2>
            
            <div className="flex flex-wrap justify-between gap-6">
            {/*     Column 1    */}
            <div className="w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                hover:bg-[url(./assets/sidedish.jpg)] hover:bg-cover hover:bg-center
                hover:bg-black/40 hover:bg-blend-overlay
                transition-all duration-300 group">
                <h3 className="text-xl mb-2">Side Dishes</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <Link to="recipes" smooth={true} duration={500} className="cursor-pointer">Read more</Link>
            </div>

            {/*     Column 2   */}
            <div className="group w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                            transition-all duration-300
                            hover:bg-[url(./assets/maincourse.jpg)] hover:bg-cover hover:bg-center
                            hover:bg-black/40 hover:bg-blend-overlay">
                <h3 className="relative z-10 text-xl mb-2 group-hover:text-gray-200">Main Course</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <Link to="recipes" smooth={true} duration={500} className="cursor-pointer">Read more</Link>
            </div>

            {/*     Column 3   */}
            <div className="w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                hover:bg-[url(./assets/dessert.jpg)] hover:bg-cover hover:bg-center 
                hover:bg-black/40 hover:bg-blend-overlay
                transition-all duration-300 group">
                <h3 className="text-xl mb-2">Bread & Dessert</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <Link to="recipes" smooth={true} duration={500} className="cursor-pointer">Read more</Link>
            </div>
            </div>


        </div>

    );
}