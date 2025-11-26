import AboutImg from '../assets/about.jpg';

export default function About(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-16 lg:py-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* Text Column */}
                <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
                    About Thanksgiving Recipe Hub
                </h2>
                <p className="text-gray-700 mb-4 text-center lg:text-left">
                    <strong>Thanksgiving Recipe Hub</strong> is your cozy corner for all things fall, flavor, and family.  
                    We created this website to inspire home cooks—beginners and pros alike—to bring warmth to their kitchens using <strong>fresh, wholesome American Harvest products</strong>.
                </p>
                <p className="text-gray-700 mb-4 text-center lg:text-left">
                    Here, you’ll find everything you need for a memorable Thanksgiving meal:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-center lg:text-left">
                    <li>🦃 Classic turkey recipes made simple</li>
                    <li>🍠 Comforting sides like mashed sweet potatoes and homemade stuffing</li>
                    <li>🥧 Seasonal pies and desserts that bring everyone to the table</li>
                    <li>🍁 Warm drinks and fall favorites perfect for chilly evenings</li>
                </ul>
                <p className="text-gray-700 mt-4 text-center lg:text-left">
                    Whether you're preparing a traditional feast or trying something new, Thanksgiving Recipe Hub helps you create dishes your family will love—season after season.
                </p>
                </div>

                {/* Image Column */}
                <div className="lg:w-1/2">
                <img
                    src={AboutImg}
                    alt="Thanksgiving feast"
                    className="w-500 h-130 rounded-xl shadow-lg object-cover"
                />
                </div>

            </div>
        </section>
    );
}