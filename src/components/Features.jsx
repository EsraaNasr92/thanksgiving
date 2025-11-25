export default function Features(){
    return(
        <div className="flex flex-wrap gap-6 p-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

            {/*     Column 1    */}
            <div className="w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                hover:bg-[url(./assets/sidedish.jpg)] hover:bg-cover hover:bg-center 
                hover:bg-black/40 hover:bg-blend-overlay
                transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-2">Side Dishes</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">Read more</a>
            </div>

            {/*     Column 2   */}
            <div className="w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                hover:bg-[url(./assets/maincourse.jpg)] hover:bg-cover hover:bg-center 
                hover:bg-black/40 hover:bg-blend-overlay
                transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-2">Main Course</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">Read more</a>
            </div>

            {/*     Column 3   */}
            <div className="w-full sm:w-[48%] lg:w-[32%] bg-white shadow-md p-6 rounded-xl
                hover:bg-[url(./assets/dessert.jpg)] hover:bg-cover hover:bg-center 
                hover:bg-black/40 hover:bg-blend-overlay
                transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-2">Bread & Dessert</h3>
                <p className="text-gray-600 py-5 group-hover:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">Read more</a>
            </div>

        </div>

    );
}